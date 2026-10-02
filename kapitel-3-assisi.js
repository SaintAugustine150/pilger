/* =====================================================================
   Pilger durch die Zeit – Kapitel 3: Assisi
   ---------------------------------------------------------------------
   Diese Datei enthält nur Texte und Daten. Du kannst sie bearbeiten,
   ohne den Spielcode anzufassen. Wichtig: Anführungszeichen "..." und
   Kommas müssen stehen bleiben.

   karten      Sammelkarten: name, sub (Untertitel), rar (1-3 Seltenheit),
               text (Rückseite), hint (Hinweis im Album)
   fragenTitel Name jedes Fragenpools, so erscheint er im Spiel
   fragen      Fragenpools. Normale Frage: q (Frage), a (richtige Antwort),
               w (drei falsche Antworten), e (Erklärung, optional).
               Wahr/falsch: s (Aussage), v (true = wahr, false = falsch)
   ereignisse  Für die Zeitstrahl-Prüfung: t (Text), d (Datum),
               k (Sortierschlüssel JJJJMMTT)
   stempelfarbe Tintenfarbe der Stempel im Pilgerpass
   etappen     ort = kurzer Ortsname für den Stempel im Pilgerpass,
               jahr = Jahr, in das die Zeitreise führt,
               scenes = Erzählszenen (era heute/damals, k Ort, t Text). Die
               letzte Heute-Szene endet an einer Schwelle (ein Gegenstand oder
               Sinneseindruck), die erste Damals-Szene greift sie wieder auf.
               ch = Prüfungen der Etappe. Bei der Rhythmus-Prüfung (rosary)
               kann "perlen" eigene Zeilen vorgeben (t Text, gross = große
               Perle), "fertig" den Satz nach dem Bestehen,
               rueckkehr = Szene zurück in der Gegenwart nach der Prüfung (k, t)
   begleiter   Wegbegleiter des Kapitels: name, kurz (wer er ist), ab (Etappe,
               in der man ihn trifft), abschied (Text im Pilgerpass am Ende).
               Szenen mit "who": "begleiter" zeigen seinen Namen als Kopfzeile.
   weg         Landkarte (Bild bilder/wege/<id>.webp): groesse = Bildgröße,
               pfad = Wegpunkte [x, y] in Bildpixeln entlang des gemalten Weges,
               orte = für jede Etappe die Nummer des Wegpunkts (ab 0), an dem
               ihre Markierung steht. Claude pflegt diese Werte.
   ===================================================================== */
