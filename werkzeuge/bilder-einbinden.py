#!/usr/bin/env python3
"""Bilder aus neue-bilder/ einbinden.

Aufruf im Hauptordner:  python3 werkzeuge/bilder-einbinden.py
Braucht Pillow:         python3 -m pip install --user Pillow

Der Dateiname bestimmt das Ziel (Groß- und Kleinschreibung egal, _ und Leerzeichen zählen wie -,
Endung .png, .jpg oder .webp):
  aussen             -> bilder/kathedrale/aussen.webp       1000 x 750
  <raum>-<0..3>      -> bilder/kathedrale/<raum>-<n>.webp   750 x 1000   (z. B. grotte-2)
  weg-<kapitel>      -> bilder/wege/<kapitel>.webp          1024 breit, Höhe beliebig (z. B. weg-fatima)
  karte-<id>, <id>-karte, <id> oder der Kartenname
                     -> bilder/karten/<id>.webp             1024 x 1024  (z. B. lucia_karte,
                                                                          engel_des_friedens_karte)
Weicht das Seitenverhältnis ab, wird mittig zugeschnitten. Erkannte Bilder werden in bilder.js
eingetragen, die Version in sw.js wird erhöht und das Original aus neue-bilder/ gelöscht.
Unbekannte Namen bleiben liegen und werden gemeldet.
"""
import pathlib
import re
import sys
import unicodedata

from PIL import Image, ImageOps

ROOT = pathlib.Path(__file__).resolve().parent.parent
EINGANG = ROOT / 'neue-bilder'
QUALITAET = 76
ENDUNGEN = {'.png', '.jpg', '.jpeg', '.webp'}
GROESSE = {'aussen': (1000, 750), 'raum': (750, 1000), 'karte': (1024, 1024)}
WEG_BREITE = 1024


def slug(text):
    t = unicodedata.normalize('NFKD', text.lower()).encode('ascii', 'ignore').decode()
    return re.sub(r'[^a-z0-9]+', '-', t).strip('-')


def raum_ids():
    return re.findall(r"\{id:'(\w+)',name:", (ROOT / 'spiel.js').read_text(encoding='utf-8'))


def karten():
    """Karten-IDs mit Namen, in der Reihenfolge der Kapitel"""
    k = {}
    for f in sorted(ROOT.glob('kapitel-*.js')):
        k.update(re.findall(r'^    "([\w-]+)": \{\s*\n\s*"name": "([^"]*)"', f.read_text(encoding='utf-8'), re.M))
    return k


def kapitel_ids():
    ids = []
    for f in sorted(ROOT.glob('kapitel-*.js')):
        ids += re.findall(r'^  "id": "([\w-]+)"', f.read_text(encoding='utf-8'), re.M)
    return ids


def ziel(stem, raeume, karten, kapitel):
    s = slug(stem)
    if s == 'aussen':
        return 'kathedrale', s, GROESSE['aussen']
    m = re.fullmatch(r'([a-z]+)-([0-3])', s)
    if m and m.group(1) in raeume:
        return 'kathedrale', s, GROESSE['raum']
    if s.startswith('weg-') and s[4:] in kapitel:
        return 'wege', s[4:], (None, None)
    kid = re.sub(r'^karte-|-karte$', '', s)
    if kid in karten:
        return 'karten', kid, GROESSE['karte']
    treffer = [i for i, name in karten.items() if re.sub(r'^(der|die|das)-', '', slug(name)) == kid]
    if len(treffer) == 1:
        return 'karten', treffer[0], GROESSE['karte']
    return None


def liste_setzen(text, schluessel, ordner, sortkey):
    """Liste in bilder.js = alle Bilder, die im Ordner wirklich liegen"""
    namen = sorted((p.stem for p in (ROOT / 'bilder' / ordner).glob('*.webp')), key=sortkey)
    m = re.search(r'(%s: \[)(.*?)(\])' % schluessel, text)
    return text[:m.start(2)] + ', '.join('"%s"' % n for n in namen) + text[m.end(2):]


def main():
    raeume, karten_, kapitel = raum_ids(), karten(), kapitel_ids()
    dateien = sorted(p for p in EINGANG.iterdir() if p.is_file() and not p.name.startswith('.'))
    fertig = {'kathedrale': [], 'karten': [], 'wege': []}
    unbekannt = []
    for p in dateien:
        z = ziel(p.stem, raeume, karten_, kapitel) if p.suffix.lower() in ENDUNGEN else None
        if not z:
            unbekannt.append(p.name)
            continue
        ordner, name, (w, h) = z
        img = ImageOps.exif_transpose(Image.open(p))
        img = img.convert('RGBA' if 'A' in img.getbands() else 'RGB')
        hinweis = []
        if ordner == 'wege':
            w, h = min(img.width, WEG_BREITE), round(img.height * min(img.width, WEG_BREITE) / img.width)
        elif abs(img.width / img.height - w / h) > 0.03:
            hinweis.append('zugeschnitten (war %d x %d)' % img.size)
        if img.width < w or img.height < h:
            hinweis.append('Vorlage kleiner als Zielgröße, wird hochskaliert')
        ImageOps.fit(img, (w, h), Image.LANCZOS).save(
            ROOT / 'bilder' / ordner / (name + '.webp'), 'WEBP', quality=QUALITAET, method=6)
        p.unlink()
        fertig[ordner].append(name)
        print('OK   %s -> bilder/%s/%s.webp %s' % (p.name, ordner, name, ', '.join(hinweis)))

    if any(fertig.values()):
        bj = ROOT / 'bilder.js'
        t = bj.read_text(encoding='utf-8')
        rang = {r: i for i, r in enumerate(raeume)}
        t = liste_setzen(t, 'kathedrale', 'kathedrale',
                         lambda n: (-1, 0) if n == 'aussen' else (rang.get(n.split('-')[0], 99), int(n.split('-')[1])))
        ids = list(karten_)
        t = liste_setzen(t, 'karten', 'karten', lambda n: (ids.index(n) if n in ids else 999, n))
        t = liste_setzen(t, 'wege', 'wege', lambda n: (kapitel.index(n) if n in kapitel else 999, n))
        bj.write_text(t, encoding='utf-8')
        sw = ROOT / 'sw.js'
        s = sw.read_text(encoding='utf-8')
        s = re.sub(r"pilger-(\d+)", lambda m: 'pilger-%d' % (int(m.group(1)) + 1), s, count=1)
        sw.write_text(s, encoding='utf-8')
        print('bilder.js aktualisiert, sw.js:', re.search(r"pilger-\d+", s).group(0))
    for n in unbekannt:
        print('???  %s: Name nicht erkannt, liegt noch in neue-bilder/' % n)
    if not dateien:
        print('neue-bilder/ ist leer.')
    return 1 if unbekannt else 0


if __name__ == '__main__':
    sys.exit(main())
