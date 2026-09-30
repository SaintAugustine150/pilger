# Pilger durch die Zeit

Katholisches Handyspiel von Philipp. Er ist technisch nicht versiert: Erkläre Schritte, die er selbst machen muss, einfach und konkret auf Deutsch. Kommuniziere auf Deutsch, direkt und ohne Floskeln.

## Das Spiel
- Der Spieler pilgert zu Marienwallfahrtsorten und reist an jeder Etappe in die Zeit der Erscheinungen zurück. Jede Etappe erzählt Szenen („heute“ und „damals“) und endet mit einer Prüfung.
- Kapitel 1: Fátima (1916/17), Kapitel 2: Lourdes (1858). Ein Kapitel öffnet sich, wenn alle Etappen des vorigen geschafft sind.
- Drei Kerzen pro Etappe, jeder Fehler löscht eine. Gold gibt es nur, wenn keine Kerze erlischt. Das Spiel soll bewusst nicht zu leicht sein.
- Prüfungstypen: `quiz` (auch Wahr/Falsch mit Feld `s`/`v`), `chrono` (Zeitstrahl), `rosary` (Rosenkranz im Rhythmus), `procession` (Lichter-Merkspiel).
- Sammelkarten: pro Etappe eine, pro Kapitel zwei Bonuskarten (alle Etappen geschafft, alle in Gold).
- Kathedrale: Eine Ruine wird mit Pilgersteinen (1 pro Etappe, +3 beim ersten Gold) und bestimmten Karten wieder aufgebaut. Jeder vollendete Raum öffnet ein Gebet.

## Theologische Leitlinien
- Echtes Gebet ist nie eine Währung. Gebete sind Belohnung und Einladung, nicht Mittel zum Farmen.
- Historische und theologische Fakten sorgfältig prüfen. Im Zweifel weglassen statt raten.

## Dateien (Code liegt flach im Hauptordner, weil GitHub Pages direkt daraus ausliefert; Bilder liegen in `bilder/`)
- `index.html`: lädt Stil, Daten und Spielcode
- `style.css`: gesamtes Design (Azulejo-Blau und Gold, Hell- und Dunkelmodus)
- `spiel.js`: Spiellogik
- `kapitel-1-fatima.js`, `kapitel-2-lourdes.js`: nur Texte und Daten, damit Philipp sie selbst bearbeiten kann. Neue Kapitel als neue Datei `kapitel-N-name.js` anlegen und in `index.html` einbinden.
- `bilder.js`: Liste der vorhandenen Bilder (nur Namen, ohne Ordner und Endung).
- `bilder/kathedrale/`: `raum-stufe.webp` (zum Beispiel `kapelle-0` für die Ruine bis `kapelle-3` für vollendet) und die Außenansicht `aussen.webp`
- `bilder/karten/`: Kartenbilder als `ID.webp` (zum Beispiel `lucia.webp`)
- `neue-bilder/`: Eingang für neue Bilder von Philipp (wird nicht hochgeladen, siehe unten)
- `werkzeuge/bilder-einbinden.py`: bindet die Bilder aus dem Eingang ein
- `sw.js`: Offline-Speicher. **Nach jeder Änderung `VERSION` erhöhen.** Neue Code-Dateien in `FILES` eintragen; die Bilder übernimmt `sw.js` automatisch aus `bilder.js`.
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png`: installierbare App

## Bilder
- Philipp erzeugt die Bilder selbst mit einem Bildgenerator. Kathedrale: 3:4 im 3D-Render-Look, Karten: 1:1 als gemalte Andachtsbildchen.
- Zielgrößen: 750 × 1000 (Kathedrale), 1000 × 750 (Außenansicht), 1024 × 1024 (Karten), jeweils WebP mit Qualität 76.

### Regel: „Binde die neuen Bilder ein“
Philipp legt neue Bilder in `neue-bilder/`. Wenn er „Binde die neuen Bilder ein“ sagt:
1. Dateinamen prüfen. Das Werkzeug erkennt `aussen`, `raum-stufe` (z. B. `grotte-2`) und `karte-ID` oder `ID` (z. B. `karte-lucia`). Heißt eine Datei anders (etwa „ChatGPT Image …“), das Bild ansehen und nachfragen oder nach Rücksprache passend umbenennen.
2. `python3 werkzeuge/bilder-einbinden.py` ausführen. Es verkleinert, schneidet bei abweichendem Seitenverhältnis mittig zu, speichert als WebP am richtigen Ort, trägt in `bilder.js` ein, erhöht `VERSION` in `sw.js` und löscht die Originale aus dem Eingang. Pillow fehlt? `python3 -m pip install --user Pillow`.
3. Hinweise der Ausgabe an Philipp weitergeben (Zuschnitt, zu kleine Vorlage, nicht erkannte Namen).
4. Neue Bilder im Spiel ansehen (lokaler Server) und erst nach Philipps OK hochladen.
Ein vorhandenes Bild mit gleichem Namen wird ersetzt; das ist so gewollt (etwa für die neuen `schiff-0` und `schiff-1`).

## Arbeitsweise
- Spielstand liegt in `localStorage` unter dem Schlüssel `pilger-durch-die-zeit-v1`. Nie die Struktur brechen, sondern bei Bedarf in `migrate()` umwandeln.
- Nach Änderungen testen: lokalen Server starten, die betroffenen Abläufe durchspielen und Philipp einen Link zur Vorschau geben.
- Erst hochladen (commit und push), wenn Philipp es freigibt.

## Geplante Verbesserungen (in dieser Reihenfolge)
1. Navigation: feste Leiste unten (Pilgerweg, Kathedrale, Album) statt unterstrichener Text-Links, Zurück-Pfeil oben links, Abbrechen einer Etappe nur mit Rückfrage
2. Testmodus: verstecktes Menü zum Freischalten von Kapiteln, Setzen von Steinen, Springen zu Etappen
3. Danach Inhalte:
   - gemalte Landkarte pro Kapitel statt Etappenliste
   - Außenansicht der Kathedrale mit Zwischenstufen
   - ein Bild pro Etappe für die „damals“-Szenen
   - „Mehr erfahren“ mit Katechismus-Verweisen
   - Kirchenjahr im Spiel (13. Mai, 11. Februar)
   - Heiliger des Tages als Sammelkarte am Festtag
   - Pilgerpass mit Stempeln
   - Kartensets schalten Kathedralen-Ausstattung frei
   - Übungsmodus mit Bestwert
   - weitere Kapitel: Guadalupe (1531), Jakobsweg

## Offene Punkte
- Kirchenschiff: Die Bilder `schiff-1` und `schiff-0` passen nicht zu `schiff-2` und `schiff-3` (anderer Chor und Altar). Philipp erzeugt sie neu aus `schiff-2`.
- Kartenbilder und die Bilder der Lourdes-Grotte (`grotte-0` bis `grotte-3`) stehen noch aus.
