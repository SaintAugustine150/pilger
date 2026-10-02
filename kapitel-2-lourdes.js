/* =====================================================================
   Pilger durch die Zeit – Kapitel 2: Lourdes
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
   etappen     ort = kurzer Ortsname für den Stempel im Pilgerpass,
               jahr = Jahr, in das die Zeitreise führt,
               scenes = Erzählszenen (era heute/damals, k Ort, t Text). Die
               letzte Heute-Szene endet an einer Schwelle (ein Gegenstand oder
               Sinneseindruck), die erste Damals-Szene greift sie wieder auf.
               ch = Prüfungen der Etappe,
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
  "id": "lourdes",
  "n": 2,
  "name": "Lourdes",
  "years": "1858",
  "lead": "Von Pau nach Lourdes, gut 40 Kilometer den Gave hinauf bis an den Fuß der Pyrenäen, und immer wieder zurück ins Jahr 1858.",
  "bonusAll": "basilika",
  "bonusGold": "lourdes",
  "weg": {
    "groesse": [1024, 1536],
    "pfad": [[360, 1150], [400, 1132], [440, 1116], [500, 1097], [520, 1076], [500, 1052], [470, 1035], [445, 1012], [470, 985], [500, 950], [530, 915], [560, 885], [590, 848], [625, 812], [595, 785], [575, 765], [620, 735], [680, 702], [725, 670], [760, 630], [765, 595], [745, 560], [700, 540], [645, 518], [600, 500], [570, 475], [552, 445], [548, 420], [560, 395], [555, 370], [530, 350], [490, 340], [455, 322], [420, 305], [460, 330], [500, 342], [545, 345], [600, 335], [660, 325], [720, 332], [775, 330], [810, 322], [840, 350], [860, 385]],
    "orte": [0, 6, 13, 18, 33, 41, 43]
  },
  "begleiter": {
    "name": "Luc",
    "kurz": "Student aus Toulouse, 20 Jahre",
    "ab": "l1",
    "abschied": "Beim Abschied schreibt Luc dir seine Nummer auf einen Zettel. „Falls du nächstes Jahr mithelfen willst. Hier gehen die Kranken vorne.“"
  },
  "karten": {
    "bernadette": {
      "name": "Bernadette Soubirous",
      "sub": "1844–1879",
      "rar": 2,
      "text": "Die älteste Tochter einer verarmten Müllerfamilie. Sie konnte kaum lesen und schreiben, als sie 1858 achtzehnmal die Dame in der Grotte sah. Später wurde sie Ordensfrau in Nevers. 1933 wurde sie heiliggesprochen.",
      "hint": "Etappe 1 abschließen"
    },
    "massabielle": {
      "name": "Die Grotte von Massabielle",
      "sub": "11. Februar 1858",
      "rar": 2,
      "text": "Eine Felsgrotte am Ufer des Gave, damals ein feuchter, verrufener Ort, an dem Schweine gehütet wurden. Heute beten dort jedes Jahr Millionen Pilger.",
      "hint": "Etappe 2 abschließen"
    },
    "rosen": {
      "name": "Die gelben Rosen",
      "sub": "Die Dame in Weiß",
      "rar": 1,
      "text": "Bernadette beschrieb die Dame genau: ein weißes Kleid, ein weißer Schleier, ein blauer Gürtel und auf jedem Fuß eine gelbe Rose. Am Arm trug sie einen Rosenkranz mit weißen Perlen.",
      "hint": "Etappe 3 abschließen"
    },
    "quelle": {
      "name": "Die Quelle",
      "sub": "25. Februar 1858",
      "rar": 2,
      "text": "Auf das Wort der Dame grub Bernadette mit den Händen im Schlamm. Die Menge lachte. Doch in den folgenden Tagen floss dort klares Wasser, und es fließt bis heute.",
      "hint": "Etappe 4 abschließen"
    },
    "prozession": {
      "name": "Die Lichterprozession",
      "sub": "„In Prozession hierher kommen“",
      "rar": 1,
      "text": "Am 2. März bat die Dame, man solle in Prozession zur Grotte kommen. Heute ziehen Pilger an vielen Abenden mit Kerzen durch das Heiligtum und singen dabei das Ave Maria von Lourdes.",
      "hint": "Etappe 5 abschließen"
    },
    "unbefleckte": {
      "name": "Die Unbefleckte Empfängnis",
      "sub": "25. März 1858",
      "rar": 3,
      "text": "Am Fest Mariä Verkündigung nannte die Dame ihren Namen: „Que soy era Immaculada Councepciou.“ Bernadette verstand die Worte nicht. Vier Jahre zuvor hatte Papst Pius IX. dieses Dogma verkündet.",
      "hint": "Etappe 6 abschließen"
    },
    "juli": {
      "name": "Die letzte Erscheinung",
      "sub": "16. Juli 1858",
      "rar": 2,
      "text": "Die Grotte war abgesperrt. Bernadette kniete auf der Wiese am anderen Ufer des Gave. So schön, sagte sie später, habe sie die Dame noch nie gesehen.",
      "hint": "Etappe 7 abschließen"
    },
    "basilika": {
      "name": "Die Basilika der Unbefleckten Empfängnis",
      "sub": "Geweiht 1876",
      "rar": 2,
      "text": "Die Dame hatte um eine Kapelle gebeten. Auf dem Felsen über der Grotte entstand eine Basilika, die 1876 geweiht wurde. Bernadette lebte da schon als Ordensfrau in Nevers.",
      "hint": "Alle sieben Etappen abschließen"
    },
    "lourdes": {
      "name": "Unsere Liebe Frau von Lourdes",
      "sub": "Gedenktag 11. Februar",
      "rar": 3,
      "text": "Unter diesem Titel wird Maria weltweit verehrt, besonders von Kranken. Die Botschaft von Lourdes ruft zu Gebet, Buße und Umkehr. Ihr Gedenktag ist zugleich der Welttag der Kranken.",
      "hint": "Alle sieben Etappen in Gold abschließen"
    }
  },
  "fragenTitel": {
    "bernadette": "Bernadette",
    "verhoer": "Das Verhör von Lourdes",
    "spaeter": "Lourdes nach 1858"
  },
  "fragen": {
    "bernadette": [
      {
        "q": "In welchem Jahr wurde Bernadette geboren?",
        "a": "1844",
        "w": [
          "1830",
          "1851",
          "1858"
        ],
        "e": "Am 7. Januar 1844 in der Mühle von Boly in Lourdes."
      },
      {
        "q": "Welchen Beruf hatte ihr Vater François?",
        "a": "Müller",
        "w": [
          "Schmied",
          "Fischer",
          "Holzfäller"
        ],
        "e": "Die Familie verlor ihre Mühle und verarmte."
      },
      {
        "q": "Was war das Cachot, in dem die Familie 1858 wohnte?",
        "a": "Eine ehemalige Gefängniszelle",
        "w": [
          "Ein Stall hinter dem Pfarrhaus",
          "Der Keller einer Mühle",
          "Eine Hütte an der Grotte"
        ],
        "e": "Die sechsköpfige Familie lebte dort in einem einzigen Raum."
      },
      {
        "q": "Welche Sprache sprach Bernadette im Alltag?",
        "a": "Den okzitanischen Dialekt der Gegend",
        "w": [
          "Hochfranzösisch",
          "Spanisch",
          "Baskisch"
        ],
        "e": "Französisch lernte sie erst später richtig."
      },
      {
        "q": "Worauf bereitete sich Bernadette Anfang 1858 vor?",
        "a": "Auf ihre Erstkommunion",
        "w": [
          "Auf ihre Firmung",
          "Auf den Eintritt ins Kloster",
          "Auf eine Stelle als Magd in Pau"
        ],
        "e": "Sie empfing sie am 3. Juni 1858."
      },
      {
        "q": "Wie alt war Bernadette bei der ersten Erscheinung?",
        "a": "14 Jahre",
        "w": [
          "9 Jahre",
          "18 Jahre",
          "21 Jahre"
        ]
      },
      {
        "q": "Wo hatte Bernadette kurz vor den Erscheinungen als Hirtin gearbeitet?",
        "a": "In Bartrès",
        "w": [
          "In Bétharram",
          "In Tarbes",
          "In Pau"
        ],
        "e": "Bei ihrer früheren Amme, in einem Dorf nahe Lourdes."
      },
      {
        "q": "An welchem Gebirge liegt Lourdes?",
        "a": "An den Pyrenäen",
        "w": [
          "An den Alpen",
          "An den Vogesen",
          "Am Zentralmassiv"
        ]
      },
      {
        "q": "Wie hießen Bernadettes Eltern?",
        "a": "François und Louise Soubirous",
        "w": [
          "Jean und Marie Soubirous",
          "Pierre und Anne Soubirous",
          "Louis und Jeanne Soubirous"
        ]
      },
      {
        "q": "Woran litt Bernadette seit ihrer Kindheit?",
        "a": "An Asthma",
        "w": [
          "An Taubheit",
          "An einem lahmen Bein",
          "An schlechten Augen"
        ]
      },
      {
        "q": "Welche Seuche hatte Bernadette 1855 überlebt?",
        "a": "Die Cholera",
        "w": [
          "Die Pest",
          "Die Pocken",
          "Die Masern"
        ],
        "e": "Seitdem litt sie an Asthma."
      },
      {
        "q": "Wie hieß Bernadettes jüngere Schwester?",
        "a": "Toinette",
        "w": [
          "Jeanne",
          "Louise",
          "Marie-Rose"
        ],
        "e": "Sie war am 11. Februar 1858 mit an der Grotte."
      },
      {
        "q": "Wie wurde Bernadette getauft?",
        "a": "Marie-Bernarde",
        "w": [
          "Marie-Bernadette",
          "Bernardine",
          "Anne-Bernard"
        ],
        "e": "„Bernadette“ ist die Koseform."
      },
      {
        "q": "Warum kam Bernadettes Vater 1857 für einige Tage ins Gefängnis?",
        "a": "Man verdächtigte ihn, Mehl gestohlen zu haben",
        "w": [
          "Er hatte Schulden beim Pfarrer",
          "Er hatte sich mit dem Bürgermeister geprügelt",
          "Er hatte gewildert"
        ],
        "e": "Beweise gab es keine, er kam wieder frei."
      },
      {
        "q": "Zu welchem Bistum gehörte Lourdes 1858?",
        "a": "Zum Bistum Tarbes",
        "w": [
          "Zum Bistum Toulouse",
          "Zum Bistum Bayonne",
          "Zum Bistum Bordeaux"
        ]
      },
      {
        "q": "Wie viele Kinder der Familie Soubirous lebten 1858 im Cachot?",
        "a": "Vier",
        "w": [
          "Zwei",
          "Sechs",
          "Neun"
        ],
        "e": "Bernadette war die Älteste."
      },
      {
        "q": "In welcher Mühle wurde Bernadette geboren?",
        "a": "In der Mühle von Boly",
        "w": [
          "In der Mühle von Bétharram",
          "In der Mühle von Pau",
          "In der Mühle von Tarbes"
        ]
      },
      {
        "q": "Welchem Fluss folgt der Pilgerweg von Pau nach Lourdes?",
        "a": "Dem Gave de Pau",
        "w": [
          "Der Garonne",
          "Der Loire",
          "Der Rhône"
        ]
      }
    ],
    "verhoer": [
      {
        "s": "Die Dame trug ein weißes Kleid mit einem blauen Gürtel.",
        "v": true
      },
      {
        "s": "Auf jedem Fuß der Dame lag eine rote Rose.",
        "v": false,
        "e": "Es waren gelbe Rosen."
      },
      {
        "s": "Bei der ersten Erscheinung war Bernadette mit ihrer Mutter unterwegs.",
        "v": false,
        "e": "Sie war mit ihrer Schwester Toinette und Jeanne Abadie unterwegs."
      },
      {
        "s": "Die Dame hielt einen Rosenkranz.",
        "v": true,
        "e": "Mit weißen Perlen an einer goldenen Kette."
      },
      {
        "s": "Die Dame betete das Ave Maria laut mit.",
        "v": false,
        "e": "Sie ließ die Perlen durch die Finger gleiten und sprach nur das Ehre sei dem Vater mit."
      },
      {
        "s": "Bernadette behauptete, die Dame sei die Jungfrau Maria.",
        "v": false,
        "e": "Sie nannte sie „Aquerò“, „jenes da“. Einen Namen kannte sie nicht."
      },
      {
        "s": "Die Dame sprach Bernadette mit „Sie“ an.",
        "v": true,
        "e": "Für ein armes Mädchen damals etwas Unerhörtes."
      },
      {
        "s": "Die Dame bat Bernadette, fünf Tage lang wiederzukommen.",
        "v": false,
        "e": "Vierzehn Tage lang."
      },
      {
        "s": "Jacomet war der Pfarrer von Lourdes.",
        "v": false,
        "e": "Er war Polizeikommissar. Der Pfarrer hieß Peyramale."
      },
      {
        "s": "Die Grotte liegt am Ufer des Gave.",
        "v": true
      },
      {
        "s": "Bernadette brachte oft eine brennende Kerze mit zur Grotte.",
        "v": true
      },
      {
        "s": "Die Dame stand in einer Felsnische über einem wilden Rosenstrauch.",
        "v": true
      },
      {
        "s": "Schon bei der ersten Erscheinung sprach die Dame viele Sätze.",
        "v": false,
        "e": "Zum ersten Mal sprach sie am 18. Februar."
      },
      {
        "s": "Als Bernadette Papier und Feder mitbrachte, schrieb die Dame ihren Wunsch auf.",
        "v": false,
        "e": "„Das ist nicht nötig“, antwortete sie."
      },
      {
        "s": "Kommissar Jacomet drohte Bernadette mit dem Gefängnis.",
        "v": true
      },
      {
        "s": "Bernadettes Eltern verboten ihr zunächst, wieder zur Grotte zu gehen.",
        "v": true
      },
      {
        "s": "Bernadette nahm Geld von den Besuchern der Grotte an.",
        "v": false,
        "e": "Sie lehnte Geld und Geschenke stets ab."
      },
      {
        "s": "Die Dame sprach in Bernadettes Dialekt.",
        "v": true
      },
      {
        "s": "Die Dame war von Licht umgeben.",
        "v": true
      },
      {
        "s": "In den vierzehn Tagen erschien die Dame jedes Mal, wenn Bernadette kam.",
        "v": false,
        "e": "Am 22. und am 26. Februar sah Bernadette sie nicht."
      },
      {
        "s": "Kaiser Napoleon III. ließ die Absperrung der Grotte später aufheben.",
        "v": true,
        "e": "Im Oktober 1858 wurde die Grotte wieder geöffnet."
      }
    ],
    "spaeter": [
      {
        "q": "Wie viele Erscheinungen erlebte Bernadette insgesamt?",
        "a": "18",
        "w": [
          "7",
          "12",
          "33"
        ]
      },
      {
        "q": "Wann erkannte der Bischof von Tarbes die Erscheinungen an?",
        "a": "1862",
        "w": [
          "1858",
          "1876",
          "1933"
        ]
      },
      {
        "q": "In welche Gemeinschaft trat Bernadette 1866 ein?",
        "a": "Die Schwestern der Liebe von Nevers",
        "w": [
          "Die Karmelitinnen von Lisieux",
          "Die Benediktinerinnen von Tarbes",
          "Die Klarissen von Pau"
        ],
        "e": "Dort hieß sie Schwester Marie-Bernard."
      },
      {
        "q": "Wann starb Bernadette?",
        "a": "1879",
        "w": [
          "1858",
          "1901",
          "1933"
        ],
        "e": "Am 16. April 1879 in Nevers, mit 35 Jahren."
      },
      {
        "q": "Welcher Papst sprach Bernadette 1933 heilig?",
        "a": "Pius XI.",
        "w": [
          "Pius IX.",
          "Leo XIII.",
          "Johannes XXIII."
        ],
        "e": "Am 8. Dezember 1933, dem Hochfest der Unbefleckten Empfängnis."
      },
      {
        "q": "Welcher Papst verkündete 1854 das Dogma der Unbefleckten Empfängnis?",
        "a": "Pius IX.",
        "w": [
          "Leo XIII.",
          "Pius X.",
          "Gregor XVI."
        ]
      },
      {
        "q": "Was bedeutet „Unbefleckte Empfängnis“?",
        "a": "Maria war vom ersten Augenblick ihres Daseins an frei von der Erbsünde",
        "w": [
          "Maria empfing Jesus ohne Zutun eines Mannes",
          "Jesus wurde ohne Erbsünde empfangen",
          "Maria wurde mit Leib und Seele in den Himmel aufgenommen"
        ],
        "e": "Das wird oft mit der Jungfrauengeburt verwechselt."
      },
      {
        "q": "Welcher Arzt beobachtete das Kerzenwunder am 7. April 1858?",
        "a": "Dr. Dozous",
        "w": [
          "Dr. Carrel",
          "Dr. Boissarie",
          "Dr. Lacadé"
        ]
      },
      {
        "q": "Von wo sah Bernadette die Dame am 16. Juli zum letzten Mal?",
        "a": "Vom anderen Ufer des Gave",
        "w": [
          "Aus der Grotte selbst",
          "Aus der Pfarrkirche",
          "Aus dem Cachot"
        ],
        "e": "Die Grotte war abgesperrt."
      },
      {
        "q": "Welcher Welttag wird am 11. Februar begangen?",
        "a": "Der Welttag der Kranken",
        "w": [
          "Der Weltjugendtag",
          "Der Welttag der Armen",
          "Der Weltmissionssonntag"
        ],
        "e": "Johannes Paul II. hat ihn 1992 eingeführt."
      },
      {
        "q": "Wie viele Heilungen in Lourdes hat die Kirche als Wunder anerkannt?",
        "a": "Rund 70",
        "w": [
          "Rund 7",
          "Rund 700",
          "Rund 7.000"
        ],
        "e": "Gemeldet wurden über 7.000 unerklärte Heilungen, anerkannt nur wenige."
      },
      {
        "q": "In welcher Stadt ruht Bernadettes Leib heute?",
        "a": "In Nevers",
        "w": [
          "In Lourdes",
          "In Tarbes",
          "In Rom"
        ]
      },
      {
        "q": "Wer prüft in Lourdes gemeldete Heilungen zuerst?",
        "a": "Ein medizinisches Büro mit Ärzten",
        "w": [
          "Der Bürgermeister von Lourdes",
          "Der Papst persönlich",
          "Die Polizei"
        ],
        "e": "Ob eine Heilung als Wunder gilt, entscheidet danach der Bischof des Geheilten."
      },
      {
        "q": "Wie viele Pilger kommen jedes Jahr nach Lourdes?",
        "a": "Mehrere Millionen",
        "w": [
          "Einige Tausend",
          "Rund 100.000",
          "Über eine Milliarde"
        ]
      },
      {
        "q": "Wie heißt die große unterirdische Basilika in Lourdes, die 1958 geweiht wurde?",
        "a": "Basilika St. Pius X.",
        "w": [
          "Basilika St. Bernadette",
          "Basilika St. Peter",
          "Basilika St. Michael"
        ],
        "e": "Geweiht hat sie Kardinal Roncalli, der spätere Papst Johannes XXIII."
      },
      {
        "q": "Was rief die Dame am 24. Februar dreimal?",
        "a": "„Buße!“",
        "w": [
          "„Betet!“",
          "„Friede!“",
          "„Kommt!“"
        ]
      },
      {
        "q": "Die wievielte Erscheinung war die vom 25. März?",
        "a": "Die sechzehnte",
        "w": [
          "Die siebte",
          "Die zwölfte",
          "Die achtzehnte"
        ]
      },
      {
        "q": "Womit verglich sich Bernadette später selbst?",
        "a": "Mit einem Besen, den man nach Gebrauch hinter die Tür stellt",
        "w": [
          "Mit einer Kerze, die verlöscht",
          "Mit einem Lamm",
          "Mit einem Stein in der Grotte"
        ]
      },
      {
        "q": "Welche Arbeit übernahm Bernadette im Kloster unter anderem?",
        "a": "Die Pflege der Kranken",
        "w": [
          "Die Leitung der Schule",
          "Die Verwaltung der Finanzen",
          "Die Mission in Afrika"
        ]
      },
      {
        "q": "Wie heißt das Schreiben, mit dem Pius IX. 1854 das Dogma der Unbefleckten Empfängnis verkündete?",
        "a": "Ineffabilis Deus",
        "w": [
          "Munificentissimus Deus",
          "Rerum novarum",
          "Humanae vitae"
        ],
        "e": "Mit „Munificentissimus Deus“ verkündete Pius XII. 1950 die Aufnahme Marias in den Himmel."
      },
      {
        "q": "Welches Mariendogma wurde 1950 verkündet?",
        "a": "Die Aufnahme Marias mit Leib und Seele in den Himmel",
        "w": [
          "Die Unbefleckte Empfängnis",
          "Die Gottesmutterschaft Marias",
          "Die immerwährende Jungfräulichkeit"
        ],
        "e": "Die Gottesmutterschaft wurde schon 431 auf dem Konzil von Ephesus festgehalten."
      }
    ]
  },
  "ereignisse": [
    {
      "t": "Bernadette wird geboren",
      "d": "1844",
      "k": 18440107
    },
    {
      "t": "Pius IX. verkündet das Dogma der Unbefleckten Empfängnis",
      "d": "8. Dezember 1854",
      "k": 18541208
    },
    {
      "t": "Die erste Erscheinung in der Grotte",
      "d": "11. Februar 1858",
      "k": 18580211
    },
    {
      "t": "Die Dame spricht zum ersten Mal",
      "d": "18. Februar 1858",
      "k": 18580218
    },
    {
      "t": "Kommissar Jacomet verhört Bernadette",
      "d": "21. Februar 1858",
      "k": 18580221
    },
    {
      "t": "„Buße! Buße! Buße!“",
      "d": "24. Februar 1858",
      "k": 18580224
    },
    {
      "t": "Die Quelle entspringt",
      "d": "25. Februar 1858",
      "k": 18580225
    },
    {
      "t": "Catherine Latapie wird geheilt",
      "d": "1. März 1858",
      "k": 18580301
    },
    {
      "t": "Die Dame bittet um eine Kapelle und um Prozessionen",
      "d": "2. März 1858",
      "k": 18580302
    },
    {
      "t": "„Ich bin die Unbefleckte Empfängnis“",
      "d": "25. März 1858",
      "k": 18580325
    },
    {
      "t": "Das Kerzenwunder",
      "d": "7. April 1858",
      "k": 18580407
    },
    {
      "t": "Bernadettes Erstkommunion",
      "d": "3. Juni 1858",
      "k": 18580603
    },
    {
      "t": "Die letzte Erscheinung",
      "d": "16. Juli 1858",
      "k": 18580716
    },
    {
      "t": "Die Grotte wird wieder geöffnet",
      "d": "Oktober 1858",
      "k": 18581004
    },
    {
      "t": "Der Bischof von Tarbes erkennt die Erscheinungen an",
      "d": "1862",
      "k": 18620118
    },
    {
      "t": "Bernadette tritt in Nevers ins Kloster ein",
      "d": "1866",
      "k": 18660707
    },
    {
      "t": "Die Basilika der Unbefleckten Empfängnis wird geweiht",
      "d": "1876",
      "k": 18760702
    },
    {
      "t": "Bernadette stirbt",
      "d": "1879",
      "k": 18790416
    },
    {
      "t": "Bernadette wird heiliggesprochen",
      "d": "1933",
      "k": 19331208
    },
    {
      "t": "Die unterirdische Basilika St. Pius X. wird geweiht",
      "d": "25. März 1958",
      "k": 19580325
    }
  ],
  "etappen": [
    {
      "id": "l1",
      "card": "bernadette",
      "leg": "Aufbruch in Pau",
      "ort": "Pau",
      "title": "Das Cachot",
      "date": "Winter 1857/58",
      "jahr": 1858,
      "scenes": [
        {
          "era": "heute",
          "k": "Pau, heute",
          "t": "Vom Boulevard des Pyrénées aus liegt die ganze Bergkette vor dir, die Gipfel schon weiß. Dort, wo die Täler enger werden, liegt Lourdes. Unten rauscht der Gave de Pau. Ihm folgst du flussaufwärts."
        },
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Am Boulevard des Pyrénées",
          "t": "Neben dir lehnt ein junger Mann mit viel zu großem Rucksack am Geländer. „Auch nach Lourdes?“ Er heißt Luc, studiert in Toulouse und will dort eine Woche als freiwilliger Helfer Kranke begleiten. „Meine Großmutter hat das vierzig Jahre lang gemacht. Sie hat mich gebeten, es einmal zu versuchen.“ Er zuckt mit den Schultern. „Ob ich glaube, weiß ich noch nicht so genau.“"
        },
        {
          "era": "heute",
          "k": "Am Stadtrand",
          "t": "In einer kleinen Kirche am Weg brennt eine einzelne Kerze vor einer Statue in Weiß und Blau. Du setzt dich kurz. Die Kälte der Steinbank zieht durch die Jacke, und plötzlich riecht es nach Holzrauch."
        },
        {
          "era": "damals",
          "k": "Lourdes, Winter 1857/58",
          "t": "Holzrauch hängt in einem einzigen feuchten Raum, früher eine Gefängniszelle. Darum nennen ihn alle nur das Cachot. Hier lebt die Familie Soubirous zu sechst. Der Vater hat die Mühle verloren und findet nur tageweise Arbeit."
        },
        {
          "era": "damals",
          "k": "Bernadette",
          "t": "Die Älteste ist Bernadette, vierzehn Jahre alt, klein und oft kurzatmig. Lesen und Schreiben fallen ihr schwer, den Katechismus kann sie noch nicht auswendig. Sie möchte endlich zur Erstkommunion gehen. Lerne sie kennen."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "bernadette",
          "count": 5,
          "time": 14,
          "title": "Bernadette"
        }
      ],
      "rueckkehr": {
        "k": "Am Stadtrand, heute",
        "t": "Die Kerze vor der Statue flackert. Du sitzt wieder auf der kalten Steinbank. Ein Mädchen, das kaum lesen konnte und nichts besaß, wird bald etwas sehen, das Millionen Menschen an diesen Fluss führen wird. Du stehst auf und folgst dem Gave."
      }
    },
    {
      "id": "l2",
      "card": "massabielle",
      "leg": "Am Gave entlang",
      "ort": "Am Gave",
      "title": "Die Dame in der Grotte",
      "date": "11. Februar 1858",
      "jahr": 1858,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Unterwegs",
          "t": "Luc geht ein Stück mit dir. Er erzählt von seiner Großmutter, die jeden Abend für ihn betet, ob er will oder nicht. „Sie sagt, Lourdes ist der einzige Ort, an dem die Kranken vorne gehen und die Gesunden hinten.“ Er lacht. Dann wird er still und schaut auf den Fluss."
        },
        {
          "era": "heute",
          "k": "Am Gave, heute",
          "t": "Der Fluss ist milchig grün vom Wasser der Berge. Der Weg führt über Wiesen und durch kleine Dörfer. Eine Frau, die Wäsche aufhängt, ruft dir „Bon chemin!“ nach. An einem seichten Seitenarm ziehst du die Schuhe aus und watest hindurch. Das Wasser ist so kalt, dass dir der Atem stockt. Als du aufblickst, ist das Ufer ein anderes."
        },
        {
          "era": "damals",
          "k": "Massabielle, 11. Februar 1858",
          "t": "Ein kalter Donnerstag. Bernadette, ihre Schwester Toinette und die Nachbarstochter Jeanne Abadie sammeln Holz am Gave. Die beiden anderen waten durch den eiskalten Mühlbach. Bernadette zögert und zieht ihre Strümpfe aus."
        },
        {
          "era": "damals",
          "k": "Die Dame",
          "t": "Da hört sie ein Rauschen wie von einem Windstoß, doch die Pappeln stehen still. In einer Nische des Felsens bewegt sich ein wilder Rosenstrauch, und dort steht eine junge Dame in Weiß und lächelt ihr zu. Bernadette greift nach ihrem Rosenkranz. Bete mit ihr."
        }
      ],
      "ch": [
        {
          "type": "rosary",
          "interval": 900,
          "travel": 1800,
          "win": 120,
          "jitter": 0,
          "title": "Der erste Rosenkranz an der Grotte"
        }
      ],
      "rueckkehr": {
        "k": "Am Gave, heute",
        "t": "Du stehst noch im Wasser, die Schuhe in der Hand. Deine Füße sind taub vor Kälte, und doch ist dir warm. Am anderen Ufer weht die Wäsche im Wind. Du trocknest die Füße und gehst weiter flussaufwärts."
      }
    },
    {
      "id": "l3",
      "card": "rosen",
      "leg": "Bétharram",
      "ort": "Bétharram",
      "title": "Vierzehn Tage",
      "date": "18. bis 21. Februar 1858",
      "jahr": 1858,
      "scenes": [
        {
          "era": "heute",
          "k": "Bétharram, heute",
          "t": "Am Ufer steht eine alte Wallfahrtskirche, zu der schon lange vor 1858 Pilger kamen. Luc zündet eine Kerze an, ein wenig verlegen. „Für meine Großmutter. Ich weiß nicht, ob das etwas bringt.“ Er bleibt trotzdem lange davor stehen. Daneben liegt ein Buch, in das Pilger ihre Bitten schreiben. Du nimmst den Stift und hältst inne. Was schreibt man über so einen Weg? Das Licht im Kirchenschiff wird schwächer, und von draußen rauscht der Fluss.",
          "who": "begleiter"
        },
        {
          "era": "damals",
          "k": "Die Grotte, 18. Februar 1858",
          "t": "Zwei Frauen aus dem Ort haben Bernadette Papier und Feder mitgegeben. Die Dame soll ihren Wunsch aufschreiben. Doch sie lächelt nur: Das sei nicht nötig. Zum ersten Mal spricht sie. Sie fragt, ob Bernadette ihr die Gnade erweisen wolle, vierzehn Tage lang hierher zu kommen. Sie sagt „Sie“ zu dem armen Mädchen. Und sie verspricht ihr kein Glück in dieser Welt, wohl aber in der anderen."
        },
        {
          "era": "damals",
          "k": "Beim Kommissar, 21. Februar 1858",
          "t": "Am Nachmittag lässt Polizeikommissar Jacomet Bernadette zu sich holen. Er liest ihr ihre eigenen Aussagen vor und verdreht absichtlich Einzelheiten, um sie in Widersprüche zu verwickeln. Sie berichtigt ihn jedes Mal. Jetzt sitzt du an ihrer Stelle."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "verhoer",
          "count": 6,
          "time": 7,
          "title": "Das Verhör"
        }
      ],
      "rueckkehr": {
        "k": "Bétharram, heute",
        "t": "Der Stift liegt noch in deiner Hand, die Seite ist leer. Du schreibst nur einen Satz: dass ein Mädchen bei der Wahrheit blieb, obwohl man ihr die Worte im Mund verdrehte. Draußen rauscht der Gave unter der alten Brücke."
      }
    },
    {
      "id": "l4",
      "card": "quelle",
      "leg": "Saint-Pé-de-Bigorre",
      "ort": "Saint-Pé-de-Bigorre",
      "title": "Die Quelle",
      "date": "24. und 25. Februar 1858",
      "jahr": 1858,
      "scenes": [
        {
          "era": "heute",
          "k": "Saint-Pé-de-Bigorre, heute",
          "t": "Die Berge rücken näher. Deine Füße brennen, der Rucksack drückt. An einem Dorfbrunnen füllst du deine Flasche und trinkst langsam. Das Wasser schmeckt nach Stein und Erde. Du schließt die Augen und hörst viele Menschen murmeln, als stünde eine Menge um dich herum."
        },
        {
          "era": "damals",
          "k": "Die Grotte, 24. Februar 1858",
          "t": "Eine Menge drängt sich vor der Grotte. Die Dame ist ernst geworden. „Buße! Buße! Buße!“, lässt sie Bernadette ausrichten. „Betet zu Gott für die Sünder.“ Bernadette küsst den Boden, und viele in der Menge tun es ihr nach."
        },
        {
          "era": "damals",
          "k": "Die Quelle, 25. Februar 1858",
          "t": "Die Dame sagt ihr, sie solle an der Quelle trinken und sich darin waschen. Bernadette sieht keine Quelle. Sie gräbt mit den Händen im Schlamm, bis sich trübes Wasser sammelt, und trinkt. Die Leute lachen. Doch in den nächsten Tagen fließt dort klares Wasser. Bring die Ereignisse in ihre Ordnung."
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
        "k": "Saint-Pé-de-Bigorre, heute",
        "t": "Der Brunnen plätschert. Du schaust auf die Flasche in deiner Hand, und zum ersten Mal auf diesem Weg ist Wasser für dich mehr als etwas gegen den Durst. „Buße“, hat die Dame gesagt: umkehren und neu anfangen. Du gehst weiter, die Berge vor Augen."
      }
    },
    {
      "id": "l5",
      "card": "prozession",
      "leg": "Ankunft in Lourdes",
      "ort": "Lourdes",
      "title": "Kapelle und Prozession",
      "date": "1. bis 4. März 1858",
      "jahr": 1858,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Der Gurt",
          "t": "Am Nachmittag erreicht ihr Lourdes. Am Eingang des Heiligtums trennen sich eure Wege für eine Weile: Luc bekommt einen Ledergurt über die Schultern, das Zeichen der Helfer, und eine Liste mit den Namen der Kranken, die er in dieser Woche begleiten wird."
        },
        {
          "era": "heute",
          "k": "Lourdes, heute",
          "t": "Am Abend formiert sich im Heiligtum die Lichterprozession: Tausende Kerzen hinter Papierschirmen, ein langer leuchtender Strom. Ganz vorne schiebt Luc einen Rollstuhl, und die alte Frau darin hält ihre Kerze so, dass auch auf seinen Weg Licht fällt. Bei jedem Kehrvers heben sich die Lichter: Ave, ave, ave Maria. Du nimmst eine Kerze und reihst dich ein. Für einen Augenblick sind die Lichter um dich herum nur noch wenige, und die Leute beten in einer Sprache, die du nicht kennst."
        },
        {
          "era": "damals",
          "k": "Die Grotte, 1. März 1858",
          "t": "Noch vor dem Morgengrauen brennen Kerzen vor der Grotte, viele hundert Menschen beten. Unter ihnen ist Catherine Latapie aus einem Nachbardorf. Sie taucht ihren gelähmten Arm in das Wasser der Quelle. Kurz darauf kann sie die Finger wieder bewegen. Später erkennt die Kirche diese Heilung als Wunder an."
        },
        {
          "era": "damals",
          "k": "Beim Pfarrer, 2. März 1858",
          "t": "Bernadette richtet Pfarrer Peyramale aus, man solle an der Grotte eine Kapelle bauen und in Prozession dorthin kommen. Der Pfarrer poltert. Erst soll die Dame ihren Namen sagen und den wilden Rosenstrauch mitten im Winter blühen lassen. Die Prozession aber hat längst begonnen. Folge den Lichtern."
        }
      ],
      "ch": [
        {
          "type": "procession",
          "rounds": [
            3,
            4,
            5,
            6
          ],
          "speed": 680,
          "title": "Die Lichterprozession"
        }
      ],
      "rueckkehr": {
        "k": "Lourdes, heute",
        "t": "Die Prozession ist zu Ende, auf dem Platz verlöschen die letzten Kerzen. Deine brennt noch. Ein armes Mädchen hat einem polternden Pfarrer ausgerichtet, was die Dame wollte, und heute ziehen hier an vielen Abenden Tausende mit Lichtern. Morgen gehst du zur Grotte."
      }
    },
    {
      "id": "l6",
      "card": "unbefleckte",
      "leg": "An der Grotte",
      "ort": "Massabielle",
      "title": "Die Unbefleckte Empfängnis",
      "date": "25. März 1858",
      "jahr": 1858,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Früh am Morgen",
          "t": "An der Grotte triffst du Luc. Er sieht müde aus und ruhig. „Gestern hat sich eine Frau im Rollstuhl bei mir bedankt. Nicht fürs Schieben. Dafür, dass ich da war.“ Er schweigt eine Weile. Dann geht er zu seinem Dienst, und du bleibst."
        },
        {
          "era": "heute",
          "k": "An der Grotte, heute",
          "t": "Der Fels ist glatt geworden von den vielen Händen, die ihn berührt haben. Du legst deine Hand darauf. Er ist kühl und feucht. Über dir in der Nische steht die Statue der Dame in Weiß. Du lässt die Hand liegen. Der Stein wird rau und nass, die Kerzenständer sind fort, und es ist noch dunkel, kurz vor Sonnenaufgang."
        },
        {
          "era": "damals",
          "k": "Die Grotte, 25. März 1858",
          "t": "Das Fest Mariä Verkündigung. Noch vor Sonnenaufgang ist Bernadette an der Grotte. Wieder und wieder bittet sie die Dame, ihren Namen zu sagen."
        },
        {
          "era": "damals",
          "k": "Der Name",
          "t": "Da faltet die Dame die Hände vor der Brust, blickt zum Himmel und sagt in Bernadettes Dialekt: „Que soy era Immaculada Councepciou.“ Ich bin die Unbefleckte Empfängnis. Bernadette versteht die Worte nicht und sagt sie sich auf dem ganzen Weg zum Pfarrer vor, um sie nicht zu vergessen. An der Grotte betet die Menge. Bete mit."
        }
      ],
      "ch": [
        {
          "type": "rosary",
          "interval": 680,
          "travel": 1300,
          "win": 85,
          "jitter": 170,
          "title": "Ein Gesätz mit der Menge"
        }
      ],
      "rueckkehr": {
        "k": "An der Grotte, heute",
        "t": "Unter deiner Hand ist der Fels wieder glatt. Über dir steht die Statue, und unter ihr stehen die Worte, die Bernadette sich auf dem Weg zum Pfarrer immer wieder vorsagte: Ich bin die Unbefleckte Empfängnis. Du sprichst sie leise nach."
      }
    },
    {
      "id": "l7",
      "card": "juli",
      "leg": "Die letzte Nacht",
      "ort": "Am Ufer des Gave",
      "title": "Kerze und Abschied",
      "date": "7. April und 16. Juli 1858",
      "jahr": 1858,
      "scenes": [
        {
          "era": "heute",
          "k": "Lourdes, heute",
          "t": "Am letzten Abend sitzt du am Ufer, ungefähr dort, wo Bernadette damals kniete. Drüben flackern die Kerzen an der Grotte im Wind. Du schaust so lange hinüber, bis die Flammen vor deinen Augen verschwimmen."
        },
        {
          "era": "damals",
          "k": "Die Grotte, 7. April 1858",
          "t": "Während einer Erscheinung schlägt die Flamme von Bernadettes großer Kerze eine Viertelstunde lang durch ihre Finger. Der Arzt Dr. Dozous misst die Zeit mit der Uhr. Danach untersucht er ihre Hand und findet keine Spur einer Verbrennung."
        },
        {
          "era": "damals",
          "k": "Am anderen Ufer, 16. Juli 1858",
          "t": "Die Behörden haben die Grotte mit Bretterzäunen abgesperrt. Am Fest Unserer Lieben Frau auf dem Berge Karmel kniet Bernadette auf der Wiese jenseits des Gave. Ein letztes Mal sieht sie die Dame. So schön, sagt sie später, habe sie sie noch nie gesehen. Jetzt kommt die letzte Prüfung. Alle drei Kerzen müssen für beide Teile reichen."
        }
      ],
      "ch": [
        {
          "type": "chrono",
          "count": 6,
          "title": "Teil 1: Das ganze Bild"
        },
        {
          "type": "quiz",
          "pool": "spaeter",
          "count": 6,
          "time": 10,
          "title": "Teil 2: Die letzte Prüfung"
        }
      ],
      "rueckkehr": {
        "k": "Lourdes, heute",
        "t": "Drüben brennen die Kerzen noch. Luc setzt sich neben dich, den Gurt noch über den Schultern. „Ich glaube, ich komme nächstes Jahr wieder“, sagt er, und es klingt wie ein Anfang. Gut 40 Kilometer bist du am Gave entlanggegangen, an der Seite eines Mädchens, das nichts besaß außer seinem Vertrauen. Bevor du gehst, füllst du an der Quelle eine kleine Flasche, für jemanden zu Hause, der krank ist."
      }
    }
  ]
});
