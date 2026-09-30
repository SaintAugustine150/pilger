/* =====================================================================
   Pilger durch die Zeit – Kapitel 1: Fátima
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
   weg         Landkarte (Bild bilder/wege/<id>.webp): groesse = Bildgröße,
               pfad = Wegpunkte [x, y] in Bildpixeln entlang des gemalten Weges,
               orte = für jede Etappe die Nummer des Wegpunkts (ab 0), an dem
               ihre Markierung steht. Claude pflegt diese Werte.
   ===================================================================== */
window.KAPITEL = window.KAPITEL || [];
KAPITEL.push({
  "id": "fatima",
  "n": 1,
  "name": "Fátima",
  "years": "1916 bis 1917",
  "lead": "Von Lissabon nach Fátima, rund 140 Kilometer auf den blauen Pfeilen, und immer wieder zurück in die Jahre 1916 und 1917.",
  "bonusAll": "capelinha",
  "bonusGold": "fatima",
  "weg": {
    "groesse": [1024, 1536],
    "pfad": [[400, 1180], [470, 1140], [545, 1110], [500, 1075], [450, 1045], [410, 1020], [385, 995], [410, 955], [450, 925], [500, 912], [555, 905], [600, 890], [640, 870], [640, 840], [600, 815], [560, 795], [545, 760], [545, 735], [590, 690], [630, 665], [655, 640], [650, 615], [610, 600], [540, 592], [470, 582], [420, 570], [385, 555], [400, 535], [440, 520], [490, 505], [540, 488], [575, 462], [560, 440], [510, 425], [470, 410], [475, 385], [505, 350], [490, 325], [470, 305], [490, 285], [530, 270], [580, 255], [620, 240], [645, 215], [660, 190], [690, 160]],
    "orte": [0, 5, 17, 25, 36, 41, 45]
  },
  "karten": {
    "engel": {
      "name": "Der Engel des Friedens",
      "sub": "Fátima 1916",
      "rar": 2,
      "text": "Er erschien den drei Hirtenkindern 1916 dreimal und bereitete sie auf die Begegnung mit Maria vor. Beim letzten Besuch reichte er ihnen die Eucharistie.",
      "hint": "Etappe 1 abschließen"
    },
    "lucia": {
      "name": "Lúcia dos Santos",
      "sub": "1907–2005",
      "rar": 1,
      "text": "Die Älteste der drei und die Einzige, die mit Maria sprach. Sie wurde Ordensfrau, lebte ab 1948 im Karmel von Coimbra und schrieb ihre Erinnerungen an die Erscheinungen nieder.",
      "hint": "Etappe 2 abschließen"
    },
    "francisco": {
      "name": "Francisco Marto",
      "sub": "1908–1919",
      "rar": 2,
      "text": "Er sah Maria, hörte sie aber nicht. Am liebsten betete er allein, um den „verborgenen Jesus“ im Tabernakel zu trösten. 2017 wurde er heiliggesprochen.",
      "hint": "Etappe 3 abschließen"
    },
    "jacinta": {
      "name": "Jacinta Marto",
      "sub": "1910–1920",
      "rar": 2,
      "text": "Die Jüngste der drei. Die Vision vom Juli prägte sie tief, und sie brachte viele Opfer für die Bekehrung der Sünder. Sie starb in Lissabon und wurde 2017 heiliggesprochen.",
      "hint": "Etappe 4 abschließen"
    },
    "valinhos": {
      "name": "Valinhos",
      "sub": "19. August 1917",
      "rar": 1,
      "text": "Ein Flurstück nahe Aljustrel. Hier erschien Maria, nachdem die Kinder in Ourém festgehalten worden waren. Heute führt ein Kreuzweg dorthin.",
      "hint": "Etappe 5 abschließen"
    },
    "rosenkranz": {
      "name": "Der Rosenkranz",
      "sub": "Die Bitte jeder Erscheinung",
      "rar": 2,
      "text": "Bei jeder Erscheinung von 1917 bat Maria darum, den Rosenkranz zu beten. Seit Juli wird nach jedem Gesätz das Fatima-Gebet angefügt: „O mein Jesus, verzeih uns unsere Sünden …“",
      "hint": "Etappe 6 abschließen"
    },
    "sonnenwunder": {
      "name": "Das Sonnenwunder",
      "sub": "13. Oktober 1917",
      "rar": 3,
      "text": "Nach stundenlangem Regen sahen Zehntausende, wie die Sonne sich zu drehen und zu stürzen schien. Selbst die kirchenkritische Lissaboner Zeitung O Século berichtete darüber.",
      "hint": "Etappe 7 abschließen"
    },
    "capelinha": {
      "name": "Die Erscheinungskapelle",
      "sub": "Errichtet 1919",
      "rar": 2,
      "text": "Maria hatte um eine Kapelle gebeten. 1919 wurde sie an der Stelle der Steineiche gebaut. Sie ist bis heute das Herz des Heiligtums von Fátima.",
      "hint": "Alle sieben Etappen abschließen"
    },
    "fatima": {
      "name": "Unsere Liebe Frau von Fátima",
      "sub": "Gedenktag 13. Mai",
      "rar": 3,
      "text": "Unter diesem Titel wird Maria weltweit verehrt. Die Botschaft von Fátima ruft zu Gebet, besonders zum Rosenkranz, zu Umkehr und Sühne. 1930 erkannte die Kirche die Erscheinungen als glaubwürdig an.",
      "hint": "Alle sieben Etappen in Gold abschließen"
    }
  },
  "fragen": {
    "engel": [
      {
        "q": "Wie stellte sich der Engel bei seinem ersten Besuch vor?",
        "a": "Als Engel des Friedens",
        "w": [
          "Als Erzengel Michael",
          "Als Engel der Hirten",
          "Als Engel des Gerichts"
        ]
      },
      {
        "q": "Wie oft erschien der Engel den Kindern im Jahr 1916?",
        "a": "Dreimal",
        "w": [
          "Einmal",
          "Siebenmal",
          "Zwölfmal"
        ],
        "e": "Im Frühjahr, im Sommer und im Herbst."
      },
      {
        "q": "In welcher Beziehung standen die drei Kinder zueinander?",
        "a": "Francisco und Jacinta waren Geschwister, Lúcia ihre Cousine",
        "w": [
          "Alle drei waren Geschwister",
          "Lúcia und Jacinta waren Schwestern",
          "Sie waren Nachbarskinder ohne Verwandtschaft"
        ]
      },
      {
        "q": "Womit waren die Kinder beschäftigt, als sie die Erscheinungen erlebten?",
        "a": "Sie hüteten Schafe",
        "w": [
          "Sie halfen bei der Weinlese",
          "Sie holten Wasser vom Dorfbrunnen",
          "Sie putzten die Pfarrkirche"
        ],
        "e": "Ihre Familien lebten in Aljustrel, einem Weiler der Pfarrei Fátima."
      },
      {
        "q": "Als wessen Schutzengel gab sich der Engel beim zweiten Besuch zu erkennen?",
        "a": "Als Schutzengel Portugals",
        "w": [
          "Als Schutzengel Lissabons",
          "Als Schutzengel des Papstes",
          "Als Schutzengel Lúcias"
        ]
      },
      {
        "q": "Was reichte der Engel den Kindern beim dritten Besuch?",
        "a": "Die Eucharistie",
        "w": [
          "Einen hölzernen Rosenkranz",
          "Ein Skapulier",
          "Weihwasser aus einer Quelle"
        ],
        "e": "Lúcia empfing die Hostie, Francisco und Jacinta tranken aus dem Kelch."
      },
      {
        "q": "Wer war das jüngste der drei Kinder?",
        "a": "Jacinta",
        "w": [
          "Francisco",
          "Lúcia",
          "Die drei waren gleich alt"
        ],
        "e": "Lúcia wurde 1907 geboren, Francisco 1908, Jacinta 1910."
      },
      {
        "q": "Was lehrte der Engel die Kinder vor allem?",
        "a": "Zu beten und Opfer für die Sünder zu bringen",
        "w": [
          "Lesen und Schreiben",
          "Kirchenlieder auf Latein",
          "Ihre Tiere zu segnen"
        ]
      }
    ],
    "mai": [
      {
        "q": "Wo fand die erste Marienerscheinung am 13. Mai 1917 statt?",
        "a": "In der Cova da Iria",
        "w": [
          "In der Pfarrkirche von Fátima",
          "Am Strand von Nazaré",
          "In Lissabon"
        ]
      },
      {
        "q": "Über welchem Baum erschien die Frau?",
        "a": "Über einer kleinen Steineiche",
        "w": [
          "Über einem Olivenbaum",
          "Über einer Korkeiche",
          "Über einem Feigenbaum"
        ],
        "e": "Auf Portugiesisch azinheira. An ihrer Stelle steht heute die Erscheinungskapelle."
      },
      {
        "q": "Worum bat Maria schon bei der ersten Erscheinung?",
        "a": "Jeden Tag den Rosenkranz zu beten",
        "w": [
          "Eine Kirche aus Feldsteinen zu bauen",
          "Nach Rom zu pilgern",
          "Drei Tage lang zu fasten"
        ],
        "e": "Für den Frieden in der Welt und das Ende des Krieges."
      },
      {
        "q": "Was war bei Francisco während der Erscheinungen anders?",
        "a": "Er sah Maria, hörte sie aber nicht",
        "w": [
          "Er hörte sie, sah sie aber nicht",
          "Er war bei keiner Erscheinung dabei",
          "Nur er durfte mit ihr sprechen"
        ],
        "e": "Jacinta sah und hörte sie, nur Lúcia sprach mit ihr."
      },
      {
        "q": "Welcher Krieg tobte, als die Erscheinungen begannen?",
        "a": "Der Erste Weltkrieg",
        "w": [
          "Der Deutsch-Französische Krieg",
          "Der Zweite Weltkrieg",
          "Der Spanische Bürgerkrieg"
        ],
        "e": "Portugal war seit 1916 Kriegspartei."
      },
      {
        "q": "Was kündigte Maria im Juni über Francisco und Jacinta an?",
        "a": "Dass sie sie bald in den Himmel holen werde",
        "w": [
          "Dass sie Priester und Ordensfrau würden",
          "Dass sie nach Rom reisen würden",
          "Dass sie die Erscheinungen vergessen würden"
        ]
      },
      {
        "q": "Am 13. Juni wird ein in Lissabon geborener Heiliger gefeiert. Welcher?",
        "a": "Antonius von Padua",
        "w": [
          "Franz von Assisi",
          "Jakobus der Ältere",
          "Josef von Nazareth"
        ],
        "e": "Viele im Dorf waren deshalb auf dem Fest statt in der Cova da Iria."
      },
      {
        "q": "Wie lange sollten die Kinder laut der ersten Erscheinung wiederkommen?",
        "a": "Sechs Monate lang, jeweils am 13.",
        "w": [
          "Ein Jahr lang an jedem Sonntag",
          "Sieben Tage hintereinander",
          "Nur noch ein einziges Mal"
        ]
      }
    ],
    "august": [
      {
        "q": "Wer ließ die Kinder am 13. August 1917 festhalten?",
        "a": "Der Administrator des Kreises Ourém",
        "w": [
          "Der Bischof von Leiria",
          "Der Pfarrer von Fátima",
          "Ein Offizier der Armee"
        ],
        "e": "Er wollte die Erscheinungen als Schwindel entlarven."
      },
      {
        "q": "Womit drohte man den Kindern in Ourém?",
        "a": "Sie in siedendes Öl zu werfen",
        "w": [
          "Sie von der Schule zu werfen",
          "Sie nach Afrika zu verbannen",
          "Ihre Herde zu beschlagnahmen"
        ],
        "e": "Keines der Kinder gab nach."
      },
      {
        "q": "Wo erschien Maria im August, weil die Kinder am 13. nicht kommen konnten?",
        "a": "In Valinhos",
        "w": [
          "Im Gefängnis von Ourém",
          "Im Elternhaus in Aljustrel",
          "In Santarém"
        ]
      },
      {
        "q": "An welchem Tag war die Erscheinung im August?",
        "a": "Am 19. August",
        "w": [
          "Am 13. August",
          "Am 15. August",
          "Am 31. August"
        ]
      },
      {
        "q": "Was verrieten die Kinder in Ourém nicht?",
        "a": "Das Geheimnis vom Juli",
        "w": [
          "Den Weg zur Cova da Iria",
          "Die Namen ihrer Eltern",
          "Wie viele Schafe sie hüteten"
        ]
      },
      {
        "q": "Was kündigte Maria im Juli für den Oktober an?",
        "a": "Ein Wunder, damit alle glauben",
        "w": [
          "Ein Erdbeben",
          "Das sofortige Kriegsende",
          "Den Besuch des Papstes"
        ]
      },
      {
        "q": "Aus wie vielen Teilen besteht das Geheimnis von Fátima?",
        "a": "Aus drei",
        "w": [
          "Aus zwei",
          "Aus sieben",
          "Aus zehn"
        ]
      },
      {
        "q": "Welches Gebet lehrte Maria im Juli, das nach jedem Gesätz gebetet wird?",
        "a": "„O mein Jesus, verzeih uns unsere Sünden …“",
        "w": [
          "Das Salve Regina",
          "Das Magnificat",
          "Den Engel des Herrn"
        ]
      }
    ],
    "oktober": [
      {
        "q": "Wie nannte sich Maria am 13. Oktober 1917?",
        "a": "Unsere Liebe Frau vom Rosenkranz",
        "w": [
          "Königin des Friedens",
          "Die Unbefleckte Empfängnis",
          "Mutter der Kirche"
        ],
        "e": "„Die Unbefleckte Empfängnis“ war die Selbstbezeichnung in Lourdes 1858."
      },
      {
        "q": "Worum bat Maria bei der letzten Erscheinung außerdem?",
        "a": "Um eine Kapelle an diesem Ort",
        "w": [
          "Um eine Wallfahrt nach Rom",
          "Um die Gründung eines Ordens",
          "Um ein Denkmal für die Kinder"
        ]
      },
      {
        "q": "Wie war das Wetter vor dem Sonnenwunder?",
        "a": "Es hatte stundenlang geregnet",
        "w": [
          "Es lag Schnee",
          "Es war seit Wochen trocken",
          "Es hagelte"
        ]
      },
      {
        "q": "Wie viele Menschen waren nach Schätzungen beim Sonnenwunder?",
        "a": "Rund 70.000",
        "w": [
          "Rund 700",
          "Rund 7.000",
          "Rund 700.000"
        ],
        "e": "Die Schätzungen reichen von etwa 30.000 bis 100.000."
      },
      {
        "q": "Welche Lissaboner Tageszeitung berichtete über das Sonnenwunder, obwohl sie der Kirche kritisch gegenüberstand?",
        "a": "O Século",
        "w": [
          "Público",
          "A Bola",
          "Correio da Manhã"
        ],
        "e": "Die anderen drei wurden erst Jahrzehnte später gegründet."
      },
      {
        "q": "Wann erkannte die Kirche die Erscheinungen offiziell als glaubwürdig an?",
        "a": "1930",
        "w": [
          "1917",
          "1950",
          "2000"
        ],
        "e": "Der Bischof von Leiria erklärte sie am 13. Oktober 1930 für glaubwürdig."
      },
      {
        "q": "Welcher Papst sprach Francisco und Jacinta 2017 heilig?",
        "a": "Papst Franziskus",
        "w": [
          "Johannes Paul II.",
          "Benedikt XVI.",
          "Pius XII."
        ],
        "e": "Johannes Paul II. hatte sie im Jahr 2000 seliggesprochen."
      },
      {
        "q": "Welcher Papst überlebte am 13. Mai 1981 ein Attentat und dankte dafür der Muttergottes von Fátima?",
        "a": "Johannes Paul II.",
        "w": [
          "Paul VI.",
          "Johannes XXIII.",
          "Benedikt XVI."
        ],
        "e": "Die Kugel wurde später in die Krone der Statue von Fátima eingesetzt."
      },
      {
        "q": "Wen kündigte Maria im September für den Oktober zusätzlich an?",
        "a": "Den heiligen Josef mit dem Jesuskind",
        "w": [
          "Den Erzengel Gabriel",
          "Den Apostel Petrus",
          "Den heiligen Antonius"
        ]
      },
      {
        "q": "Wo lebte Lúcia ab 1948 als Ordensfrau?",
        "a": "Im Karmel von Coimbra",
        "w": [
          "In einem Kloster in Rom",
          "Im Heiligtum von Fátima",
          "In Lourdes"
        ]
      }
    ]
  },
  "ereignisse": [
    {
      "t": "Der Engel des Friedens erscheint den Kindern",
      "d": "1916",
      "k": 19160601
    },
    {
      "t": "Erste Marienerscheinung in der Cova da Iria",
      "d": "13. Mai 1917",
      "k": 19170513
    },
    {
      "t": "Maria zeigt das dreiteilige Geheimnis",
      "d": "13. Juli 1917",
      "k": 19170713
    },
    {
      "t": "Die Kinder werden in Ourém festgehalten",
      "d": "13. August 1917",
      "k": 19170813
    },
    {
      "t": "Erscheinung in Valinhos",
      "d": "19. August 1917",
      "k": 19170819
    },
    {
      "t": "Das Sonnenwunder",
      "d": "13. Oktober 1917",
      "k": 19171013
    },
    {
      "t": "Francisco stirbt",
      "d": "1919",
      "k": 19190404
    },
    {
      "t": "Jacinta stirbt in Lissabon",
      "d": "1920",
      "k": 19200220
    },
    {
      "t": "Der Bischof von Leiria erkennt die Erscheinungen an",
      "d": "1930",
      "k": 19301013
    },
    {
      "t": "Attentat auf Papst Johannes Paul II.",
      "d": "13. Mai 1981",
      "k": 19810513
    },
    {
      "t": "Das dritte Geheimnis wird veröffentlicht",
      "d": "2000",
      "k": 20000626
    },
    {
      "t": "Schwester Lúcia stirbt in Coimbra",
      "d": "2005",
      "k": 20050213
    },
    {
      "t": "Francisco und Jacinta werden heiliggesprochen",
      "d": "2017",
      "k": 20170513
    }
  ],
  "etappen": [
    {
      "id": "s1",
      "card": "engel",
      "leg": "Aufbruch in Lissabon",
      "title": "Der Engel des Friedens",
      "date": "Frühjahr 1916",
      "scenes": [
        {
          "era": "heute",
          "k": "Lissabon, heute",
          "t": "Vor der Kathedrale schnürst du die Schuhe. Blaue Pfeile auf Bordsteinen und Hauswänden weisen den Weg nach Fátima, rund 140 Kilometer nach Norden."
        },
        {
          "era": "heute",
          "k": "Am ersten Wegkreuz",
          "t": "Am Stadtrand bleibst du an einem steinernen Kreuz stehen und schließt die Augen. Der Verkehrslärm wird leiser, dann ist er ganz fort. Es riecht nach nassem Gras."
        },
        {
          "era": "damals",
          "k": "Bei Aljustrel, 1916",
          "t": "Drei Hirtenkinder hüten ihre Schafe: Lúcia und ihre Cousins Francisco und Jacinta. Plötzlich kommt ein Licht über die Bäume auf sie zu, eine Gestalt wie ein junger Mann, weiß und durchscheinend."
        },
        {
          "era": "damals",
          "k": "Der erste Besuch",
          "t": "Er lehrt die Kinder, sich niederzuwerfen und zu beten. Noch zweimal wird er in diesem Jahr kommen. Zeig, dass du verstehst, was hier beginnt."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "engel",
          "count": 5,
          "time": 15,
          "title": "Der Engel des Friedens"
        }
      ]
    },
    {
      "id": "s2",
      "card": "lucia",
      "leg": "Entlang des Tejo",
      "title": "Die Frau über der Steineiche",
      "date": "13. Mai 1917",
      "scenes": [
        {
          "era": "heute",
          "k": "Am Tejo",
          "t": "Der Weg folgt dem Fluss nach Norden, zwischen Feldern und Lagerhallen. Am Nachmittag sind die ersten Blasen da. Du zählst die Perlen deines Rosenkranzes statt der Kilometer."
        },
        {
          "era": "damals",
          "k": "Cova da Iria, 13. Mai 1917",
          "t": "Mittag in einer Senke voller Steineichen. Ein Blitz zuckt über den klaren Himmel. Die Kinder fürchten ein Gewitter und treiben die Herde zusammen. Da sehen sie über einer kleinen Steineiche eine Frau, heller als die Sonne."
        },
        {
          "era": "damals",
          "k": "Die erste Bitte",
          "t": "Sie bittet die Kinder, sechs Monate lang an jedem 13. wiederzukommen und jeden Tag den Rosenkranz zu beten, für den Frieden in der Welt und das Ende des Krieges. Bete mit ihnen ein Gesätz."
        }
      ],
      "ch": [
        {
          "type": "rosary",
          "interval": 950,
          "travel": 1900,
          "win": 125,
          "jitter": 0,
          "title": "Ein Gesätz mit den Hirtenkindern"
        }
      ]
    },
    {
      "id": "s3",
      "card": "francisco",
      "leg": "Santarém",
      "title": "Das Unbefleckte Herz",
      "date": "13. Juni 1917",
      "scenes": [
        {
          "era": "heute",
          "k": "Santarém, heute",
          "t": "Die Stadt thront auf einem Hügel über dem Tejo. In der Pilgerherberge teilst du dein Brot mit einer Frau aus Braga, die den Weg zum zwölften Mal geht. Sie fragt dich, warum du gehst."
        },
        {
          "era": "damals",
          "k": "Cova da Iria, 13. Juni 1917",
          "t": "Im Dorf feiert man den heiligen Antonius. Trotzdem ist eine kleine Gruppe mit den Kindern gekommen. Sie beten gemeinsam den Rosenkranz und sehen, wie die Kinder gebannt zur Steineiche blicken."
        },
        {
          "era": "damals",
          "k": "Die zweite Botschaft",
          "t": "Maria sagt, sie werde Francisco und Jacinta bald in den Himmel holen. Lúcia aber soll länger bleiben, um die Verehrung ihres Unbefleckten Herzens bekannt zu machen."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "mai",
          "count": 5,
          "time": 15,
          "title": "Mai und Juni 1917"
        }
      ]
    },
    {
      "id": "s4",
      "card": "jacinta",
      "leg": "Durch den Ribatejo",
      "title": "Das Geheimnis",
      "date": "13. Juli 1917",
      "scenes": [
        {
          "era": "heute",
          "k": "Ribatejo, heute",
          "t": "Korkeichen, Staub, kaum Schatten. Das Wasser in deiner Flasche ist warm geworden. Du betest für jeden Menschen, der dir heute begegnet ist, und es sind mehr, als du dachtest."
        },
        {
          "era": "damals",
          "k": "Cova da Iria, 13. Juli 1917",
          "t": "Maria zeigt den Kindern ein Geheimnis in drei Teilen. Was sie sehen, erschüttert vor allem Jacinta. Von nun an bringt sie Opfer für die Sünder."
        },
        {
          "era": "damals",
          "k": "Ein Blick nach vorn",
          "t": "Maria lehrt die Kinder ein Gebet für jedes Gesätz und kündigt für Oktober ein Wunder an, damit alle glauben. Was hier beginnt, reicht weit in die Zukunft. Ordne, was geschehen wird."
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
      "id": "s5",
      "card": "valinhos",
      "leg": "In die Serra de Aire",
      "title": "Standhaft in Ourém",
      "date": "August 1917",
      "scenes": [
        {
          "era": "heute",
          "k": "Serra de Aire, heute",
          "t": "Der Weg steigt an. Kalkstein, niedrige Mauern, Wind. Ein Hund begleitet dich ein Stück und verschwindet dann zwischen den Oliven."
        },
        {
          "era": "damals",
          "k": "Ourém, 13. August 1917",
          "t": "Der Administrator des Kreises holt die Kinder mit seinem Wagen ab und hält sie fest. Er verhört sie und droht, sie in siedendes Öl zu werfen, wenn sie das Geheimnis nicht verraten. Sie schweigen."
        },
        {
          "era": "damals",
          "k": "Valinhos, 19. August 1917",
          "t": "Wieder frei, hüten sie ihre Schafe bei Valinhos, und dort begegnen sie Maria erneut. Jetzt stehst du selbst im Verhör. Antworte schnell und bleib fest."
        }
      ],
      "ch": [
        {
          "type": "quiz",
          "pool": "august",
          "count": 5,
          "time": 12,
          "title": "Das Verhör"
        }
      ]
    },
    {
      "id": "s6",
      "card": "rosenkranz",
      "leg": "Die letzten Kilometer",
      "title": "Die große Menge",
      "date": "13. September 1917",
      "scenes": [
        {
          "era": "heute",
          "k": "Kurz vor Fátima",
          "t": "Ein Kilometerstein: noch zehn. Deine Beine sind schwer, die Schritte werden kürzer. Nur der Rosenkranz in deiner Tasche wiegt nichts."
        },
        {
          "era": "damals",
          "k": "Cova da Iria, 13. September 1917",
          "t": "Eine riesige Menge drängt sich um die Kinder. Maria bittet, weiter den Rosenkranz zu beten, damit der Krieg endet. Für Oktober kündigt sie den heiligen Josef mit dem Jesuskind an."
        },
        {
          "era": "damals",
          "k": "Beten mit der Menge",
          "t": "Tausende Stimmen überlagern sich, der Rhythmus wird unruhig und schneller. Halte ihn trotzdem."
        }
      ],
      "ch": [
        {
          "type": "rosary",
          "interval": 720,
          "travel": 1350,
          "win": 90,
          "jitter": 170,
          "title": "Ein Gesätz in der Menge"
        }
      ]
    },
    {
      "id": "s7",
      "card": "sonnenwunder",
      "leg": "Ankunft in Fátima",
      "title": "Das Sonnenwunder",
      "date": "13. Oktober 1917",
      "scenes": [
        {
          "era": "heute",
          "k": "Fátima, heute",
          "t": "Die Basilika taucht zwischen den Bäumen auf. Auf dem weiten Platz rutschen Pilger auf Knien zur Erscheinungskapelle. Du stellst deinen Rucksack ab, und die Welt kippt ein letztes Mal."
        },
        {
          "era": "damals",
          "k": "Cova da Iria, 13. Oktober 1917",
          "t": "Seit Stunden regnet es. Zehntausende stehen im Schlamm. Maria nennt sich „Unsere Liebe Frau vom Rosenkranz“ und bittet um eine Kapelle an diesem Ort."
        },
        {
          "era": "damals",
          "k": "Das Wunder",
          "t": "Die Wolken reißen auf. Die Sonne scheint sich zu drehen, wechselt die Farben und scheint auf die Menge zu stürzen, dann kehrt sie an ihren Platz zurück. Die nassen Kleider sind trocken. Jetzt kommt die letzte Prüfung, und alle drei Kerzen müssen für beide Teile reichen."
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
          "pool": "oktober",
          "count": 6,
          "time": 10,
          "title": "Teil 2: Die letzte Prüfung"
        }
      ]
    }
  ]
});
