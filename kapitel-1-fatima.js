/* =====================================================================
   Pilger durch die Zeit – Kapitel 1: Fátima
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
  "begleiter": {
    "name": "Graça",
    "kurz": "Pilgerin aus Braga, 74 Jahre",
    "ab": "s2",
    "abschied": "Zum Abschied umarmt Graça dich wie eine Großmutter. „Wenn du betest, denk an Manuel und an mich. Ich denke an dich.“ Dann verschwindet ihr blaues Kopftuch in der Menge."
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
  "fragenTitel": {
    "engel": "Der Engel des Friedens",
    "mai": "Mai und Juni 1917",
    "august": "Das Verhör von Ourém",
    "oktober": "Oktober 1917"
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
      },
      {
        "q": "Wo erschien der Engel bei seinem zweiten Besuch?",
        "a": "Am Brunnen hinter Lúcias Elternhaus",
        "w": [
          "In der Pfarrkirche von Fátima",
          "In der Cova da Iria",
          "Auf dem Marktplatz von Ourém"
        ],
        "e": "Der erste und der dritte Besuch fanden an einem Felsen namens Loca do Cabeço statt."
      },
      {
        "q": "In welchem Weiler lebten die drei Kinder?",
        "a": "In Aljustrel",
        "w": [
          "In Ourém",
          "In Batalha",
          "In Leiria"
        ]
      },
      {
        "q": "Mit welchen Worten beginnt das Gebet, das der Engel die Kinder beim ersten Besuch lehrte?",
        "a": "„Mein Gott, ich glaube an dich, ich bete dich an …“",
        "w": [
          "„Gegrüßet seist du, Maria …“",
          "„Heiliger Michael, Erzengel …“",
          "„Komm, Heiliger Geist …“"
        ]
      },
      {
        "q": "Wie betete der Engel vor den Kindern?",
        "a": "Er kniete nieder und neigte die Stirn bis zur Erde",
        "w": [
          "Er stand mit weit erhobenen Armen",
          "Er saß still auf einem Felsen",
          "Er sang ein Lied auf Latein"
        ]
      },
      {
        "q": "Was sahen die Kinder beim dritten Besuch über dem Kelch?",
        "a": "Eine Hostie, aus der Blutstropfen in den Kelch fielen",
        "w": [
          "Eine weiße Taube",
          "Eine brennende Kerze",
          "Einen Kranz aus Rosen"
        ]
      },
      {
        "q": "An wen richtet sich das Gebet, das der Engel beim dritten Besuch lehrte?",
        "a": "An die Heiligste Dreifaltigkeit",
        "w": [
          "An den Erzengel Michael",
          "An den heiligen Josef",
          "An die Seelen im Fegefeuer"
        ]
      },
      {
        "q": "Wie hieß Lúcias Mutter, die den Erscheinungen lange nicht glaubte?",
        "a": "Maria Rosa",
        "w": [
          "Olímpia",
          "Maria da Conceição",
          "Teresa"
        ],
        "e": "Olímpia war die Mutter von Francisco und Jacinta."
      },
      {
        "q": "Wie beteten die Kinder den Rosenkranz manchmal, bevor der Engel kam?",
        "a": "Auf jeder Perle sagten sie nur „Gegrüßet seist du, Maria“",
        "w": [
          "Sie kannten ihn noch gar nicht",
          "Nur sonntags mit dem Pfarrer",
          "Immer vollständig auf Latein"
        ],
        "e": "So waren sie schneller wieder beim Spielen. Nach den Besuchen des Engels beteten sie ihn ganz."
      },
      {
        "q": "Was sagte der Engel als Erstes zu den Kindern?",
        "a": "„Fürchtet euch nicht!“",
        "w": [
          "„Seid gegrüßt!“",
          "„Folgt mir!“",
          "„Wer seid ihr?“"
        ]
      },
      {
        "q": "Wessen Herzen, sagte der Engel, hätten mit den Kindern „Pläne der Barmherzigkeit“?",
        "a": "Die heiligsten Herzen Jesu und Mariens",
        "w": [
          "Die Herzen ihrer Eltern",
          "Die Herzen aller Engel",
          "Das Herz des Papstes"
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
      },
      {
        "q": "Was antwortete die Frau auf Lúcias Frage, woher sie komme?",
        "a": "„Ich komme vom Himmel.“",
        "w": [
          "„Aus Jerusalem.“",
          "„Aus Lissabon.“",
          "„Das sage ich dir im Oktober.“"
        ]
      },
      {
        "q": "Was musste Francisco laut Maria tun, um in den Himmel zu kommen?",
        "a": "Viele Rosenkränze beten",
        "w": [
          "Priester werden",
          "Nach Rom pilgern",
          "Drei Tage fasten"
        ]
      },
      {
        "q": "Maria fragte, ob die Kinder bereit seien, Leiden für die Bekehrung der Sünder anzunehmen. Was antworteten sie?",
        "a": "„Ja, wir wollen.“",
        "w": [
          "Sie schwiegen",
          "Sie wollten erst ihre Eltern fragen",
          "Sie liefen davon"
        ]
      },
      {
        "q": "Wer erzählte zu Hause als Erste, dass die Kinder eine Frau gesehen hatten?",
        "a": "Jacinta",
        "w": [
          "Lúcia",
          "Francisco",
          "Ein Nachbar, der sie beobachtet hatte"
        ],
        "e": "Dabei hatten die drei vereinbart, nichts zu verraten."
      },
      {
        "q": "Was sahen die Kinder im Juni vor Marias rechter Hand?",
        "a": "Ein Herz, von Dornen umgeben",
        "w": [
          "Eine weiße Taube",
          "Einen goldenen Schlüssel",
          "Eine Lilie"
        ],
        "e": "Es war das Unbefleckte Herz Mariens, verwundet von den Sünden der Menschen."
      },
      {
        "q": "Worum bat Maria Lúcia im Juni außerdem?",
        "a": "Lesen zu lernen",
        "w": [
          "Ins Kloster einzutreten",
          "Ihre Herde zu verkaufen",
          "Nach Lissabon zu ziehen"
        ]
      },
      {
        "q": "Wofür steht die Verehrung des Unbefleckten Herzens Mariens?",
        "a": "Für Marias reine, ganz Gott zugewandte Liebe",
        "w": [
          "Für eine Reliquie in Fátima",
          "Für ein Wunder der Herzheilung",
          "Für einen portugiesischen Orden"
        ]
      },
      {
        "q": "Wie verhielt sich der Pfarrer von Fátima zunächst?",
        "a": "Er war vorsichtig und zweifelte",
        "w": [
          "Er führte sofort Prozessionen an",
          "Er ließ eine Kapelle bauen",
          "Er schrieb an den Papst"
        ],
        "e": "Er hielt es sogar für möglich, dass eine Täuschung dahinterstecke."
      },
      {
        "q": "In welche Richtung entschwand Maria am Ende der Erscheinung?",
        "a": "Nach Osten",
        "w": [
          "Nach Westen",
          "Nach Norden",
          "Nach Süden"
        ]
      },
      {
        "q": "Welcher Gedenktag wird am 13. Mai gefeiert?",
        "a": "Unsere Liebe Frau von Fátima",
        "w": [
          "Unsere Liebe Frau von Lourdes",
          "Mariä Himmelfahrt",
          "Mariä Geburt"
        ]
      },
      {
        "q": "Wie alt war Lúcia bei der ersten Erscheinung?",
        "a": "10 Jahre",
        "w": [
          "7 Jahre",
          "13 Jahre",
          "16 Jahre"
        ],
        "e": "Francisco war 8, Jacinta 7 Jahre alt."
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
      },
      {
        "q": "An welchem Festtag brachte man die Kinder aus Ourém zurück?",
        "a": "Mariä Himmelfahrt, 15. August",
        "w": [
          "Allerheiligen",
          "Fronleichnam",
          "Mariä Geburt"
        ]
      },
      {
        "q": "Welchen Beruf hatte der Administrator von Ourém?",
        "a": "Blechschmied",
        "w": [
          "Arzt",
          "Lehrer",
          "Bäcker"
        ],
        "e": "Die Leute nannten ihn deshalb „den Blechschmied“."
      },
      {
        "q": "Was taten die Kinder im Gefängnis von Ourém mit den Gefangenen?",
        "a": "Sie beteten mit ihnen den Rosenkranz",
        "w": [
          "Sie sangen Volkslieder",
          "Sie planten eine Flucht",
          "Sie schliefen den ganzen Tag"
        ]
      },
      {
        "q": "Was zeigte der erste Teil des Geheimnisses?",
        "a": "Eine Vision der Hölle",
        "w": [
          "Den Papst in Rom",
          "Den Bau der Basilika",
          "Das Ende des Krieges"
        ]
      },
      {
        "q": "Worum bat Maria im zweiten Teil des Geheimnisses unter anderem?",
        "a": "Um die Weihe Russlands an ihr Unbeflecktes Herz",
        "w": [
          "Um eine Kirche in Moskau",
          "Um einen Kreuzzug",
          "Um das Ende aller Wallfahrten"
        ]
      },
      {
        "q": "Welche Andacht kündigte Maria im Juli an?",
        "a": "Die Sühnekommunion an den ersten Samstagen",
        "w": [
          "Die Herz-Jesu-Freitage",
          "Die Maiandacht",
          "Die Pfingstnovene"
        ]
      },
      {
        "q": "Wer kommt im dritten Teil des Geheimnisses vor?",
        "a": "Ein „in Weiß gekleideter Bischof“",
        "w": [
          "Ein König auf einem Thron",
          "Ein Hirte mit seiner Herde",
          "Ein Kind in einer Krippe"
        ]
      },
      {
        "q": "Wann wurde der dritte Teil des Geheimnisses veröffentlicht?",
        "a": "Im Jahr 2000",
        "w": [
          "1917",
          "1960",
          "1981"
        ],
        "e": "Kardinal Ratzinger, der spätere Papst Benedikt XVI., schrieb dazu einen theologischen Kommentar."
      },
      {
        "q": "In welchem Jahr schrieb Lúcia den dritten Teil des Geheimnisses nieder?",
        "a": "1944",
        "w": [
          "1917",
          "1930",
          "1981"
        ],
        "e": "Sie tat es auf Anweisung ihres Bischofs."
      },
      {
        "q": "Wen schickte Lúcia am 19. August los, um Jacinta zu holen?",
        "a": "Franciscos Bruder João",
        "w": [
          "Ihren Vater",
          "Den Pfarrer",
          "Einen Nachbarsjungen aus Ourém"
        ]
      },
      {
        "q": "Was sollte laut Maria mit dem Geld geschehen, das die Leute in der Cova da Iria zurückließen?",
        "a": "Davon sollten Tragegestelle für das Rosenkranzfest gemacht werden",
        "w": [
          "Es sollte den Kindern gehören",
          "Es sollte für eine Straße verwendet werden",
          "Es sollte nach Rom geschickt werden"
        ],
        "e": "Was übrig blieb, sollte für die Kapelle bestimmt sein."
      },
      {
        "q": "Wozu ermahnte Maria die Kinder in Valinhos?",
        "a": "Viel zu beten und Opfer für die Sünder zu bringen",
        "w": [
          "Nicht mehr von den Erscheinungen zu sprechen",
          "Den Administrator anzuzeigen",
          "Nach Ourém zurückzugehen"
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
      },
      {
        "q": "Was geschah laut Augenzeugen mit den durchnässten Kleidern?",
        "a": "Sie waren plötzlich trocken",
        "w": [
          "Sie färbten sich golden",
          "Sie wurden noch nasser",
          "Sie rochen nach Rosen"
        ]
      },
      {
        "q": "Was rief Lúcia der Menge zu, als das Sonnenwunder begann?",
        "a": "Sie sollten zur Sonne schauen",
        "w": [
          "Sie sollten nach Hause gehen",
          "Sie sollten die Schirme öffnen",
          "Sie sollten still sein"
        ]
      },
      {
        "q": "In welcher Gestalt sah Lúcia Maria während des Sonnenwunders zuletzt?",
        "a": "Als Unsere Liebe Frau vom Berge Karmel",
        "w": [
          "Als Unsere Liebe Frau von Lourdes",
          "Als Königin von Polen",
          "Als Unsere Liebe Frau von Guadalupe"
        ]
      },
      {
        "q": "Was tat der heilige Josef mit dem Jesuskind in Lúcias Vision?",
        "a": "Er segnete die Welt",
        "w": [
          "Er sprach zu der Menge",
          "Er pflanzte eine Steineiche",
          "Er läutete eine Glocke"
        ]
      },
      {
        "q": "Wo sind Francisco, Jacinta und Lúcia heute begraben?",
        "a": "In der Basilika Unserer Lieben Frau vom Rosenkranz in Fátima",
        "w": [
          "Im Petersdom",
          "In der Kathedrale von Lissabon",
          "Auf dem Friedhof von Aljustrel"
        ]
      },
      {
        "q": "Welche große Kirche wurde 2007 in Fátima geweiht?",
        "a": "Die Basilika der Heiligsten Dreifaltigkeit",
        "w": [
          "Die Basilika Unserer Lieben Frau vom Rosenkranz",
          "Die Kathedrale von Leiria",
          "Die Erscheinungskapelle"
        ],
        "e": "Sie bietet fast 9.000 Menschen Platz. Die Rosenkranzbasilika wurde schon 1953 geweiht."
      },
      {
        "q": "Welcher Papst besuchte Fátima als Erster?",
        "a": "Paul VI.",
        "w": [
          "Johannes XXIII.",
          "Pius XII.",
          "Johannes Paul II."
        ],
        "e": "Am 13. Mai 1967, zum 50. Jahrestag der ersten Erscheinung."
      },
      {
        "q": "Was tat Johannes Paul II. am 25. März 1984 in Einheit mit den Bischöfen der Welt?",
        "a": "Er weihte die Welt dem Unbefleckten Herzen Mariens",
        "w": [
          "Er sprach Lúcia heilig",
          "Er reiste zum ersten Mal nach Fátima",
          "Er veröffentlichte das dritte Geheimnis"
        ]
      },
      {
        "q": "Welche beiden Länder weihte Papst Franziskus am 25. März 2022 dem Unbefleckten Herzen Mariens?",
        "a": "Russland und die Ukraine",
        "w": [
          "Portugal und Spanien",
          "Polen und Litauen",
          "Italien und Frankreich"
        ]
      },
      {
        "q": "An welchem Tag feiert die Kirche Unsere Liebe Frau vom Rosenkranz?",
        "a": "Am 7. Oktober",
        "w": [
          "Am 13. Oktober",
          "Am 8. Dezember",
          "Am 15. August"
        ]
      },
      {
        "q": "Woran erkrankten Francisco und Jacinta Ende 1918?",
        "a": "An der Spanischen Grippe",
        "w": [
          "An der Pest",
          "An den Pocken",
          "An Malaria"
        ]
      },
      {
        "q": "Was ist das Besondere an Francisco und Jacinta als Heilige?",
        "a": "Sie sind die jüngsten Heiligen, die nicht als Märtyrer starben",
        "w": [
          "Sie wurden noch zu Lebzeiten heiliggesprochen",
          "Sie sind die einzigen heiligen Geschwister",
          "Sie wurden in Rom geboren"
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
      "t": "Zweite Marienerscheinung am Fest des heiligen Antonius",
      "d": "13. Juni 1917",
      "k": 19170613
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
      "t": "Eine riesige Menge betet mit den Kindern",
      "d": "13. September 1917",
      "k": 19170913
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
      "t": "Grundsteinlegung der Rosenkranzbasilika",
      "d": "13. Mai 1928",
      "k": 19280513
    },
    {
      "t": "Der Bischof von Leiria erkennt die Erscheinungen an",
      "d": "1930",
      "k": 19301013
    },
    {
      "t": "Paul VI. besucht als erster Papst Fátima",
      "d": "13. Mai 1967",
      "k": 19670513
    },
    {
      "t": "Attentat auf Papst Johannes Paul II.",
      "d": "13. Mai 1981",
      "k": 19810513
    },
    {
      "t": "Johannes Paul II. weiht die Welt dem Unbefleckten Herzen Mariens",
      "d": "25. März 1984",
      "k": 19840325
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
      "t": "Die Basilika der Heiligsten Dreifaltigkeit wird geweiht",
      "d": "2007",
      "k": 20071012
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
      "ort": "Lissabon",
      "title": "Der Engel des Friedens",
      "date": "Frühjahr 1916",
      "jahr": 1916,
      "scenes": [
        {
          "era": "heute",
          "k": "Lissabon, heute",
          "t": "Vor der Kathedrale schnürst du die Schuhe. Blaue Pfeile auf Bordsteinen und Hauswänden weisen den Weg nach Fátima, rund 140 Kilometer nach Norden."
        },
        {
          "era": "heute",
          "k": "Am ersten Wegkreuz",
          "t": "Am Stadtrand bleibst du an einem steinernen Kreuz stehen und schließt die Augen. Der Verkehrslärm wird leiser, dann ist er ganz fort. Ein Schaf blökt. Es riecht nach nassem Gras."
        },
        {
          "era": "damals",
          "k": "Bei Aljustrel, 1916",
          "t": "Ein Hang voller Olivenbäume, das Gras noch nass. Drei Hirtenkinder hüten ihre Schafe: Lúcia und ihre Cousins Francisco und Jacinta. Plötzlich kommt ein Licht über die Bäume auf sie zu, eine Gestalt wie ein junger Mann, weiß und durchscheinend."
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
      ],
      "rueckkehr": {
        "k": "Am Wegkreuz, heute",
        "t": "Ein Lastwagen hupt, und du stehst wieder am steinernen Kreuz. Deine Knie sind kalt, als hättest du lange gekniet. „Fürchtet euch nicht“, hat der Engel gesagt. Du nimmst den Rucksack und gehst los, den blauen Pfeilen nach."
      }
    },
    {
      "id": "s2",
      "card": "lucia",
      "leg": "Entlang des Tejo",
      "ort": "Am Tejo",
      "title": "Die Frau über der Steineiche",
      "date": "13. Mai 1917",
      "jahr": 1917,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Unterwegs",
          "t": "Eine ältere Frau mit Wanderstock und blauem Kopftuch überholt dich, erstaunlich schnell. Im Vorbeigehen klopft sie dir auf den Rucksack. „Bom caminho! Langsam gehen, dann kommt man an.“ Sie lacht, und bald ist sie hinter der nächsten Biegung verschwunden."
        },
        {
          "era": "heute",
          "k": "Am Tejo",
          "t": "Der Weg folgt dem Fluss nach Norden, zwischen Feldern und Lagerhallen. Am Mittag sind die ersten Blasen da. Du zählst die Perlen deines Rosenkranzes statt der Kilometer. Bei der zehnten Perle verstummt das Rauschen des Flusses, und die Perlen fühlen sich plötzlich an wie grob geschnitztes Holz."
        },
        {
          "era": "damals",
          "k": "Cova da Iria, 13. Mai 1917",
          "t": "Mittag in einer Senke voller Steineichen. Die Kinder haben gerade den Rosenkranz gebetet und bauen zum Spiel eine kleine Mauer aus Steinen. Da zuckt ein Blitz über den klaren Himmel. Sie fürchten ein Gewitter und treiben die Herde zusammen. Da sehen sie über einer kleinen Steineiche eine Frau, heller als die Sonne."
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
      ],
      "rueckkehr": {
        "k": "Am Tejo, heute",
        "t": "Deine Finger liegen noch auf der zehnten Perle. Der Fluss rauscht wieder, irgendwo bellt ein Hund. „Jeden Tag den Rosenkranz“, hat sie gesagt. Du betest das Gesätz zu Ende und stehst auf. Die Blasen spürst du kaum noch."
      }
    },
    {
      "id": "s3",
      "card": "francisco",
      "leg": "Santarém",
      "ort": "Santarém",
      "title": "Das Unbefleckte Herz",
      "date": "13. Juni 1917",
      "jahr": 1917,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Santarém, heute",
          "t": "Die Stadt thront auf einem Hügel über dem Tejo. In der Pilgerherberge sitzt die Frau mit dem blauen Kopftuch wieder vor dir. Sie heißt Graça, kommt aus Braga und geht den Weg zum zwölften Mal. Sie teilt ihr Brot mit dir und fragt, warum du gehst. Bevor du antworten kannst, läuten draußen die Glocken. Du zählst die Schläge, und der letzte klingt fern und hell, wie aus einem Dorf an einem Festtag."
        },
        {
          "era": "damals",
          "k": "Cova da Iria, 13. Juni 1917",
          "t": "Drüben im Dorf feiert man den heiligen Antonius. Trotzdem ist eine kleine Gruppe mit den Kindern gekommen. Sie beten gemeinsam den Rosenkranz und sehen, wie die Kinder gebannt zur Steineiche blicken."
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
      ],
      "rueckkehr": {
        "k": "Santarém, heute",
        "t": "Die Glocken sind verklungen. Graça sieht dich noch immer fragend an. Du erzählst ihr von einem Herzen, umgeben von Dornen, und dass du noch nicht ganz weißt, warum du gehst, aber dass du weitergehen willst. Sie lächelt und schiebt dir das letzte Stück Brot hin."
      }
    },
    {
      "id": "s4",
      "card": "jacinta",
      "leg": "Durch den Ribatejo",
      "ort": "Ribatejo",
      "title": "Das Geheimnis",
      "date": "13. Juli 1917",
      "jahr": 1917,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Ein Stück gemeinsam",
          "t": "Am Vormittag holst du Graça ein. Sie geht langsamer als gestern und reicht dir ihre Wasserflasche. „Elfmal bin ich diesen Weg mit Manuel gegangen, meinem Mann. Im Winter ist er gestorben.“ Sie schaut über die Felder. „Diesmal gehe ich für uns beide.“"
        },
        {
          "era": "heute",
          "k": "Ribatejo, heute",
          "t": "Korkeichen, Staub, kaum Schatten. Das Wasser in deiner Flasche ist warm geworden. Du betest für jeden Menschen, der dir heute begegnet ist, und es sind mehr, als du dachtest. Im Schatten einer Korkeiche setzt du dich. Die Hitze flimmert über dem Feld, und als du blinzelst, flimmert sie über einer Senke voller Menschen."
        },
        {
          "era": "damals",
          "k": "Cova da Iria, 13. Juli 1917",
          "t": "Viele Menschen sind trotz der Sommerhitze gekommen und drängen sich um die Steineiche. Maria zeigt den Kindern ein Geheimnis in drei Teilen. Was sie sehen, erschüttert vor allem Jacinta. Von nun an bringt sie Opfer für die Sünder."
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
      ],
      "rueckkehr": {
        "k": "Ribatejo, heute",
        "t": "Die Flasche in deiner Hand ist leer. Ein Traktor zieht eine Staubwolke über das Feld. Du denkst an Jacinta, die so klein war und so viel für andere getragen hat. Für den Rest des Tages klagst du nicht mehr über die Hitze."
      }
    },
    {
      "id": "s5",
      "card": "valinhos",
      "leg": "In die Serra de Aire",
      "ort": "Serra de Aire",
      "title": "Standhaft in Ourém",
      "date": "August 1917",
      "jahr": 1917,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Am Wegkreuz",
          "t": "Am Morgen bleibt Graça an einem Wegkreuz stehen und atmet schwer. Du nimmst ihr den Rucksack ab, und sie protestiert nur ein bisschen. Aus der Jackentasche zieht sie einen abgegriffenen Rosenkranz aus Holz. „Seiner. An jedem Anstieg hat er ein Gesätz gebetet. Für die Steigung, hat er gesagt. Heute bete ich sie.“"
        },
        {
          "era": "heute",
          "k": "Serra de Aire, heute",
          "t": "Der Weg steigt an. Kalkstein, niedrige Mauern, Wind. Ein Hund begleitet dich ein Stück und verschwindet dann zwischen den Oliven. Oben auf dem Hügel steht die alte Burg von Ourém. Als du hinaufschaust, rumpelt hinter dir ein Fuhrwerk über die Steine, doch auf der Straße ist niemand."
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
      ],
      "rueckkehr": {
        "k": "Serra de Aire, heute",
        "t": "Der Wind ist wieder da, und der Hund sitzt neben dir, als hätte er gewartet. Graça nimmt ihren Rucksack zurück und hält Manuels Rosenkranz fest in der Hand. Drei Kinder haben geschwiegen, obwohl man ihnen mit dem Tod drohte. Ihr geht weiter, und der Anstieg kommt dir kürzer vor."
      }
    },
    {
      "id": "s6",
      "card": "rosenkranz",
      "leg": "Die letzten Kilometer",
      "ort": "Kurz vor Fátima",
      "title": "Die große Menge",
      "date": "13. September 1917",
      "jahr": 1917,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Kurz vor Fátima",
          "t": "Ein Kilometerstein: noch zehn. Deine Beine sind schwer, die Schritte werden kürzer. Nur der Rosenkranz in deiner Tasche wiegt nichts. Von hinten kommt eine Gruppe Pilger, sie beten laut. Graça winkt dich zu sich: „Komm, zusammen trägt es sich leichter.“ Du reihst dich ein. Die Stimmen werden mehr und mehr, bis es Tausende sind."
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
      ],
      "rueckkehr": {
        "k": "Kurz vor Fátima, heute",
        "t": "Die Gruppe ist weitergezogen, ihr Gebet hörst du noch von fern. Am Wegrand steht ein Kilometerstein: noch fünf. Du nimmst den Rosenkranz aus der Tasche und gehst betend weiter, im Rhythmus deiner Schritte."
      }
    },
    {
      "id": "s7",
      "card": "sonnenwunder",
      "leg": "Ankunft in Fátima",
      "ort": "Fátima",
      "title": "Das Sonnenwunder",
      "date": "13. Oktober 1917",
      "jahr": 1917,
      "scenes": [
        {
          "era": "heute",
          "who": "begleiter",
          "k": "Fátima, heute",
          "t": "Die Basilika taucht zwischen den Bäumen auf. Auf dem weiten Platz rutschen Pilger auf Knien zur Erscheinungskapelle, unter ihnen Graça, Manuels Rosenkranz in der Hand. Ein paar Regentropfen fallen. Du stellst deinen Rucksack ab, und die Welt kippt ein letztes Mal."
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
      ],
      "rueckkehr": {
        "k": "Fátima, heute",
        "t": "Der Regen hat aufgehört, die Sonne steht ruhig am Himmel. Du kniest vor der Erscheinungskapelle, dort, wo die kleine Steineiche stand. Neben dir zündet Graça zwei Kerzen an, eine für Manuel und eine für dich. Rund 140 Kilometer liegen hinter dir. Du dankst für jeden Schritt, für die drei Kinder, die dir den Weg gezeigt haben, und für die Frau, die ihn mit dir gegangen ist."
      }
    }
  ]
});
