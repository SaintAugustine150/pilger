# Pilger durch die Zeit

Katholisches Handyspiel von Philipp. Er ist technisch nicht versiert: Erkläre Schritte, die er selbst machen muss, einfach und konkret auf Deutsch. Kommuniziere auf Deutsch, direkt und ohne Floskeln.

## Das Spiel
- Der Spieler pilgert zu Pilgerorten und reist an jeder Etappe in die Zeit zurück, in der dort Entscheidendes geschah. Jede Etappe erzählt Szenen („heute“ und „damals“) und endet mit einer Prüfung.
- **Nicht nur Marienerscheinungen:** Fátima und Lourdes sind nur der Anfang. Langfristig kommen Kapitel zu biblischen Geschichten an Pilgerorten (etwa im Heiligen Land), zur Kirchengeschichte und zu Heiligen der katholischen Kirche hinzu. Texte, Code und Gestaltung nicht auf Maria oder Erscheinungen festlegen (zum Beispiel feste Begriffe wie „Erscheinung“ in allgemeinen Spieltexten vermeiden).
- **Jede Etappe ist ein Kreislauf:** heute auf dem Weg → Schwelle → Zeitreise ins Jahr `jahr` → Szenen damals → Prüfung (damals) → Belohnung → Rückreise → Rückkehr-Szene heute (`rueckkehr`) → weiter auf der Landkarte. Die letzte Heute-Szene endet an einem Gegenstand oder Sinneseindruck (Fluss, Glocken, Kerze, Fels), den die erste Damals-Szene wieder aufgreift. Neue Etappen immer so schreiben: erst alle Heute-, dann alle Damals-Szenen. Optisch ist damals altes Papier in Sepia (Klasse `era-damals` am `html`-Element), heute klar und blau; dazwischen läuft die Jahreszahl als Übergang.
- **Kapitel sind unterschiedlich lang.** Nicht jede Pilgerreise hat sieben Etappen; Code und Layout (etwa die Landkarte) müssen mit beliebig vielen Etappen funktionieren.
- Kapitel 1: Fátima (1916/17), Kapitel 2: Lourdes (1858). Ein Kapitel öffnet sich, wenn alle Etappen des vorigen geschafft sind.
- Drei Kerzen pro Etappe, jeder Fehler löscht eine. Gold gibt es nur, wenn keine Kerze erlischt. Das Spiel soll bewusst nicht zu leicht sein.
- Prüfungstypen: `quiz` (auch Wahr/Falsch mit Feld `s`/`v`), `chrono` (Zeitstrahl), `rosary` (Rosenkranz im Rhythmus), `procession` (Lichter-Merkspiel).
- Sammelkarten: pro Etappe eine, pro Kapitel zwei Bonuskarten (alle Etappen geschafft, alle in Gold).
- Kathedrale: Eine Ruine wird mit Pilgersteinen (1 pro Etappe, +3 beim ersten Gold) und bestimmten Karten wieder aufgebaut. Jeder vollendete Raum öffnet ein Gebet.

## Theologische Leitlinien
- Echtes Gebet ist nie eine Währung. Gebete sind Belohnung und Einladung, nicht Mittel zum Farmen.
- Historische und theologische Fakten sorgfältig prüfen. Im Zweifel weglassen statt raten.
- Alle Inhalte bleiben innerhalb der Lehre der katholischen Kirche (Maßstab: Katechismus und kirchliche Dokumente). Anerkannte Privatoffenbarungen wie Fátima und Lourdes als von der Kirche für glaubwürdig erklärt darstellen, nicht als Glaubenssatz; Dogmen korrekt formulieren (etwa Unbefleckte Empfängnis nicht mit Jungfrauengeburt verwechseln).