window.KAPITEL = window.KAPITEL || [];
KAPITEL.push({
  "id": "assisi",
  "n": 3,
  "name": "Assisi",
  "years": "1202 bis 1226",
  "lead": "Von La Verna nach Assisi, mehr als eine Woche zu Fuß auf dem Franziskusweg durch die Toskana und Umbrien, und immer wieder zurück in das Leben des heiligen Franziskus.",
  "bonusAll": "portiuncula",
  "bonusGold": "franziskus",
  "stempelfarbe": "#6B4A26",
  "begleiter": {
    "name": "Giulia",
    "kurz": "Architektin aus Mailand, 38 Jahre",
    "ab": "a1",
    "abschied": "Zum Abschied schenkt dir Giulia eine Zeichnung: eine kleine Kapelle mit neuem Dach und offener Tür. „Komm zur Einweihung“, sagt sie. „Und bring nicht zu viel Gepäck mit.“"
  },
  "weg": {
    "groesse": [1024, 1536],
    "pfad": [[340, 1290], [420, 1335], [510, 1365], [575, 1335], [610, 1275], [660, 1245], [700, 1215], [650, 1180], [600, 1150], [640, 1095], [630, 1040], [600, 995], [530, 990], [470, 975], [440, 925], [520, 945], [610, 955], [660, 950], [690, 925], [670, 890], [630, 860], [590, 830], [545, 780], [610, 750], [660, 725], [690, 700], [710, 670], [760, 640], [700, 580], [640, 530], [600, 495], [590, 465], [540, 450], [490, 440], [520, 405], [540, 370], [530, 330], [560, 300], [620, 285], [680, 260], [710, 235], [640, 255], [560, 262], [480, 258], [420, 240], [370, 205], [330, 178]],
    "orte": [0, 8, 14, 22, 27, 34, 40, 46]
  },
  "karten": {
    "francesco": {
      "name": "Der junge Francesco",
      "sub": "Assisi um 1200",
      "rar": 1,
      "text": "Sohn des reichen Tuchhändlers Pietro di Bernardone und seiner Frau Pica. Getauft wurde er auf den Namen Giovanni, doch der Vater nannte ihn Francesco. Er liebte Feste und schöne Kleider und träumte davon, Ritter zu werden.",
      "hint": "Etappe 1 abschließen"
    },
    "aussaetziger": {
      "name": "Der Aussätzige",
      "sub": "Um 1205",
      "rar": 2,
      "text": "Vor Aussätzigen hatte Francesco sich immer geekelt. Eines Tages stieg er vom Pferd und küsste einem die Hand. Später schrieb er: Was mir bitter schien, wurde mir in Süßigkeit der Seele und des Leibes verwandelt.",
      "hint": "Etappe 2 abschließen"
    },
    "damiano": {
      "name": "Das Kreuz von San Damiano",
      "sub": "Um 1205",
      "rar": 3,
      "text": "Im verfallenen Kirchlein San Damiano hörte Francesco vom Kreuz die Worte: „Franziskus, geh und stelle mein Haus wieder her, das, wie du siehst, ganz verfällt.“ Das Kreuz hängt heute in der Basilika Santa Chiara in Assisi.",
      "hint": "Etappe 3 abschließen"
    },
    "bischof": {
      "name": "Vor dem Bischof",
      "sub": "1206",
      "rar": 2,
      "text": "Vor Bischof Guido und dem Volk von Assisi gab Francesco seinem Vater das Geld und sogar die Kleider zurück. „Von nun an will ich sagen: Vater unser, der du bist im Himmel.“ Der Bischof hüllte ihn in seinen Mantel.",
      "hint": "Etappe 4 abschließen"
    },
    "brueder": {
      "name": "Die ersten Brüder",
      "sub": "1208 bis 1210",
      "rar": 1,
      "text": "Bernhard von Quintavalle, ein reicher Bürger Assisis, verschenkte sein Vermögen an die Armen und folgte Francesco als erster Gefährte. Um 1209 bestätigte Papst Innozenz III. mündlich die Lebensweise der kleinen Bruderschaft.",
      "hint": "Etappe 5 abschließen"
    },
    "klara": {
      "name": "Klara von Assisi",
      "sub": "1193–1253",
      "rar": 2,
      "text": "In der Nacht nach dem Palmsonntag 1212 verließ die junge Adelige heimlich ihr Elternhaus. In der Portiuncula schnitt Francesco ihr das Haar ab, und sie gab sich ganz Gott. Über vierzig Jahre lebte sie mit ihren Schwestern in San Damiano.",
      "hint": "Etappe 6 abschließen"
    },
    "greccio": {
      "name": "Die Krippe von Greccio",
      "sub": "Weihnachten 1223",
      "rar": 2,
      "text": "Francesco wollte mit eigenen Augen sehen, wie arm Jesus in Betlehem zur Welt kam. In einer Höhle bei Greccio ließ er eine Krippe mit Heu, einen Ochsen und einen Esel bereiten. Dort wurde in der Heiligen Nacht die Messe gefeiert.",
      "hint": "Etappe 7 abschließen"
    },
    "sonnengesang": {
      "name": "Der Sonnengesang",
      "sub": "1225",
      "rar": 3,
      "text": "Krank und fast blind dichtete Francesco ein Loblied auf Gott für Bruder Sonne, Schwester Mond, Bruder Wind, Schwester Wasser, Bruder Feuer und Mutter Erde. Es gilt als eines der ersten großen Gedichte in italienischer Sprache.",
      "hint": "Etappe 8 abschließen"
    },
    "portiuncula": {
      "name": "Die Portiuncula",
      "sub": "Santa Maria degli Angeli",
      "rar": 2,
      "text": "Das „kleine Stück Land“ mit der Kapelle Unserer Lieben Frau von den Engeln war Francescos liebster Ort. Hier begann der Orden, hier starb er. Heute steht die kleine Kapelle mitten in einer großen Basilika.",
      "hint": "Alle acht Etappen abschließen"
    },
    "franziskus": {
      "name": "Der heilige Franziskus",
      "sub": "Gedenktag 4. Oktober",
      "rar": 3,
      "text": "Schon zwei Jahre nach seinem Tod wurde er 1228 heiliggesprochen. Er ist Patron Italiens und Patron des Umweltschutzes. Papst Franziskus wählte 2013 als erster Papst seinen Namen.",
      "hint": "Alle acht Etappen in Gold abschließen"
    }
  },
  "fragenTitel": {
    "jugend": "Der junge Francesco",
    "umkehr": "Die Umkehr",
    "damiano": "San Damiano",
    "brueder": "Die ersten Brüder",
    "klara": "Klara von Assisi",
    "heimgang": "Die letzten Jahre"
  },
  "fragen": {
    "jugend": [
      {
        "q": "Wie hieß der Vater des Franziskus?",
        "a": "Pietro di Bernardone",
        "w": [
          "Bernhard von Quintavalle",
          "Guido von Assisi",
          "Giovanni Offreduccio"
        ]
      },
      {
        "q": "Womit handelte sein Vater?",
        "a": "Mit Tuch und Stoffen",
        "w": [
          "Mit Wein",
          "Mit Salz",
          "Mit Pferden"
        ],
        "e": "Für seine Geschäfte reiste er oft nach Frankreich."
      },
      {
        "q": "Auf welchen Namen wurde Franziskus getauft?",
        "a": "Giovanni",
        "w": [
          "Pietro",
          "Angelo",
          "Leone"
        ],
        "e": "Der Vater nannte ihn Francesco, „den kleinen Franzosen“."
      },
      {
        "q": "Wie hieß seine Mutter?",
        "a": "Pica",
        "w": [
          "Ortolana",
          "Chiara",
          "Agnese"
        ],
        "e": "Ortolana hieß die Mutter der heiligen Klara."
      },
      {
        "q": "Um welches Jahr wurde Franziskus geboren?",
        "a": "1181 oder 1182",
        "w": [
          "1150",
          "1210",
          "1226"
        ]
      },
      {
        "q": "Gegen welche Nachbarstadt zog Assisi 1202 in den Krieg?",
        "a": "Perugia",
        "w": [
          "Florenz",
          "Spoleto",
          "Rom"
        ]
      },
      {
        "q": "Was geschah mit Franziskus nach der verlorenen Schlacht?",
        "a": "Er war etwa ein Jahr lang gefangen",
        "w": [
          "Er wurde zum Ritter geschlagen",
          "Er floh nach Frankreich",
          "Er wurde Bürgermeister von Assisi"
        ]
      },
      {
        "q": "Was wollte der junge Franziskus 1205 werden?",
        "a": "Ein berühmter Ritter",
        "w": [
          "Priester",
          "Mönch",
          "Arzt"
        ]
      },
      {
        "q": "Wohin wollte er 1205 als Ritter ziehen?",
        "a": "Nach Apulien",
        "w": [
          "Nach Jerusalem",
          "Nach Frankreich",
          "Nach Spanien"
        ]
      },
      {
        "q": "Wo hörte er im Traum die Frage, ob er lieber dem Herrn oder dem Knecht dienen wolle?",
        "a": "In Spoleto",
        "w": [
          "In Perugia",
          "In Rom",
          "In Gubbio"
        ],
        "e": "Daraufhin kehrte er nach Assisi zurück."
      },
      {
        "q": "Wem schenkte Franziskus vor dem Aufbruch seine prächtige Kleidung?",
        "a": "Einem verarmten Ritter",
        "w": [
          "Seinem jüngeren Bruder",
          "Dem Bischof",
          "Einem Spielmann"
        ]
      },
      {
        "q": "Was tat Franziskus, nachdem er einen Bettler im Laden seines Vaters abgewiesen hatte?",
        "a": "Er lief ihm nach und beschenkte ihn reichlich",
        "w": [
          "Er ließ ihn wegjagen",
          "Er vergaß ihn sofort",
          "Er schickte ihn zum Bischof"
        ]
      },
      {
        "q": "Wofür war der junge Franziskus in Assisi bekannt?",
        "a": "Als großzügiger Anführer bei den Festen der Jugend",
        "w": [
          "Als strenger Büßer",
          "Als bester Schüler der Domschule",
          "Als geiziger Kaufmann"
        ]
      },
      {
        "q": "In welcher Sprache sang Franziskus gern Lieder?",
        "a": "Auf Französisch",
        "w": [
          "Auf Latein",
          "Auf Deutsch",
          "Auf Griechisch"
        ]
      },
      {
        "q": "In welcher Landschaft liegt Assisi?",
        "a": "In Umbrien",
        "w": [
          "In der Toskana",
          "Im Latium",
          "In Venetien"
        ]
      },
      {
        "q": "Am Hang welches Berges liegt Assisi?",
        "a": "Am Monte Subasio",
        "w": [
          "Am Monte Amiata",
          "Am Gran Sasso",
          "Am Monte Cassino"
        ]
      }
    ],
    "umkehr": [
      {
        "s": "In Spoleto hörte Franziskus im Traum die Frage, wer ihm mehr geben könne, der Herr oder der Knecht.",
        "v": true
      },
      {
        "s": "Nach dem Traum zog Franziskus weiter nach Apulien in den Krieg.",
        "v": false,
        "e": "Er kehrte nach Assisi zurück."
      },
      {
        "s": "Vor Aussätzigen hatte Franziskus sich früher geekelt.",
        "v": true
      },
      {
        "s": "Franziskus stieg vom Pferd und küsste einem Aussätzigen die Hand.",
        "v": true
      },
      {
        "s": "In seinem Testament schrieb Franziskus, die Begegnung mit den Aussätzigen sei ihm immer bitter geblieben.",
        "v": false,
        "e": "Was ihm bitter schien, wurde ihm in Süßigkeit verwandelt."
      },
      {
        "s": "Nach seiner Umkehr pflegte Franziskus Aussätzige.",
        "v": true
      },
      {
        "s": "Aussätzige mussten damals außerhalb der Städte leben.",
        "v": true
      },
      {
        "s": "Franziskus riet, Aussätzige zu meiden, um sich nicht anzustecken.",
        "v": false
      },
      {
        "s": "Seine Freunde fragten, ob er heiraten wolle. Er sprach von einer Braut, edler als jede andere.",
        "v": true,
        "e": "Gemeint war die Armut."
      },
      {
        "s": "Franziskus betete nach seiner Umkehr oft allein in einer Höhle bei Assisi.",
        "v": true
      },
      {
        "s": "Auf einer Pilgerfahrt nach Rom tauschte Franziskus seine Kleider mit einem Bettler.",
        "v": true
      },
      {
        "s": "Franziskus war zum Priester geweiht.",
        "v": false,
        "e": "Er war Diakon. Zum Priester ließ er sich aus Demut nicht weihen."
      },
      {
        "s": "Der junge Franziskus war der Sohn armer Bauern.",
        "v": false,
        "e": "Sein Vater war ein reicher Tuchhändler."
      },
      {
        "s": "Als junger Mann kämpfte Franziskus für Assisi gegen Perugia.",
        "v": true
      }
    ],
    "damiano": [
      {
        "q": "Was sagte die Stimme vom Kreuz zu Franziskus?",
        "a": "„Geh und stelle mein Haus wieder her“",
        "w": [
          "„Geh nach Rom zum Papst“",
          "„Zieh nach Jerusalem“",
          "„Bleib für immer in dieser Kirche“"
        ]
      },
      {
        "q": "In welchem Zustand war San Damiano damals?",
        "a": "Es war halb verfallen",
        "w": [
          "Es war gerade neu gebaut",
          "Es war prächtig geschmückt",
          "Es war eine Burg"
        ]
      },
      {
        "q": "Wie verstand Franziskus den Auftrag zuerst?",
        "a": "Er wollte das Kirchlein mit eigenen Händen wieder aufbauen",
        "w": [
          "Er schrieb sofort an den Papst",
          "Er wurde Baumeister in Rom",
          "Er gründete gleich einen Orden"
        ]
      },
      {
        "q": "Womit wollte Franziskus die Arbeiten zuerst bezahlen?",
        "a": "Mit dem Erlös aus Stoffen seines Vaters und einem Pferd",
        "w": [
          "Mit Geld vom Bischof",
          "Mit einem Preis aus einem Turnier",
          "Mit dem Erbe seiner Mutter"
        ]
      },
      {
        "q": "Was tat der Priester von San Damiano mit diesem Geld?",
        "a": "Er wollte es nicht annehmen",
        "w": [
          "Er kaufte Kerzen davon",
          "Er baute ein Pfarrhaus",
          "Er schickte es nach Rom"
        ],
        "e": "Franziskus warf es schließlich auf ein Fensterbrett."
      },
      {
        "q": "Wie reagierte sein Vater auf den Verkauf der Stoffe?",
        "a": "Er wurde zornig und sperrte ihn zu Hause ein",
        "w": [
          "Er lobte ihn vor der Stadt",
          "Er schenkte ihm noch mehr Stoffe",
          "Er zog nach Frankreich"
        ]
      },
      {
        "q": "Wer befreite Franziskus aus dem Hausarrest?",
        "a": "Seine Mutter Pica",
        "w": [
          "Der Bischof",
          "Sein Bruder",
          "Der Priester von San Damiano"
        ]
      },
      {
        "q": "Wie besorgte sich Franziskus Steine für den Bau?",
        "a": "Er bettelte in Assisi darum und sang dabei",
        "w": [
          "Er kaufte sie in Perugia",
          "Er brach sie aus der Stadtmauer",
          "Der Bischof schenkte sie ihm"
        ]
      },
      {
        "q": "Welche Kirchen baute Franziskus außerdem wieder auf?",
        "a": "San Pietro und die Portiuncula",
        "w": [
          "Den Petersdom",
          "Den Dom von Assisi",
          "Die Lateranbasilika"
        ]
      },
      {
        "q": "Wie sieht das Kreuz von San Damiano aus?",
        "a": "Ein bemaltes Holzkreuz nach Art der Ikonen",
        "w": [
          "Ein Kreuz aus Gold und Edelsteinen",
          "Ein Kreuz aus Stein",
          "Ein schlichtes Kreuz ohne Bild"
        ]
      },
      {
        "q": "Wo hängt das Kreuz von San Damiano heute?",
        "a": "In der Basilika Santa Chiara in Assisi",
        "w": [
          "Noch immer in San Damiano",
          "Im Petersdom",
          "In der Portiuncula"
        ]
      },
      {
        "q": "Wie versteht man den Auftrag vom Kreuz heute?",
        "a": "Als Auftrag, die ganze Kirche von innen zu erneuern",
        "w": [
          "Als Auftrag, Burgen zu bauen",
          "Als Auftrag, Assisi zu regieren",
          "Als Auftrag, Handel zu treiben"
        ]
      },
      {
        "q": "Wer lebte später mit ihren Schwestern in San Damiano?",
        "a": "Klara",
        "w": [
          "Die ersten Brüder",
          "Der Bischof von Assisi",
          "Benediktinermönche"
        ]
      },
      {
        "q": "Mit welchen Worten beginnt das Gebet des Franziskus vor dem Kreuz von San Damiano?",
        "a": "„Höchster, glorreicher Gott, erleuchte die Finsternis meines Herzens“",
        "w": [
          "„Herr, mach mich zu einem Werkzeug deines Friedens“",
          "„Gegrüßet seist du, Maria“",
          "„Komm, Heiliger Geist“"
        ],
        "e": "Das bekannte Friedensgebet „Herr, mach mich zu einem Werkzeug deines Friedens“ stammt nicht von Franziskus, sondern aus dem 20. Jahrhundert."
      },
      {
        "q": "Worum bittet Franziskus in diesem Gebet?",
        "a": "Um rechten Glauben, sichere Hoffnung und vollkommene Liebe",
        "w": [
          "Um Reichtum und Gesundheit",
          "Um den Sieg über Perugia",
          "Um ein langes Leben"
        ]
      }
    ],
    "brueder": [
      {
        "q": "Wer war der erste Gefährte des Franziskus?",
        "a": "Bernhard von Quintavalle",
        "w": [
          "Bruder Leo",
          "Bruder Elias",
          "Antonius von Padua"
        ]
      },
      {
        "q": "Was tat Bernhard mit seinem Vermögen?",
        "a": "Er verteilte es an die Armen",
        "w": [
          "Er schenkte es dem Bischof",
          "Er baute davon eine Kirche",
          "Er gab es Franziskus"
        ]
      },
      {
        "q": "Wie fanden Franziskus und seine ersten Gefährten ihre Lebensregel?",
        "a": "Sie schlugen dreimal das Evangelienbuch auf",
        "w": [
          "Sie zogen Lose",
          "Sie fragten den Bürgermeister",
          "Sie folgten einem Stern"
        ]
      },
      {
        "q": "Welches Wort Jesu stand dabei am Anfang?",
        "a": "„Wenn du vollkommen sein willst, geh, verkaufe, was du hast, und gib es den Armen“",
        "w": [
          "„Liebe deinen Nächsten wie dich selbst“",
          "„Ich bin das Licht der Welt“",
          "„Selig, die keinen Frieden haben“"
        ]
      },
      {
        "q": "Welcher Papst bestätigte die Lebensweise der Brüder?",
        "a": "Innozenz III.",
        "w": [
          "Gregor IX.",
          "Honorius III.",
          "Leo X."
        ]
      },
      {
        "q": "Wovon soll der Papst geträumt haben?",
        "a": "Wie ein kleiner, armer Mann die wankende Lateranbasilika stützt",
        "w": [
          "Wie ein Engel ihm eine Regel bringt",
          "Wie Rom in Flammen steht",
          "Wie ein Wolf in den Vatikan kommt"
        ]
      },
      {
        "q": "Mit wie vielen Gefährten zog Franziskus zum Papst?",
        "a": "Mit elf",
        "w": [
          "Mit zwei",
          "Mit dreißig",
          "Mit hundert"
        ]
      },
      {
        "q": "Wie nannten sich die Brüder?",
        "a": "Minderbrüder",
        "w": [
          "Predigerbrüder",
          "Barmherzige Brüder",
          "Kreuzritter"
        ],
        "e": "Predigerbrüder heißen die Dominikaner."
      },
      {
        "q": "Was bedeutet „Minderbrüder“?",
        "a": "Die geringeren, kleineren Brüder",
        "w": [
          "Die jüngeren Brüder",
          "Die wenigen Brüder",
          "Die reichen Brüder"
        ]
      },
      {
        "q": "Wovon lebten die ersten Brüder?",
        "a": "Von ihrer Arbeit und, wenn es nicht reichte, vom Betteln",
        "w": [
          "Von ihrem Erbe",
          "Vom Handel mit Stoffen",
          "Von Steuern"
        ]
      },
      {
        "q": "Was durften die Brüder nach der Regel nicht annehmen?",
        "a": "Geld",
        "w": [
          "Brot",
          "Arbeit",
          "Gastfreundschaft"
        ]
      },
      {
        "q": "Mit welchem Zeichen unterschrieb Franziskus?",
        "a": "Mit dem Tau, einem Buchstaben in Kreuzform",
        "w": [
          "Mit einem Fisch",
          "Mit einer Taube",
          "Mit einem Stern"
        ]
      },
      {
        "q": "Wann bestätigte Papst Honorius III. die endgültige Ordensregel?",
        "a": "1223",
        "w": [
          "1209",
          "1182",
          "1300"
        ]
      },
      {
        "q": "Wen traf Franziskus 1219 in Ägypten?",
        "a": "Den Sultan al-Malik al-Kamil",
        "w": [
          "Den Kaiser von Byzanz",
          "Den Patriarchen von Jerusalem",
          "König Richard Löwenherz"
        ]
      },
      {
        "q": "Aus welcher Stadt soll Franziskus laut einer Legende einen Wolf vertrieben haben, indem er Frieden mit ihm schloss?",
        "a": "Gubbio",
        "w": [
          "Perugia",
          "Spoleto",
          "Siena"
        ],
        "e": "So erzählen es die „Fioretti“, eine Sammlung von Legenden aus dem 14. Jahrhundert."
      }
    ],
    "klara": [
      {
        "q": "Aus welcher Familie stammte Klara?",
        "a": "Aus einer adeligen Familie Assisis",
        "w": [
          "Aus einer armen Bauernfamilie",
          "Aus einer Kaufmannsfamilie in Venedig",
          "Aus der Familie des Bischofs"
        ]
      },
      {
        "q": "Wann verließ Klara heimlich ihr Elternhaus?",
        "a": "In der Nacht nach dem Palmsonntag 1212",
        "w": [
          "An Weihnachten 1223",
          "An Ostern 1209",
          "Am 4. Oktober 1226"
        ]
      },
      {
        "q": "Wie alt war Klara damals etwa?",
        "a": "18 Jahre",
        "w": [
          "8 Jahre",
          "30 Jahre",
          "45 Jahre"
        ]
      },
      {
        "q": "Wohin lief Klara in jener Nacht?",
        "a": "Zur Portiuncula",
        "w": [
          "Nach Rom",
          "Zum Bischof",
          "Nach La Verna"
        ]
      },
      {
        "q": "Was tat Franziskus als Zeichen ihrer Hingabe an Gott?",
        "a": "Er schnitt ihr das Haar ab",
        "w": [
          "Er schenkte ihr einen Ring",
          "Er gab ihr einen neuen Namen",
          "Er setzte ihr eine Krone auf"
        ]
      },
      {
        "q": "Wo lebte Klara die meiste Zeit ihres Lebens?",
        "a": "In San Damiano",
        "w": [
          "In der Portiuncula",
          "In Rom",
          "In La Verna"
        ]
      },
      {
        "q": "Wer folgte Klara schon bald nach?",
        "a": "Ihre Schwester Agnes",
        "w": [
          "Ihre Mutter als Erste",
          "Ihr Bruder",
          "Bischof Guido"
        ],
        "e": "Später trat auch ihre Mutter Ortolana ein."
      },
      {
        "q": "Was hielt Klara laut der Überlieferung Soldaten entgegen, die San Damiano angreifen wollten?",
        "a": "Das Allerheiligste Sakrament",
        "w": [
          "Ein Schwert",
          "Eine Fahne",
          "Einen Brief des Papstes"
        ]
      },
      {
        "q": "Was war Klara besonders wichtig?",
        "a": "Ganz ohne Besitz zu leben, das „Privileg der Armut“",
        "w": [
          "Ein großes Kloster zu bauen",
          "Reisen in ferne Länder",
          "Bücher zu sammeln"
        ]
      },
      {
        "q": "Welcher Papst bestätigte Klaras Regel kurz vor ihrem Tod?",
        "a": "Innozenz IV.",
        "w": [
          "Innozenz III.",
          "Pius XII.",
          "Johannes Paul II."
        ]
      },
      {
        "q": "Wann starb Klara?",
        "a": "1253",
        "w": [
          "1212",
          "1226",
          "1300"
        ]
      },
      {
        "q": "Wann ist Klaras Gedenktag?",
        "a": "Am 11. August",
        "w": [
          "Am 4. Oktober",
          "Am 8. Dezember",
          "Am 2. Februar"
        ]
      },
      {
        "q": "Wie heißen die Schwestern, die nach Klaras Regel leben?",
        "a": "Klarissen",
        "w": [
          "Karmelitinnen",
          "Benediktinerinnen",
          "Ursulinen"
        ]
      },
      {
        "q": "Wie nannte sich Klara selbst?",
        "a": "„Pflänzchen des seligen Vaters Franziskus“",
        "w": [
          "„Königin von Assisi“",
          "„Mutter aller Armen“",
          "„Licht von Umbrien“"
        ]
      },
      {
        "q": "Wofür ist Klara Patronin?",
        "a": "Für das Fernsehen",
        "w": [
          "Für die Seefahrt",
          "Für die Bergleute",
          "Für die Bäcker"
        ],
        "e": "Krank im Bett, erlebte sie einmal die Christmette mit, als sähe sie sie an der Wand ihrer Zelle."
      }
    ],
    "heimgang": [
      {
        "q": "Wo empfing Franziskus 1224 die Wundmale Christi?",
        "a": "Auf dem Berg La Verna",
        "w": [
          "In San Damiano",
          "In der Portiuncula",
          "In Rom"
        ]
      },
      {
        "q": "Was sah Franziskus dabei?",
        "a": "Einen Seraph mit sechs Flügeln in Gestalt eines Gekreuzigten",
        "w": [
          "Einen weißen Ritter",
          "Einen brennenden Dornbusch",
          "Eine Taube über dem Altar"
        ]
      },
      {
        "q": "Welche Aufgabe übernahm Franziskus in der Heiligen Nacht von Greccio?",
        "a": "Als Diakon sang er das Evangelium und predigte",
        "w": [
          "Er feierte als Priester die Messe",
          "Er spielte den heiligen Josef",
          "Er läutete die ganze Nacht die Glocken"
        ]
      },
      {
        "q": "Welche Tiere standen an der Krippe von Greccio?",
        "a": "Ein Ochse und ein Esel",
        "w": [
          "Ein Kamel und ein Schaf",
          "Zwei Pferde",
          "Ein Hund und eine Katze"
        ]
      },
      {
        "q": "Wo dichtete Franziskus den Sonnengesang?",
        "a": "Bei San Damiano",
        "w": [
          "In Rom",
          "In Greccio",
          "In Gubbio"
        ]
      },
      {
        "q": "In welchem Zustand dichtete er ihn?",
        "a": "Schwer krank und fast blind",
        "w": [
          "Gesund nach einer Reise",
          "Als junger Ritter",
          "Im Gefängnis von Perugia"
        ]
      },
      {
        "q": "Für wen lobt der Sonnengesang Gott außer für die Geschöpfe?",
        "a": "Für die, die um seiner Liebe willen verzeihen",
        "w": [
          "Für die Mächtigen",
          "Für die Sieger im Krieg",
          "Für die Reichen"
        ]
      },
      {
        "q": "Welche Strophe fügte Franziskus kurz vor seinem Tod hinzu?",
        "a": "Die Strophe von Schwester Tod",
        "w": [
          "Die Strophe von Bruder Sonne",
          "Die Strophe von Bruder Wolf",
          "Die Strophe von Mutter Erde"
        ]
      },
      {
        "q": "Wie nannte Franziskus den Tod?",
        "a": "Schwester",
        "w": [
          "Feind",
          "Richter",
          "Dieb"
        ]
      },
      {
        "q": "An welchem Tag starb Franziskus?",
        "a": "Am 3. Oktober 1226",
        "w": [
          "Am 4. Oktober 1226",
          "Am 25. Dezember 1223",
          "Am 11. August 1253"
        ],
        "e": "Gefeiert wird er am 4. Oktober. Er starb am Abend, und nach kirchlicher Zählung beginnt der neue Tag schon mit dem Abend."
      },
      {
        "q": "Wo starb Franziskus?",
        "a": "Bei der Portiuncula",
        "w": [
          "In La Verna",
          "In Rom",
          "Im Bischofshaus"
        ]
      },
      {
        "q": "Wie wollte Franziskus sterben?",
        "a": "Nackt auf der bloßen Erde",
        "w": [
          "In einem prächtigen Bett",
          "Auf einem Pferd",
          "Im Petersdom"
        ]
      },
      {
        "q": "Welche Vögel sollen sich bei seinem Tod über dem Haus gesammelt haben?",
        "a": "Lerchen",
        "w": [
          "Tauben",
          "Adler",
          "Raben"
        ]
      },
      {
        "q": "Wann wurde Franziskus heiliggesprochen?",
        "a": "1228",
        "w": [
          "1226",
          "1300",
          "1939"
        ]
      },
      {
        "q": "Welcher Papst sprach ihn heilig?",
        "a": "Gregor IX.",
        "w": [
          "Innozenz III.",
          "Honorius III.",
          "Pius XII."
        ]
      },
      {
        "q": "Wo ist Franziskus begraben?",
        "a": "In der Basilika San Francesco in Assisi",
        "w": [
          "In der Portiuncula",
          "Im Petersdom",
          "In La Verna"
        ]
      },
      {
        "q": "Seit wann ist Franziskus Patron Italiens?",
        "a": "Seit 1939",
        "w": [
          "Seit 1228",
          "Seit 1500",
          "Seit 2013"
        ]
      },
      {
        "q": "Welche Enzyklika von Papst Franziskus beginnt mit Worten aus dem Sonnengesang?",
        "a": "Laudato si’",
        "w": [
          "Lumen fidei",
          "Deus caritas est",
          "Rerum novarum"
        ]
      }
    ]
  },
  "ereignisse": [
    {
      "t": "Franziskus wird in Assisi geboren",
      "d": "um 1182",
      "k": 11820101
    },
    {
      "t": "Krieg gegen Perugia und Gefangenschaft",
      "d": "1202",
      "k": 12021101
    },
    {
      "t": "Das Kreuz von San Damiano spricht",
      "d": "um 1205",
      "k": 12051001
    },
    {
      "t": "Franziskus gibt seinem Vater alles zurück",
      "d": "1206",
      "k": 12060401
    },
    {
      "t": "Bernhard von Quintavalle wird erster Gefährte",
      "d": "1208",
      "k": 12080416
    },
    {
      "t": "Papst Innozenz III. bestätigt die Lebensweise der Brüder",
      "d": "um 1209",
      "k": 12091201
    },
    {
      "t": "Klara verlässt ihr Elternhaus",
      "d": "1212",
      "k": 12120318
    },
    {
      "t": "Franziskus begegnet dem Sultan in Ägypten",
      "d": "1219",
      "k": 12190901
    },
    {
      "t": "Weihnachten in Greccio",
      "d": "1223",
      "k": 12231224
    },
    {
      "t": "Franziskus empfängt auf La Verna die Wundmale",
      "d": "1224",
      "k": 12240914
    },
    {
      "t": "Der Sonnengesang entsteht",
      "d": "1225",
      "k": 12250601
    },
    {
      "t": "Franziskus stirbt bei der Portiuncula",
      "d": "1226",
      "k": 12261003
    },
    {
      "t": "Franziskus wird heiliggesprochen",
      "d": "1228",
      "k": 12280716
    },
    {
      "t": "Klara stirbt in San Damiano",
      "d": "1253",
      "k": 12530811
    },
    {
      "t": "Franziskus wird Patron Italiens",
      "d": "1939",
      "k": 19390618
    },
    {
      "t": "Ein Papst wählt zum ersten Mal den Namen Franziskus",
      "d": "2013",
      "k": 20130313
    }
  ],
  "etappen": [
    {
      "id": "a1",
      "card": "francesco",
      "leg": "Aufbruch in La Verna",
      "ort": "La Verna",
      "title": "Der Sohn des Tuchhändlers",
      "date": "1202",
      "jahr": 1202,
      "scenes": [
        {
          "era": "heute",
          "k": "La Verna, heute",
          "t": "Das Kloster klebt am Rand eines Felsens, umgeben von Buchen und Tannen. Hier, wo Franziskus am Ende seines Lebens betete, beginnt dein Weg. Ein Wegzeichen mit einem kleinen Tau weist nach Süden, nach Assisi."
        },
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Am Klostertor",
          "t": "Am Tor kämpft eine Frau mit einem riesigen Rucksack. Ein Laptop schaut heraus, zwei Paar Schuhe hängen außen dran. „Giulia“, sagt sie und streckt dir die Hand hin, in der anderen das Handy. „Architektin aus Mailand. Mein Chef glaubt, ich bin im Urlaub. Ich glaube, ich bin auf der Flucht.“ Sie lacht, aber nur halb."
        },
        {
          "era": "heute",
          "k": "Im Wald",
          "t": "Unter den Buchen ist es still. Du legst die Hand an die Rinde eines alten Baumes und schließt die Augen. Irgendwo klirrt Metall, als schlügen Schwerter aneinander, und Pferde schnauben."
        },
        {
          "era": "damals",
          "k": "Collestrada bei Perugia, 1202",
          "t": "Klirrende Schwerter, Pferde, Geschrei. Die Bürger von Assisi kämpfen gegen das mächtige Perugia, mitten unter ihnen ein junger Mann in glänzender Rüstung: Francesco, der Sohn des reichen Tuchhändlers Pietro di Bernardone. Assisi verliert die Schlacht."
        },
        {
          "era": "damals",
          "k": "Im Kerker von Perugia",
          "t": "Fast ein Jahr verbringt Francesco in Gefangenschaft. Die anderen verzweifeln, er bleibt fröhlich und macht ihnen Mut. Noch immer träumt er davon, ein berühmter Ritter zu werden. Lerne den jungen Francesco kennen."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "jugend",
          "count": 5,
          "time": 15,
          "title": "Der junge Francesco"
        }
      ],
      "rueckkehr": {
        "k": "Im Wald, heute",
        "t": "Ein Specht klopft, sonst ist der Wald still. Giulia sitzt auf einem Baumstumpf und packt ihren Rucksack um. Das zweite Paar Schuhe bleibt auf dem Stumpf stehen. „Für den Nächsten, der sie braucht“, sagt sie. Ihr geht los, den Zeichen mit dem Tau nach."
      }
    },
    {
      "id": "a2",
      "card": "aussaetziger",
      "leg": "Hinab ins Tibertal",
      "ort": "Sansepolcro",
      "title": "Bitter wird süß",
      "date": "Um 1205",
      "jahr": 1205,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Unterwegs",
          "t": "Giulias Rucksack ist leichter geworden. „Ich habe nachgezählt“, sagt sie. „Zwölf Projekte gleichzeitig. Und keines davon will ich wirklich.“ Ihr Handy brummt. Sie lässt es brummen."
        },
        {
          "era": "heute",
          "k": "Sansepolcro, heute",
          "t": "Am Stadttor von Sansepolcro sitzt ein Mann mit einem Pappbecher. Du gehst vorbei, dann bleibst du stehen und kehrst um. Als du ihm eine Münze gibst, schaut er dich an, und in seinem Blick ist etwas, das du nicht vergisst. Hinter dir wiehert ein Pferd."
        },
        {
          "era": "damals",
          "k": "Vor Assisi, um 1205",
          "t": "Ein Pferd scheut. Francesco reitet durch die Ebene unterhalb von Assisi, als ein Aussätziger am Weg steht. Vor diesen Kranken hat er sich immer geekelt. Doch er steigt ab, gibt ihm eine Münze und küsst ihm die Hand."
        },
        {
          "era": "damals",
          "k": "Die Umkehr",
          "t": "Seit einem Traum in Spoleto hat er die Ritterpläne aufgegeben. Jetzt besucht er die Aussätzigen in ihren Hütten vor der Stadt. Später wird er schreiben: Was mir bitter schien, wurde mir in Süßigkeit verwandelt. In Assisi reden die Leute. Was ist wahr, was ist Gerede?"
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "umkehr",
          "count": 6,
          "time": 8,
          "title": "Was die Leute reden"
        }
      ],
      "rueckkehr": {
        "k": "Sansepolcro, heute",
        "t": "Der Mann am Tor ist fort, nur der Pappbecher steht noch da. Giulia hat ihm ihren zweiten Pullover geschenkt. „Komisch“, sagt sie, „ich habe mich seit Monaten nicht mehr so leicht gefühlt.“"
      }
    },
    {
      "id": "a3",
      "card": "damiano",
      "leg": "Am Tiber entlang",
      "ort": "Città di Castello",
      "title": "Stelle mein Haus wieder her",
      "date": "Um 1205",
      "jahr": 1205,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Am Fluss",
          "t": "Am Tiber sitzt Giulia und zeichnet. Eine eingestürzte Feldkapelle, das Dach offen, ein Baum wächst durchs Fenster. „Das macht mich fertig“, sagt sie. „Ich baue Bürotürme, die in zwanzig Jahren keiner mehr will. Und solche Orte fallen einfach zusammen.“"
        },
        {
          "era": "heute",
          "k": "Città di Castello, heute",
          "t": "In der Kathedrale von Città di Castello ist es kühl. Du setzt dich vor ein altes Kreuz und schaust es lange an. Die Farben verschwimmen, und plötzlich riecht es nach feuchtem Mörtel und Staub, als stündest du in einer Ruine."
        },
        {
          "era": "damals",
          "k": "San Damiano, um 1205",
          "t": "Feuchter Mörtel, Staub, ein Loch im Dach. Das Kirchlein San Damiano unterhalb von Assisi verfällt. Francesco kniet vor einem bemalten Kreuz und betet: Höchster, glorreicher Gott, erleuchte die Finsternis meines Herzens."
        },
        {
          "era": "damals",
          "k": "Die Stimme",
          "t": "Da hört er vom Kreuz her die Worte: „Franziskus, geh und stelle mein Haus wieder her, das, wie du siehst, ganz verfällt.“ Er nimmt sie wörtlich, verkauft Stoffe seines Vaters und schleppt Steine. Erst viel später versteht man, welches Haus gemeint war."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "damiano",
          "count": 5,
          "time": 14,
          "title": "San Damiano"
        }
      ],
      "rueckkehr": {
        "k": "Città di Castello, heute",
        "t": "Das Kreuz hängt still über dir. Draußen wartet Giulia mit ihrer Zeichnung. Neben die eingestürzte Kapelle hat sie ein einziges Wort gesetzt: „Wiederaufbauen?“ Das Fragezeichen hat sie zweimal nachgezogen."
      }
    },
    {
      "id": "a4",
      "card": "bischof",
      "leg": "Durch die Hügel",
      "ort": "Pietralunga",
      "title": "Vater unser im Himmel",
      "date": "1206",
      "jahr": 1206,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Ein Anruf",
          "t": "Unterwegs klingelt Giulias Handy. Ihr Vater. Sie geht ein Stück voraus, du hörst nur Fetzen: „Nein, Papà … ich komme nicht zurück ins Büro … ja, ich weiß, was du alles für mich getan hast.“ Als sie zurückkommt, hat sie geweint. „Er hat das Büro gegründet. Ich soll es übernehmen.“"
        },
        {
          "era": "heute",
          "k": "Pietralunga, heute",
          "t": "Abends in Pietralunga hängst du deine nassen Sachen über einen Stuhl. Durch die dünne Wand hört man laute Stimmen, einen Streit. Dann sind es viele Stimmen, eine murmelnde Menschenmenge."
        },
        {
          "era": "damals",
          "k": "Vor dem Bischofshaus, 1206",
          "t": "Eine murmelnde Menschenmenge vor dem Haus des Bischofs von Assisi. Pietro di Bernardone verlangt sein Geld zurück, das sein Sohn für San Damiano ausgeben wollte. Francesco legt das Geld hin. Dann zieht er auch seine Kleider aus und legt sie dem Vater zu Füßen."
        },
        {
          "era": "damals",
          "k": "Ein neuer Vater",
          "t": "„Bis heute habe ich dich meinen Vater genannt“, sagt er. „Von nun an will ich sagen: Vater unser, der du bist im Himmel.“ Bischof Guido hüllt ihn in seinen Mantel. Ein neuer Anfang. Bring die Stationen dieses Lebens in ihre Ordnung."
        }
      ],
      "ch": [
        {
          "type": "chrono",
          "count": 5,
          "title": "Die Zeit ordnen"
        }
      ],
      "rueckkehr": {
        "k": "Pietralunga, heute",
        "t": "Die Stimmen hinter der Wand sind verstummt. Giulia klopft an deine Tür, zwei Tassen Tee in der Hand. „Ich habe Papà zurückgerufen“, sagt sie. „Ich habe ihm gesagt, dass ich ihn lieb habe. Und dass ich etwas anderes bauen will.“"
      }
    },
    {
      "id": "a5",
      "card": "brueder",
      "leg": "Gubbio",
      "ort": "Gubbio",
      "title": "Die ersten Brüder",
      "date": "1208 bis 1210",
      "jahr": 1208,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Gubbio, heute",
          "t": "Gubbio ist aus grauem Stein, über der Stadt ragt der Palast mit seinem Turm. Auf dem Platz sitzt eine Gruppe junger Pilger und singt, Giulia setzt sich zu ihnen. Du schlägst die kleine Bibel auf, die du dabeihast. Ein Windstoß blättert die Seiten um, einmal, zweimal, dreimal."
        },
        {
          "era": "damals",
          "k": "Assisi, 1208",
          "t": "Dreimal schlagen sie in der Kirche San Nicolò das Evangelienbuch auf: Francesco und zwei Männer aus Assisi, die mit ihm leben wollen. Einer von ihnen ist Bernhard von Quintavalle, ein reicher Mann. Jedes Mal sprechen die Worte von Armut und Nachfolge: Wenn du vollkommen sein willst, geh, verkaufe, was du hast, und gib es den Armen."
        },
        {
          "era": "damals",
          "k": "Rom, um 1209",
          "t": "Bald sind sie zwölf. Barfuß ziehen sie nach Rom zu Papst Innozenz III. Er zögert. Doch man erzählt, er habe im Traum gesehen, wie ein kleiner, armer Mann die wankende Lateranbasilika stützt. Er bestätigt ihre Lebensweise. Jetzt wirst du geprüft."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "brueder",
          "count": 5,
          "time": 13,
          "title": "Die ersten Brüder"
        }
      ],
      "rueckkehr": {
        "k": "Gubbio, heute",
        "t": "Die jungen Pilger singen noch. Giulia hat ihnen ihr Zelt geschenkt, das sie ohnehin nie aufgebaut hat. „Man braucht viel weniger, als man denkt“, sagt sie. „Aber mehr Menschen.“"
      }
    },
    {
      "id": "a6",
      "card": "klara",
      "leg": "Ins Tal des Chiascio",
      "ort": "Valfabbrica",
      "title": "Klara",
      "date": "Palmsonntag 1212",
      "jahr": 1212,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Unterwegs",
          "t": "Giulia erzählt von ihrer Großmutter. Sie hieß Clara und stellte jeden Abend eine kleine Öllampe vor ein Marienbild. „Als Kind fand ich das altmodisch. Jetzt denke ich, sie wusste etwas, das ich vergessen habe.“"
        },
        {
          "era": "heute",
          "k": "Valfabbrica, heute",
          "t": "In Valfabbrica fällt am Abend der Strom aus. Die Wirtin stellt eine Öllampe auf den Tisch. Du schaust in die kleine Flamme, bis alles um sie herum dunkel wird und du draußen Schritte hörst, eilig und leise."
        },
        {
          "era": "damals",
          "k": "Assisi, Palmsonntag 1212",
          "t": "Eilige, leise Schritte in der Nacht. Eine junge Frau aus einer adeligen Familie verlässt heimlich ihr Elternhaus: Klara, achtzehn Jahre alt. Am Morgen hat sie in der Kirche noch den Palmzweig empfangen. Jetzt läuft sie hinunter in die Ebene, zur Portiuncula."
        },
        {
          "era": "damals",
          "k": "In der Portiuncula",
          "t": "Die Brüder empfangen sie mit Fackeln. Francesco schneidet ihr das Haar ab, sie legt ein einfaches Gewand an und gibt sich ganz Gott. Bald lebt sie mit ihren Schwestern in San Damiano, dem Kirchlein, das er wieder aufgebaut hat. Lerne sie kennen."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "klara",
          "count": 5,
          "time": 13,
          "title": "Klara von Assisi"
        }
      ],
      "rueckkehr": {
        "k": "Valfabbrica, heute",
        "t": "Der Strom ist zurück, doch Giulia schaltet das Licht wieder aus und lässt nur die Öllampe brennen. „Für Nonna Clara“, sagt sie. Ihr bleibt lange sitzen und redet kaum."
      }
    },
    {
      "id": "a7",
      "card": "greccio",
      "leg": "Ankunft in Assisi",
      "ort": "Assisi",
      "title": "Die Nacht von Greccio",
      "date": "Weihnachten 1223",
      "jahr": 1223,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Assisi, heute",
          "t": "Am Nachmittag taucht Assisi auf, rosafarbener Stein am Hang des Monte Subasio. Giulia bleibt stehen. „Jetzt verstehe ich, warum er hier nicht weg wollte.“ In der Basilika San Francesco steigt ihr hinunter zu seinem Grab."
        },
        {
          "era": "heute",
          "k": "Am Grab des Franziskus",
          "t": "Vor dem Grab brennen Kerzen und Öllichter. Jemand summt leise ein Weihnachtslied. Du schließt die Augen. Die Luft wird kalt, es riecht nach Heu und nach Fackelrauch."
        },
        {
          "era": "damals",
          "k": "Greccio, Weihnachten 1223",
          "t": "Heu, Fackelrauch, Winterkälte. In einer Felsenhöhle bei Greccio hat Francesco eine Krippe mit Heu bereiten lassen, dazu einen Ochsen und einen Esel. Er will mit eigenen Augen sehen, wie arm Jesus in Betlehem zur Welt kam."
        },
        {
          "era": "damals",
          "k": "Die Heilige Nacht",
          "t": "Aus allen Dörfern kommen die Leute mit Kerzen und Fackeln, und die Nacht wird hell wie der Tag. Über der Krippe wird die Messe gefeiert, Francesco singt als Diakon das Evangelium. Folge den Lichtern."
        }
      ],
      "ch": [
        {
          "type": "procession",
          "rounds": [
            3,
            4,
            5,
            6,
            7
          ],
          "speed": 650,
          "title": "Die Fackeln von Greccio"
        }
      ],
      "rueckkehr": {
        "k": "Assisi, heute",
        "t": "Die Kerzen am Grab flackern. Giulia hat eine angezündet, für Nonna Clara und, wie sie sagt, „für alle, die ich zurückgelassen habe, um herzukommen“. Morgen geht ihr das letzte Stück, hinunter in die Ebene."
      }
    },
    {
      "id": "a8",
      "card": "sonnengesang",
      "leg": "Hinab zur Portiuncula",
      "ort": "Portiuncula",
      "title": "Schwester Tod",
      "date": "1224 bis 1226",
      "jahr": 1226,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Santa Maria degli Angeli, heute",
          "t": "Unten in der Ebene steht eine riesige Basilika mit Kuppel. Giulia lacht. „Sie haben eine Kirche über eine Kirche gebaut.“ Drinnen, mitten unter der Kuppel, steht die Portiuncula, kaum größer als eine Gartenhütte."
        },
        {
          "era": "heute",
          "k": "In der Portiuncula",
          "t": "Du trittst durch die niedrige Tür. Die Steine sind dunkel vom Ruß unzähliger Kerzen. Draußen geht die Sonne unter, und ein letzter Strahl fällt so hell herein, dass du die Augen schließen musst."
        },
        {
          "era": "damals",
          "k": "San Damiano, 1225",
          "t": "Licht, das in den Augen schmerzt. Francesco ist schwer krank und fast blind. Im Jahr zuvor hat er auf dem Berg La Verna, wo dein Weg begann, die Wundmale Christi empfangen. Nachts kann er vor Schmerzen nicht schlafen. Und doch dichtet er ein Loblied auf Gott und seine ganze Schöpfung."
        },
        {
          "era": "damals",
          "k": "Portiuncula, 3. Oktober 1226",
          "t": "Er lässt sich nackt auf die bloße Erde legen. Die Brüder singen sein Lied, mit der neuen Strophe von Schwester Tod. Am Abend stirbt er. Über dem Haus sammeln sich Lerchen, obwohl es schon dunkel wird. Sing mit den Brüdern. Danach kommt die letzte Prüfung. Alle drei Kerzen müssen für beide Teile reichen."
        }
      ],
      "ch": [
        {
          "type": "rosary",
          "interval": 900,
          "travel": 1700,
          "win": 110,
          "jitter": 120,
          "title": "Teil 1: Der Sonnengesang",
          "fertig": "Der Sonnengesang ist gesungen.",
          "perlen": [
            {
              "t": "Höchster, allmächtiger, guter Herr",
              "gross": true
            },
            {
              "t": "Gelobt seist du, mein Herr, durch Bruder Sonne"
            },
            {
              "t": "durch Schwester Mond und die Sterne"
            },
            {
              "t": "durch Bruder Wind"
            },
            {
              "t": "durch Schwester Wasser"
            },
            {
              "t": "durch Bruder Feuer"
            },
            {
              "t": "durch unsere Schwester, Mutter Erde"
            },
            {
              "t": "durch die, die verzeihen um deiner Liebe willen"
            },
            {
              "t": "durch unsere Schwester, den leiblichen Tod"
            },
            {
              "t": "Lobt und preist meinen Herrn",
              "gross": true
            }
          ]
        },
        {
          "type": "quiz",
          "pool": "heimgang",
          "count": 6,
          "time": 10,
          "title": "Teil 2: Die letzte Prüfung"
        }
      ],
      "rueckkehr": {
        "k": "Vor der Portiuncula, heute",
        "t": "Draußen ist es dunkel geworden. Giulia sitzt auf den Stufen der Basilika, der Rucksack halb leer. „Ich habe gekündigt“, sagt sie. „In meinem Dorf steht eine kleine Kapelle ohne Dach. Die baue ich wieder auf.“ Von La Verna bis hierher seid ihr gegangen, auf den Spuren eines Mannes, der alles hergab und dabei reich wurde. Über dem Platz läuten die Glocken zum Abendgebet."
      }
    }
  ]
});
