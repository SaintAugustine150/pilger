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

## Dateien (alles liegt flach im Hauptordner, weil GitHub Pages direkt daraus ausliefert)
- `index.html`: lädt Stil, Daten und Spielcode
- `style.css`: gesamtes Design (Azulejo-Blau und Gold, Hell- und Dunkelmodus)
- `spiel.js`: Spiellogik
- `kapitel-1-fatima.js`, `kapitel-2-lourdes.js`: nur Texte und Daten, damit Philipp sie selbst bearbeiten kann. Neue Kapitel als neue Datei `kapitel-N-name.js` anlegen und in `index.html` einbinden.
- `bilder.js`: Liste der vorhandenen Bilder. Kathedrale: `raum-stufe.webp` (zum Beispiel `kapelle-0` für die Ruine bis `kapelle-3` für vollendet), Außenansicht `aussen.webp`, Karten `karte-ID.webp`.
- `sw.js`: Offline-Speicher. **Nach jeder Änderung `VERSION` erhöhen** und neue Dateien in `FILES` eintragen.
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png`: installierbare App

## Bilder
- Philipp erzeugt die Bilder selbst mit einem Bildgenerator. Kathedrale: 3:4 im 3D-Render-Look, Karten: 1:1 als gemalte Andachtsbildchen.
- Vor dem Einbinden auf 750 × 1000 (Kathedrale), 1000 × 750 (Außenansicht) oder 1024 × 1024 (Karten) verkleinern und als WebP mit Qualität etwa 76 speichern.

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