## Dateien (Code liegt flach im Hauptordner, weil GitHub Pages direkt daraus ausliefert; Bilder liegen in `bilder/`)
- `index.html`: lädt Stil, Daten und Spielcode
- `style.css`: gesamtes Design (Azulejo-Blau und Gold, Hell- und Dunkelmodus)
- `spiel.js`: Spiellogik
- `kapitel-1-fatima.js`, `kapitel-2-lourdes.js`: nur Texte und Daten, damit Philipp sie selbst bearbeiten kann. Neue Kapitel als neue Datei `kapitel-N-name.js` anlegen und in `index.html` einbinden.
- `bilder.js`: Liste der vorhandenen Bilder (nur Namen, ohne Ordner und Endung).
- `bilder/kathedrale/`: `raum-stufe.webp` (zum Beispiel `kapelle-0` für die Ruine bis `kapelle-3` für vollendet) und die Außenansicht `aussen.webp`
- `bilder/karten/`: Kartenbilder als `ID.webp` (zum Beispiel `lucia.webp`)
- `bilder/wege/`: gemalte Landkarten der Kapitel als `KAPITEL-ID.webp` (zum Beispiel `fatima.webp`). Den nachgezeichneten Weg und die Orte der Etappen speichert das Kapitel unter `weg` (Wegpunkte in Bildpixeln, `orte` = Wegpunkt je Etappe). Fehlt Bild oder `weg`, oder passt die Zahl der Orte nicht zu den Etappen, zeigt der Pilgerweg automatisch die Etappenliste.
- `neue-bilder/`: Eingang für neue Bilder von Philipp (wird nicht hochgeladen, siehe unten)
- `werkzeuge/bilder-einbinden.py`: bindet die Bilder aus dem Eingang ein
- `sw.js`: Offline-Speicher. **Nach jeder Änderung `VERSION` erhöhen.** Neue Code-Dateien in `FILES` eintragen; die Bilder übernimmt `sw.js` automatisch aus `bilder.js`.
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png`: installierbare App

## Bilder
- Philipp erzeugt die Bilder selbst mit einem Bildgenerator. Kathedrale: 3:4 im 3D-Render-Look, Karten: 1:1 als gemalte Andachtsbildchen.
- Zielgrößen: 750 × 1000 (Kathedrale), 1000 × 750 (Außenansicht), 1024 × 1024 (Karten), jeweils WebP mit Qualität 76.

### Regel: „Binde die neuen Bilder ein“
Philipp legt neue Bilder in `neue-bilder/`. Wenn er „Binde die neuen Bilder ein“ sagt:
1. Dateinamen prüfen. Das Werkzeug erkennt `aussen`, `raum-stufe` (z. B. `grotte-2`), `weg-KAPITEL` (z. B. `weg-fatima`) und Kartenbilder als `karte-ID`, `ID_karte`, `ID` oder mit dem Kartennamen (z. B. `lucia_karte`, `engel_des_friedens_karte`). Heißt eine Datei anders (etwa „ChatGPT Image …“), das Bild ansehen und nachfragen oder nach Rücksprache passend umbenennen.
2. `python3 werkzeuge/bilder-einbinden.py` ausführen. Es verkleinert, schneidet bei abweichendem Seitenverhältnis mittig zu, speichert als WebP am richtigen Ort, trägt in `bilder.js` ein, erhöht `VERSION` in `sw.js` und löscht die Originale aus dem Eingang. Pillow fehlt? `python3 -m pip install --user Pillow`.
3. Hinweise der Ausgabe an Philipp weitergeben (Zuschnitt, zu kleine Vorlage, nicht erkannte Namen).
   Bei einer neuen Landkarte zusätzlich den gemalten Weg nachzeichnen (Raster über das Bild legen, Wegpunkte ablesen, zur Kontrolle einzeichnen) und unter `weg` im Kapitel eintragen.
4. Neue Bilder im Spiel ansehen (lokaler Server) und erst nach Philipps OK hochladen.
Ein vorhandenes Bild mit gleichem Namen wird ersetzt; das ist so gewollt (etwa für die neuen `schiff-0` und `schiff-1`).

## Arbeitsweise
- Spielstand liegt in `localStorage` unter dem Schlüssel `pilger-durch-die-zeit-v1`. Nie die Struktur brechen, sondern bei Bedarf in `migrate()` umwandeln. `pos` merkt sich je Kapitel, an welcher Etappe der Pilger auf der Landkarte steht; ist die nächste Etappe weiter, läuft er beim Öffnen der Karte dorthin.
- Nach Änderungen testen: lokalen Server starten, die betroffenen Abläufe durchspielen und Philipp einen Link zur Vorschau geben.
- Erst hochladen (commit und push), wenn Philipp es freigibt. Er bündelt lieber mehrere Änderungen zu einem Upload; nach einer Aufgabe nicht von sich aus hochladen, sondern sagen, dass die Änderungen bereitliegen.

## Geplante Verbesserungen
Erledigt: Navigation (Leiste unten, Zurück-Pfeil, Abbrechen mit Rückfrage, Zurück-Taste des Handys); gemalte Landkarten für Fátima und Lourdes mit laufendem Pilger.
Landkarten für neue Kapitel: Hochformat (2:3 oder bei langen Wegen höher), ohne Schrift, Weg klar sichtbar, Orte mit freier Fläche; Dateiname `weg-KAPITEL`.
1. Größere Fragenpools, damit sich Wiederholungen neu anfühlen (Fakten sorgfältig prüfen)
2. Kathedralen-Ausstattung als großes Langzeitziel (von Philipp gewünscht). Möglichst wenige neue Bilder: kleine Gegenstände als gezeichnete Symbole, pro Raum höchstens ein zusätzliches Bild „vollständig ausgestattet“, erzeugt durch Bearbeiten des vorhandenen Raumbilds.
3. Testmodus: verstecktes Menü zum Freischalten von Kapiteln, Setzen von Steinen, Springen zu Etappen
4. Weitere Ideen:
   - mehrere Prüfungen pro Etappe, Kapitel-Finale, Meisterprüfung nach Gold
   - Außenansicht der Kathedrale mit Zwischenstufen
   - ein Bild pro Etappe für die „damals“-Szenen
   - „Mehr erfahren“ mit Katechismus-Verweisen
   - Kirchenjahr im Spiel (13. Mai, 11. Februar)
   - Heiliger des Tages als Sammelkarte am Festtag
   - Pilgerpass mit Stempeln
   - Übungsmodus mit Bestwert
   - weitere Kapitel: Guadalupe (1531), Jakobsweg, biblische Orte, Kirchengeschichte, Heilige

## Offene Punkte
- Kirchenschiff: Die Bilder `schiff-1` und `schiff-0` passen nicht zu `schiff-2` und `schiff-3` (anderer Chor und Altar). Philipp erzeugt sie neu aus `schiff-2`.
- Kartenbilder und die Bilder der Lourdes-Grotte (`grotte-0` bis `grotte-3`) stehen noch aus.
