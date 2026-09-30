#!/usr/bin/env python3
"""Bilder aus neue-bilder/ einbinden.

Aufruf im Hauptordner:  python3 werkzeuge/bilder-einbinden.py
Braucht Pillow:         python3 -m pip install --user Pillow

Der Dateiname bestimmt das Ziel (Groß- und Kleinschreibung egal, Endung .png, .jpg oder .webp):
  aussen             -> bilder/kathedrale/aussen.webp       1000 x 750
  <raum>-<0..3>      -> bilder/kathedrale/<raum>-<n>.webp   750 x 1000   (z. B. grotte-2)
  karte-<id> / <id>  -> bilder/karten/<id>.webp             1024 x 1024  (z. B. karte-lucia)
Weicht das Seitenverhältnis ab, wird mittig zugeschnitten. Erkannte Bilder werden in bilder.js
eingetragen, die Version in sw.js wird erhöht und das Original aus neue-bilder/ gelöscht.
Unbekannte Namen bleiben liegen und werden gemeldet.
"""
import pathlib
import re
import sys

from PIL import Image, ImageOps

ROOT = pathlib.Path(__file__).resolve().parent.parent
EINGANG = ROOT / 'neue-bilder'
QUALITAET = 76
ENDUNGEN = {'.png', '.jpg', '.jpeg', '.webp'}
GROESSE = {'aussen': (1000, 750), 'raum': (750, 1000), 'karte': (1024, 1024)}


def raum_ids():
    return re.findall(r"\{id:'(\w+)',name:", (ROOT / 'spiel.js').read_text(encoding='utf-8'))


def karten_ids():
    ids = []
    for f in sorted(ROOT.glob('kapitel-*.js')):
        ids += re.findall(r'^    "([\w-]+)": \{\s*\n\s*"name"', f.read_text(encoding='utf-8'), re.M)
    return ids


def ziel(stem, raeume, karten):
    s = stem.lower()
    if s == 'aussen':
        return 'kathedrale', s, GROESSE['aussen']
    m = re.fullmatch(r'([a-z]+)-([0-3])', s)
    if m and m.group(1) in raeume:
        return 'kathedrale', s, GROESSE['raum']
    kid = s[len('karte-'):] if s.startswith('karte-') else s
    if kid in karten:
        return 'karten', kid, GROESSE['karte']
    return None


def liste_aktualisieren(text, schluessel, neue, sortkey):
    m = re.search(r'(%s: \[)(.*?)(\])' % schluessel, text)
    namen = re.findall(r'"([^"]+)"', m.group(2))
    namen = sorted(set(namen) | set(neue), key=sortkey)
    return text[:m.start(2)] + ', '.join('"%s"' % n for n in namen) + text[m.end(2):]


def main():
    raeume, karten = raum_ids(), karten_ids()
    dateien = sorted(p for p in EINGANG.iterdir() if p.is_file() and not p.name.startswith('.'))
    fertig = {'kathedrale': [], 'karten': []}
    unbekannt = []
    for p in dateien:
        z = ziel(p.stem, raeume, karten) if p.suffix.lower() in ENDUNGEN else None
        if not z:
            unbekannt.append(p.name)
            continue
        ordner, name, (w, h) = z
        img = ImageOps.exif_transpose(Image.open(p))
        img = img.convert('RGBA' if 'A' in img.getbands() else 'RGB')
        hinweis = []
        if abs(img.width / img.height - w / h) > 0.03:
            hinweis.append('zugeschnitten (war %d x %d)' % img.size)
        if img.width < w or img.height < h:
            hinweis.append('Vorlage kleiner als Zielgröße, wird hochskaliert')
        ImageOps.fit(img, (w, h), Image.LANCZOS).save(
            ROOT / 'bilder' / ordner / (name + '.webp'), 'WEBP', quality=QUALITAET, method=6)
        p.unlink()
        fertig[ordner].append(name)
        print('OK   %s -> bilder/%s/%s.webp %s' % (p.name, ordner, name, ', '.join(hinweis)))

    if fertig['kathedrale'] or fertig['karten']:
        bj = ROOT / 'bilder.js'
        t = bj.read_text(encoding='utf-8')
        rang = {r: i for i, r in enumerate(raeume)}
        t = liste_aktualisieren(t, 'kathedrale', fertig['kathedrale'],
                                lambda n: (-1, 0) if n == 'aussen' else (rang.get(n.split('-')[0], 99), int(n.split('-')[1])))
        t = liste_aktualisieren(t, 'karten', fertig['karten'],
                                lambda n: karten.index(n) if n in karten else 999)
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
