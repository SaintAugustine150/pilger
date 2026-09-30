/* =====================================================================
   Pilger durch die Zeit – Kapitel 2: Lourdes
   ---------------------------------------------------------------------
   Diese Datei enthält nur Texte und Daten. Du kannst sie bearbeiten,
   ohne den Spielcode anzufassen. Wichtig: Anführungszeichen "..." und
   Kommas müssen stehen bleiben.

   karten      Sammelkarten: name, sub (Untertitel), rar (1-3 Seltenheit),
               text (Rückseite), hint (Hinweis im Album)
   fragen      Fragenpools. Normale Frage: q (Frage), a (richtige Antwort),
               w (drei falsche Antworten), e (Erklärung, optional).
               Wahr/falsch: s (Aussage), v (true = wahr, false = falsch)
   ereignisse  Für die Zeitstrahl-Prüfung: t (Text), d (Datum),
               k (Sortierschlüssel JJJJMMTT)
   etappen     scenes = Erzählszenen (era heute/damals, k Ort, t Text),
               ch = Prüfungen der Etappe
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
      "t": "Kommissar Jacomet verhört Bernadette",
      "d": "21. Februar 1858",
      "k": 18580221
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
      "t": "Bernadette stirbt",
      "d": "1879",
      "k": 18790416
    },
    {
      "t": "Bernadette wird heiliggesprochen",
      "d": "1933",
      "k": 19331208
    }
  ],
  "etappen": [
    {
      "id": "l1",
      "card": "bernadette",
      "leg": "Aufbruch in Pau",
      "title": "Das Cachot",
      "date": "Winter 1857/58",
      "scenes": [
        {
          "era": "heute",
          "k": "Pau, heute",
          "t": "Vom Boulevard des Pyrénées aus liegt die ganze Bergkette vor dir, die Gipfel schon weiß. Dort, wo die Täler enger werden, liegt Lourdes. Unten rauscht der Gave de Pau. Ihm folgst du flussaufwärts."
        },
        {
          "era": "heute",
          "k": "Am Stadtrand",
          "t": "In einer kleinen Kirche am Weg brennt eine einzelne Kerze vor einer Statue in Weiß und Blau. Du setzt dich kurz. Die Kälte der Steinbank zieht durch die Jacke, und plötzlich riecht es nach Holzrauch."
        },
        {
          "era": "damals",
          "k": "Lourdes, Winter 1857/58",
          "t": "Ein einziger feuchter Raum, früher eine Gefängniszelle. Darum nennen ihn alle nur das Cachot. Hier lebt die Familie Soubirous zu sechst. Der Vater hat die Mühle verloren und findet nur tageweise Arbeit."
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
      ]
    },
    {
      "id": "l2",
      "card": "massabielle",
      "leg": "Am Gave entlang",
      "title": "Die Dame in der Grotte",
      "date": "11. Februar 1858",
      "scenes": [
        {
          "era": "heute",
          "k": "Am Gave, heute",
          "t": "Der Fluss ist milchig grün vom Wasser der Berge. Der Weg führt über Wiesen und durch kleine Dörfer. Eine Frau, die Wäsche aufhängt, ruft dir „Bon chemin!“ nach."
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
      ]
    },
    {
      "id": "l3",
      "card": "rosen",
      "leg": "Bétharram",
      "title": "Vierzehn Tage",
      "date": "18. bis 21. Februar 1858",
      "scenes": [
        {
          "era": "heute",
          "k": "Bétharram, heute",
          "t": "Am Ufer steht eine alte Wallfahrtskirche, zu der schon lange vor 1858 Pilger kamen. Über eine steinerne Brücke gehst du hinüber. Das Wasser darunter ist laut und schnell."
        },
        {
          "era": "damals",
          "k": "Die Grotte, 18. Februar 1858",
          "t": "Zum ersten Mal spricht die Dame. Sie fragt, ob Bernadette ihr die Gnade erweisen wolle, vierzehn Tage lang hierher zu kommen. Sie sagt „Sie“ zu dem armen Mädchen. Und sie verspricht ihr kein Glück in dieser Welt, wohl aber in der anderen."
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
      ]
    },
    {
      "id": "l4",
      "card": "quelle",
      "leg": "Saint-Pé-de-Bigorre",
      "title": "Die Quelle",
      "date": "24. und 25. Februar 1858",
      "scenes": [
        {
          "era": "heute",
          "k": "Saint-Pé-de-Bigorre, heute",
          "t": "Die Berge rücken näher. Deine Füße brennen, der Rucksack drückt. An einem Dorfbrunnen füllst du deine Flasche und trinkst langsam."
        },
        {
          "era": "damals",
          "k": "Die Grotte, 24. Februar 1858",
          "t": "Die Dame ist ernst geworden. „Buße! Buße! Buße!“, lässt sie Bernadette ausrichten. „Betet zu Gott für die Sünder.“ Bernadette küsst den Boden, und viele in der Menge tun es ihr nach."
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
      ]
    },
    {
      "id": "l5",
      "card": "prozession",
      "leg": "Ankunft in Lourdes",
      "title": "Kapelle und Prozession",
      "date": "1. bis 4. März 1858",
      "scenes": [
        {
          "era": "heute",
          "k": "Lourdes, heute",
          "t": "Am Abend erreichst du die Stadt. Im Heiligtum formiert sich die Lichterprozession: Tausende Kerzen hinter Papierschirmen, ein langer leuchtender Strom. Bei jedem Kehrvers heben sich die Lichter: Ave, ave, ave Maria."
        },
        {
          "era": "damals",
          "k": "Die Grotte, 1. März 1858",
          "t": "Catherine Latapie aus einem Nachbardorf taucht ihren gelähmten Arm in das Wasser der Quelle. Kurz darauf kann sie die Finger wieder bewegen. Später erkennt die Kirche diese Heilung als Wunder an."
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
      ]
    },
    {
      "id": "l6",
      "card": "unbefleckte",
      "leg": "An der Grotte",
      "title": "Die Unbefleckte Empfängnis",
      "date": "25. März 1858",
      "scenes": [
        {
          "era": "heute",
          "k": "An der Grotte, heute",
          "t": "Der Fels ist glatt geworden von den vielen Händen, die ihn berührt haben. Du legst deine Hand darauf. Er ist kühl und feucht. Über dir in der Nische steht die Statue der Dame in Weiß."
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
      ]
    },
    {
      "id": "l7",
      "card": "juli",
      "leg": "Die letzte Nacht",
      "title": "Kerze und Abschied",
      "date": "7. April und 16. Juli 1858",
      "scenes": [
        {
          "era": "damals",
          "k": "Die Grotte, 7. April 1858",
          "t": "Während einer Erscheinung schlägt die Flamme von Bernadettes großer Kerze eine Viertelstunde lang durch ihre Finger. Der Arzt Dr. Dozous misst die Zeit mit der Uhr. Danach untersucht er ihre Hand und findet keine Spur einer Verbrennung."
        },
        {
          "era": "damals",
          "k": "Am anderen Ufer, 16. Juli 1858",
          "t": "Die Behörden haben die Grotte mit Bretterzäunen abgesperrt. Am Fest Unserer Lieben Frau auf dem Berge Karmel kniet Bernadette auf der Wiese jenseits des Gave. Ein letztes Mal sieht sie die Dame. So schön, sagt sie später, habe sie sie noch nie gesehen."
        },
        {
          "era": "heute",
          "k": "Lourdes, heute",
          "t": "Du sitzt am Ufer, ungefähr dort, wo Bernadette damals kniete. Drüben flackern die Kerzen an der Grotte im Wind. Noch einmal kehrst du ins Jahr 1858 zurück, zur letzten Prüfung. Alle drei Kerzen müssen für beide Teile reichen."
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
      ]
    }
  ]
});
