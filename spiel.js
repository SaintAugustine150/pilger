/* Pilger durch die Zeit – Spielcode. Texte stehen in den kapitel-Dateien. */
(function(){
"use strict";
var app=document.getElementById('app');
var reduceMotion=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
var KEY='pilger-durch-die-zeit-v1';
var CANDLES=3;

/* ---------- Speicher ---------- */
function load(){try{var r=localStorage.getItem(KEY);if(r){var s=JSON.parse(r);if(s&&s.stages&&s.cards)return s;}}catch(e){}return {stages:{},cards:{}};}
var S=load();
function save(){
  var j=JSON.stringify(S);
  try{localStorage.setItem(KEY,j);}catch(e){}
  try{if(window.storage&&window.storage.set){var p=window.storage.set(KEY,j,false);if(p&&p.catch)p.catch(function(){});}}catch(e){}
}

/* ---------- Hilfen ---------- */
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
var stopFns=[];
function stopAll(){stopFns.forEach(function(f){try{f();}catch(e){}});stopFns=[];}
function render(html){stopAll();app.innerHTML=html;window.scrollTo(0,0);}

/* ---------- Symbole ---------- */
function starPath(cx,cy,R,r){var p='';for(var i=0;i<10;i++){var a=-Math.PI/2+i*Math.PI/5;var rad=i%2?r:R;p+=(i?'L':'M')+(cx+rad*Math.cos(a)).toFixed(1)+' '+(cy+rad*Math.sin(a)).toFixed(1);}return p+'Z';}
function rosaryIcon(){var s='';for(var i=0;i<16;i++){if(i===8)continue;var a=-Math.PI/2+i*Math.PI/8;var x=50+24*Math.cos(a),y=40+24*Math.sin(a);s+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="3.4" fill="currentColor" stroke="none"/>';}
  return s+'<circle cx="50" cy="64" r="4"/><path d="M50 68 L50 94 M42 78 L58 78"/>';}
function sunIcon(){var s='<circle cx="50" cy="50" r="14"/>';for(var i=0;i<16;i++){var a=i*Math.PI/8;var r1=20,r2=i%2?30:36;s+='<path d="M'+(50+r1*Math.cos(a)).toFixed(1)+' '+(50+r1*Math.sin(a)).toFixed(1)+' L'+(50+r2*Math.cos(a+.12)).toFixed(1)+' '+(50+r2*Math.sin(a+.12)).toFixed(1)+'"/>';}return s;}
var ICONS={
  engel:'<circle cx="50" cy="22" r="8"/><path d="M50 38 C40 26 22 22 10 28 C18 32 22 38 26 45 C18 46 12 51 10 57 C24 54 38 54 50 52"/><path d="M50 38 C60 26 78 22 90 28 C82 32 78 38 74 45 C82 46 88 51 90 57 C76 54 62 54 50 52"/><path d="M44 52 L38 88 L62 88 L56 52"/>',
  lucia:'<path d="M14 32 L50 40 L86 32 L86 74 L50 82 L14 74 Z"/><path d="M50 40 L50 82"/><path d="M23 44 L42 48 M23 54 L42 58 M23 64 L42 68 M58 48 L77 44 M58 58 L77 54"/>',
  francisco:'<path d="M50 12 C58 22 57 31 50 34 C43 31 42 22 50 12 Z"/><path d="M50 26 L50 34"/><rect x="42" y="40" width="16" height="40" rx="2"/><path d="M30 88 L70 88 M36 81 L64 81"/>',
  jacinta:'<path d="M50 86 C22 66 14 48 25 37 C34 29 45 33 50 42 C55 33 66 29 75 37 C86 48 78 66 50 86 Z"/><path d="M50 12 C56 20 55 26 50 29 C45 26 44 20 50 12 Z"/>',
  valinhos:'<path d="M6 74 C24 56 38 58 50 66 C62 54 78 54 94 66"/><path d="M30 60 L30 46"/><circle cx="30" cy="37" r="10"/><path d="M70 56 L70 32 M62 40 L78 40"/><path d="M14 86 C34 80 60 80 86 86"/>',
  rosenkranz:rosaryIcon(),
  sonnenwunder:sunIcon(),
  capelinha:'<path d="M22 86 L22 50 L50 30 L78 50 L78 86 Z"/><path d="M50 30 L50 12 M43 19 L57 19"/><path d="M41 86 L41 64 A9 9 0 0 1 59 64 L59 86"/><path d="M12 86 L88 86"/>',
  fatima:'<path d="M22 58 L26 30 L39 45 L50 22 L61 45 L74 30 L78 58 Z"/><path d="M22 67 L78 67"/><path d="'+starPath(50,84,10,4.2)+'"/>'
};
var STONE_SVG='<svg class="stone" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16 C3 11 7 6 12 6 C18 6 21 10 20 15 C19.5 18 16 19.5 11.5 19.5 C7 19.5 4.5 18.5 4 16Z"/></svg>';
function stonesTxt(n){return n===1?'1 Pilgerstein':n+' Pilgersteine';}

/* ---------- Bilder (werden später eingefügt) ----------
   Schlüssel: 'aussen' für die Außenansicht, sonst '<raum>-<stufe>', z. B. 'kapelle-0' (Ruine) bis 'kapelle-3' (vollendet). */
/* Bilder: werden in bilder.js aufgelistet */
var IMG={},CIMG={};
((window.BILDER&&window.BILDER.kathedrale)||[]).forEach(function(k){IMG[k]=k+'.webp';});
((window.BILDER&&window.BILDER.karten)||[]).forEach(function(id){CIMG[id]='karte-'+id+'.webp';});

var CARD_ICON='<svg class="cico" viewBox="0 0 16 20" aria-hidden="true"><rect x="1" y="1" width="14" height="18" rx="2"/><path d="M4.5 7 H11.5 M4.5 10 H11.5"/></svg>';
function hud(){
  var n=CARD_ORDER.filter(function(id){return S.cards[id];}).length;
  return '<div class="hud"><div class="hud-in"><span class="hud-t">Pilger durch die Zeit</span>'+
    '<span class="chip" aria-label="'+stonesTxt(S.stones||0)+'">'+STONE_SVG+'<span>'+(S.stones||0)+'</span></span>'+
    '<span class="chip" aria-label="'+n+' von '+CARD_ORDER.length+' Karten">'+CARD_ICON+'<span>'+n+'/'+CARD_ORDER.length+'</span></span></div></div>';
}

/* Rosettenfenster */
function pol(r,a){return (60+r*Math.sin(a)).toFixed(1)+' '+(60-r*Math.cos(a)).toFixed(1);}
function roseSVG(){
  var cols=['#2A5FB3','#A63A2E','#D9AE55','#2E7D67'],s='';
  for(var i=0;i<12;i++){
    var a=i*Math.PI/6;
    s+='<path fill="'+cols[i%4]+'" d="M'+pol(16,a-.2)+' L'+pol(38,a-.22)+' Q'+pol(57,a)+' '+pol(38,a+.22)+' L'+pol(16,a+.2)+' Z"/>';
    s+='<circle fill="'+cols[(i+2)%4]+'" cx="'+pol(47,a+Math.PI/12).split(' ')[0]+'" cy="'+pol(47,a+Math.PI/12).split(' ')[1]+'" r="4.6"/>';
  }
  s+='<circle fill="#D9AE55" cx="60" cy="60" r="13"/><path fill="#F7E9BD" stroke="none" d="'+starPath(60,60,9,4)+'"/>';
  return '<svg class="rose" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="57" fill="#141A28"/>'+
    '<g class="glass" stroke="#141A28" stroke-width="2" stroke-linejoin="round">'+s+'</g>'+
    '<circle cx="60" cy="60" r="56" fill="none" stroke="#9A917F" stroke-width="5"/><circle cx="60" cy="60" r="58.5" fill="none" stroke="#5E5748" stroke-width="1"/></svg>';
}

/* Klang: synthetisch, ohne Audiodateien */
var AC=null;
function audio(){
  if(S.snd===false)return null;
  try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();return AC;}catch(e){return null;}
}
function bell(f,dur,vol){
  var a=audio();if(!a)return;
  var t=a.currentTime,m=a.createGain();m.gain.value=vol||.14;m.connect(a.destination);
  [[.5,.5],[1,1],[1.19,.5],[1.5,.35],[2,.45],[2.74,.22],[3.76,.12]].forEach(function(p){
    var o=a.createOscillator(),g=a.createGain(),end=t+dur*(p[0]<1?1.4:1/Math.sqrt(p[0]));
    o.type='sine';o.frequency.value=f*p[0];
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(p[1],t+.01);g.gain.exponentialRampToValueAtTime(.0001,end);
    o.connect(g);g.connect(m);o.start(t);o.stop(end+.05);
  });
}
function chime(gold){
  var a=audio();if(!a)return;
  (gold?[659.25,783.99,987.77,1318.5]:[587.33,739.99,880]).forEach(function(f,i){
    var t=a.currentTime+i*.09,o=a.createOscillator(),g=a.createGain();
    o.type='triangle';o.frequency.value=f;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.1,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+1.2);
    o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+1.3);
  });
}

/* Funken und Lichtschein */
function sparks(host,n,gold){
  if(reduceMotion)return;
  for(var i=0;i<n;i++){
    var sp=document.createElement('i'),a=Math.random()*Math.PI*2,d=70+Math.random()*100;
    sp.className='spark'+(gold?' g':'');
    sp.style.setProperty('--dx',Math.round(Math.cos(a)*d)+'px');
    sp.style.setProperty('--dy',Math.round(Math.sin(a)*d)+'px');
    sp.style.animationDelay=(Math.random()*.25).toFixed(2)+'s';
    host.appendChild(sp);
  }
  setTimeout(function(){host.querySelectorAll('.spark').forEach(function(x){x.remove();});},1700);
}
function celebrate(big){
  bell(big?196:392,big?4.5:2.6);
  if(reduceMotion)return;
  var b=document.createElement('div');b.className='burst';document.body.appendChild(b);
  sparks(b,big?34:18,big);
  setTimeout(function(){b.remove();},1800);
}


/* ---------- Karten ---------- */
var RAR=['','Gewöhnlich','Selten','Legendär'];
var CARDS={};
var CARD_ORDER=['engel','lucia','francisco','jacinta','valinhos','rosenkranz','sonnenwunder','capelinha','fatima'];

function cardHTML(id,variant,size){
  var c=CARDS[id],gold=variant==='gold';
  return '<div class="card '+(gold?'gold ':'')+(size||'')+'"><div class="card-in">'+
    (CIMG[id]?'<div class="card-art img"><img src="'+CIMG[id]+'" alt=""></div>':'<div class="card-art"><svg viewBox="0 0 100 100" aria-hidden="true">'+ICONS[id]+'</svg></div>')+
    '<div class="card-name">'+esc(c.name)+'</div><div class="card-sub">'+esc(c.sub)+'</div>'+
    (size==='lg'?'<p class="card-text">'+esc(c.text)+'</p>':'')+
    '<div class="card-rar">'+'◆'.repeat(c.rar)+' '+RAR[c.rar]+(gold?', Gold':'')+'</div>'+
  '</div></div>';
}

var POOLS={};

var STAGES=[];

/* ---------- Symbole für Kapitel 2 ---------- */
function procIcon(){var s='';[28,50,72].forEach(function(x){s+='<path d="M'+x+' 20 C'+(x+6)+' 28 '+(x+5)+' 34 '+x+' 36 C'+(x-5)+' 34 '+(x-6)+' 28 '+x+' 20 Z"/><rect x="'+(x-5)+'" y="42" width="10" height="38" rx="2"/>';});return s+'<path d="M14 88 L86 88"/>';}
function starsIcon(){var s='';for(var i=0;i<12;i++){var a=-Math.PI/2+i*Math.PI/6;s+='<path fill="currentColor" stroke="none" d="'+starPath(50+36*Math.cos(a),50+36*Math.sin(a),4.4,1.9)+'"/>';}
  return s+'<path d="M50 74 L50 44 M50 44 C44 38 42 30 50 22 C58 30 56 38 50 44 M50 52 C42 50 36 44 36 36 M50 52 C58 50 64 44 64 36"/>';}
ICONS.bernadette='<path d="M30 52 C30 24 70 24 70 52 L76 64 L24 64 Z"/><circle cx="50" cy="48" r="11"/><path d="M34 64 L28 90 L72 90 L66 64"/><path d="M46 74 L54 74 M50 70 L50 82"/>';
ICONS.massabielle='<path d="M8 88 C10 50 26 20 50 18 C74 20 90 50 92 88"/><path d="M60 38 C60 30 74 30 74 38 L74 54 L60 54 Z"/><path d="M8 88 L92 88"/><path d="M18 80 C28 76 38 82 50 78 C62 82 72 76 84 80"/>';
ICONS.rosen='<path d="M50 28 C62 28 66 42 56 46 C46 50 40 40 48 36 C54 33 56 40 52 42"/><path d="M36 38 C34 54 44 60 50 60 C60 60 68 52 64 38"/><path d="M50 60 L50 92 M50 76 C40 70 34 72 30 78 C38 80 44 80 50 76 M50 70 C58 64 66 66 70 72 C62 74 56 74 50 70"/>';
ICONS.quelle='<path d="M50 12 C62 30 68 40 68 50 A18 18 0 0 1 32 50 C32 40 38 30 50 12 Z"/><path d="M14 78 C24 72 34 84 44 78 C54 72 64 84 74 78 C80 74 84 76 88 78"/><path d="M14 90 C24 84 34 96 44 90 C54 84 64 96 74 90"/>';
ICONS.prozession=procIcon();
ICONS.unbefleckte=starsIcon();
ICONS.juli='<path d="M10 64 C22 58 34 70 46 64 C58 58 70 70 82 64 C86 62 90 62 92 64"/><path d="M10 76 C22 70 34 82 46 76 C58 70 70 82 82 76"/><path d="M28 50 C30 32 40 22 54 22 C68 22 76 34 78 50 Z"/><path fill="currentColor" stroke="none" d="'+starPath(54,36,7,2.9)+'"/>';
ICONS.basilika='<path d="M30 88 L30 50 L50 34 L70 50 L70 88 Z"/><path d="M50 34 L50 8 M44 16 L56 16"/><path d="M44 88 L44 70 A6 6 0 0 1 56 70 L56 88"/><path d="M16 88 L84 88"/><path d="M40 56 A10 10 0 0 1 60 56"/>';
ICONS.lourdes='<path d="M50 12 C62 12 66 22 66 32 L72 88 L28 88 L34 32 C34 22 38 12 50 12 Z"/><circle cx="50" cy="30" r="8"/><path d="M38 56 L62 56 M58 56 L62 76"/><path d="M45 44 L50 50 L55 44"/>';

/* ---------- Kapitel ---------- */
var CHAPTERS=(window.KAPITEL||[]).slice().sort(function(a,b){return a.n-b.n;});
CHAPTERS.forEach(function(c){
  Object.keys(c.karten).forEach(function(k){CARDS[k]=c.karten[k];});
  Object.keys(c.fragen).forEach(function(k){POOLS[k]=c.fragen[k];});
  c.etappen.forEach(function(st){st.chap=c.id;STAGES.push(st);});
});
var CH={};CHAPTERS.forEach(function(c){CH[c.id]=c;});
function stagesOf(cid){var a=[];STAGES.forEach(function(st,i){if(st.chap===cid)a.push(i);});return a;}
function cardsOf(c){return stagesOf(c.id).map(function(i){return STAGES[i].card;}).concat([c.bonusAll,c.bonusGold]);}
CARD_ORDER=[];CHAPTERS.forEach(function(c){CARD_ORDER=CARD_ORDER.concat(cardsOf(c));});
function chapterDone(cid){return stagesOf(cid).every(function(i){var x=S.stages[STAGES[i].id];return x&&x.done;});}
function chapterGold(cid){return stagesOf(cid).every(function(i){var x=S.stages[STAGES[i].id];return x&&x.gold;});}
function chapterOpen(c){var k=CHAPTERS.indexOf(c);return k===0||chapterDone(CHAPTERS[k-1].id);}
function currentChapter(){var cur=CHAPTERS[0].id;CHAPTERS.forEach(function(c){if(chapterOpen(c))cur=c.id;});
  for(var k=0;k<CHAPTERS.length;k++){if(chapterOpen(CHAPTERS[k])&&!chapterDone(CHAPTERS[k].id))return CHAPTERS[k].id;}return cur;}

function stageState(i){
  var st=S.stages[STAGES[i].id];
  if(st&&st.done)return st.gold?'gold':'done';
  var list=stagesOf(STAGES[i].chap),pos=list.indexOf(i);
  if(pos===0)return chapterOpen(CH[STAGES[i].chap])?'open':'locked';
  var pr=S.stages[STAGES[list[pos-1]].id];
  return pr&&pr.done?'open':'locked';
}

/* ---------- Kathedrale: Daten ---------- */
var ROOMS=[
  {id:'schiff',name:'Kirchenschiff',art:'Das',
   ruin:'Das Dach ist eingestürzt, zwischen den Bodenplatten wächst Gras. Durch die leeren Fensterbögen pfeift der Wind.',
   steps:[
    {t:'Mauern sichern',d:'Die Risse im Mauerwerk sind geschlossen, die Pfeiler stehen wieder fest. Am Hochaltar liegt ein schlichtes Tuch.',cost:3},
    {t:'Gewölbe schließen',d:'Über Schiff und Querhaus spannt sich wieder das Gewölbe. Zum ersten Mal seit Jahren ist es drinnen still und trocken.',cost:5},
    {t:'Fenster einsetzen',d:'Buntglas füllt die hohen Fenster, farbiges Licht fällt auf die neuen Bänke. Das Kirchenschiff ist vollendet.',cost:6,card:'basilika'}
   ],
   prayer:{t:'Vater unser',x:'Vater unser im Himmel,\ngeheiligt werde dein Name.\nDein Reich komme.\nDein Wille geschehe,\nwie im Himmel so auf Erden.\nUnser tägliches Brot gib uns heute.\nUnd vergib uns unsere Schuld,\nwie auch wir vergeben unsern Schuldigern.\nUnd führe uns nicht in Versuchung,\nsondern erlöse uns von dem Bösen.\nAmen.',n:'Das Gebet, das Jesus selbst seine Jünger gelehrt hat.'}},
  {id:'kapelle',name:'Marienkapelle',art:'Die',
   ruin:'Eine kleine Apsis neben dem Chor, von Efeu überwuchert. Der Altar ist leer, in der Nische darüber fehlt die Statue.',
   steps:[
    {t:'Kapelle wiederaufbauen',d:'Die Wände sind neu gekalkt, der Altar steht wieder. Die Nische darüber wartet noch.',cost:5},
    {t:'Statue aufstellen',d:'In der Nische steht eine Statue Unserer Lieben Frau von Fátima, nach dem Vorbild der Erscheinungskapelle.',cost:4,card:'capelinha'},
    {t:'Krone aufsetzen',d:'Die Statue trägt ihre Krone. Vor ihr brennen Kerzen. Die Kapelle ist vollendet.',cost:3,card:'fatima'}
   ],
   prayer:{t:'Das Gebet von Fátima',x:'O mein Jesus, verzeih uns unsere Sünden,\nbewahre uns vor dem Feuer der Hölle,\nführe alle Seelen in den Himmel,\nbesonders jene, die deiner Barmherzigkeit am meisten bedürfen.',n:'Maria lehrte es die Kinder am 13. Juli 1917. Es wird nach jedem Gesätz des Rosenkranzes gebetet.'}},
  {id:'garten',name:'Klostergarten',art:'Der',
   ruin:'Brombeeren und Schutt bedecken den Innenhof des Kreuzgangs. Unter dem Gestrüpp ahnt man die alten Wege, in der Mitte einen trockenen Brunnen.',
   steps:[
    {t:'Wege freilegen',d:'Die steinernen Wege sind frei. Sie kreuzen sich in der Mitte des Gartens am alten Brunnen.',cost:3,n:3},
    {t:'Beete und Brunnen',d:'Die Beete sind neu bepflanzt, und der Brunnen gibt wieder Wasser.',cost:5,n:6},
    {t:'Kreuzgang vollenden',d:'Rosen ranken an den Bögen des Kreuzgangs. Der Garten ist ein Ort zum Beten geworden.',cost:6,n:8}
   ],
   prayer:{t:'Gegrüßet seist du, Maria',x:'Gegrüßet seist du, Maria, voll der Gnade,\nder Herr ist mit dir.\nDu bist gebenedeit unter den Frauen,\nund gebenedeit ist die Frucht deines Leibes, Jesus.\nHeilige Maria, Mutter Gottes,\nbitte für uns Sünder\njetzt und in der Stunde unseres Todes.\nAmen.',n:'Im Kreuzgang betet man den Rosenkranz im Gehen, Perle für Perle, Bogen für Bogen.'}},
  {id:'grotte',name:'Lourdes-Grotte',art:'Die',
   ruin:'Ein Felsen am Rand des Gartens, halb verschüttet. Einst stand hier eine Nachbildung der Grotte von Massabielle.',
   steps:[
    {t:'Felsen freilegen',d:'Schutt und Gestrüpp sind fort. Der Felsen steht frei, und oben rechts öffnet sich eine kleine Nische, wie in Massabielle.',cost:4},
    {t:'Quelle fassen',d:'Aus einem Spalt am Fuß des Felsens rinnt Wasser. Ein steinernes Becken fängt es auf.',cost:5,card:'quelle'},
    {t:'Statue aufstellen',d:'In der Nische steht die Dame in Weiß mit dem blauen Gürtel. Davor brennen Kerzen auf einem eisernen Ständer. Die Grotte ist vollendet.',cost:4,card:'lourdes'}
   ],
   prayer:{t:'O Maria, ohne Sünde empfangen',x:'O Maria, ohne Sünde empfangen,\nbitte für uns,\ndie wir zu dir unsere Zuflucht nehmen.',n:'Ein Stoßgebet zur Unbefleckten Empfängnis. So nannte sich die Dame von Lourdes am 25. März 1858.'}},
  {id:'taufe',name:'Taufkapelle',future:'in einem späteren Kapitel',ruin:'Ein achteckiger Bau nahe dem Eingang. Das Taufbecken ist gesprungen und voller Laub.'},
  {id:'turm',name:'Glockenturm',future:'in einem späteren Kapitel',ruin:'Der Turm steht noch, aber die Treppe ist eingebrochen. Die Glocke liegt zerbrochen im Gras.'},
  {id:'sakristei',name:'Sakristei',future:'in einem späteren Kapitel',ruin:'Die Tür hängt schief in den Angeln. In den Schränken liegen verblichene Messgewänder.'}
];
var ROOM={};ROOMS.forEach(function(r){ROOM[r.id]=r;});
var STATE_LABEL={ruin:'Ruine',future:'Ruine',aufbau:'Im Aufbau',vollendet:'Vollendet'};

var SHAPES={
  garten:{d:'M240 200 L340 200 L340 370 L240 370 Z',lx:290,ly:390,cr:['M250 214 L262 232 L256 246','M328 318 L316 336 L322 350']},
  schiff:{d:'M140 130 L140 80 A40 40 0 0 1 220 80 L220 130 L300 130 L300 190 L230 190 L230 400 L130 400 L130 190 L60 190 L60 130 Z',lx:180,ly:304,inside:true,
    cr:['M148 214 L160 232 L154 246 L168 262','M214 332 L204 348 L214 364','M72 140 L84 156 L78 170','M262 142 L274 160 L268 174','M168 88 L178 100 L172 112']},
  kapelle:{d:'M80 130 L80 100 A20 20 0 0 1 120 100 L120 130 Z',lx:100,ly:72,cr:['M92 106 L100 116 L95 126']},
  sakristei:{d:'M240 90 L290 90 L290 130 L240 130 Z',lx:265,ly:114,inside:true,sm:true,cr:['M246 96 L256 104']},
  turm:{d:'M95 360 L130 360 L130 405 L95 405 Z',lx:112,ly:421,cr:['M104 366 L112 380 L106 394']},
  taufe:{d:'M115.3 253.4 L103.4 265.3 L86.6 265.3 L74.7 253.4 L74.7 236.6 L86.6 224.7 L103.4 224.7 L115.3 236.6 Z',lx:95,ly:283,cr:['M88 234 L96 246 L91 258']},
  grotte:{d:'M15 360 C15 322 30 305 45 305 C62 305 75 322 75 360 Z',lx:45,ly:377,cr:['M38 318 L46 334 L40 348']}
};

/* ---------- Kathedrale: Logik ---------- */
function lvl(id){return (S.cath&&S.cath[id])||0;}
function roomState(r){
  if(r.future)return 'future';
  var l=lvl(r.id);
  if(!l)return 'ruin';
  if(l>=r.steps.length)return 'vollendet';
  return 'aufbau';
}
function cardCount(){return CARD_ORDER.filter(function(id){return S.cards[id];}).length;}
function reqs(step){
  var a=[];
  if(step.cost)a.push({t:stonesTxt(step.cost)+' (du hast '+S.stones+')',ok:S.stones>=step.cost});
  if(step.card)a.push({t:'Karte „'+CARDS[step.card].name+'“',ok:!!S.cards[step.card]});
  if(step.n)a.push({t:step.n+' Karten im Album (du hast '+cardCount()+')',ok:cardCount()>=step.n});
  return a;
}
function canBuild(r){
  if(r.future)return false;
  var step=r.steps[lvl(r.id)];
  if(!step||step.chapter)return false;
  return reqs(step).every(function(x){return x.ok;});
}
function migrate(){
  if(!S.cath)S.cath={};
  if(typeof S.stones!=='number'){
    var n=0;
    STAGES.forEach(function(st){var x=S.stages[st.id];if(x&&x.done)n+=1+(x.gold?3:0);});
    S.stones=n;if(n>0)S.retro=n;
    save();
  }
}

/* ---------- Kathedrale: Grundriss ---------- */
function deco(id,l){
  var s='',y;
  if(id==='schiff'){
    if(l>=1)s+='<rect class="solid" x="168" y="64" width="24" height="9" rx="1.5"/>';
    if(l>=2){
      var d='M60 130 L130 190 M130 130 L60 190 M130 130 L230 190 M230 130 L130 190 M230 130 L300 190 M300 130 L230 190 M180 100 L145 74 M180 100 L180 42 M180 100 L215 74 M140 100 L220 100';
      for(y=190;y<400;y+=42)d+=' M130 '+y+' L230 '+(y+42)+' M230 '+y+' L130 '+(y+42);
      s+='<path class="rib" d="'+d+'"/>';
    }
  }else if(id==='kapelle'){
    if(l>=1)s+='<rect class="solid" x="93" y="112" width="14" height="5" rx="1"/>';
    if(l>=2)s+='<path class="solid" d="'+starPath(100,99,6.5,2.8)+'"/>';
    if(l>=3)s+='<circle class="flower" cx="88" cy="123" r="2.2"/><circle class="flower" cx="112" cy="123" r="2.2"/>';
    if(l>=3){var gd='';for(y=211;y<400;y+=42){gd+='<circle class="glassdot gl'+((y/42|0)%2+1)+'" cx="133.5" cy="'+y+'" r="2.6"/><circle class="glassdot gl'+((y/42|0)%2?1:2)+'" cx="226.5" cy="'+y+'" r="2.6"/>';}s+=gd;}
  }else if(id==='grotte'){
    if(l>=1)s+='<path class="rib" d="M40 332 C40 322 52 322 52 332 L52 342 L40 342 Z"/>';
    if(l>=2)s+='<ellipse class="water" cx="45" cy="354" rx="14" ry="3.2"/>';
    if(l>=3)s+='<path class="solid" d="'+starPath(46,334,5,2.1)+'"/>';
  }else if(id==='garten'){
    if(l>=1)s+='<rect class="inner" x="258" y="218" width="64" height="134"/><path class="rib" d="M290 218 L290 352 M258 285 L322 285"/>';
    if(l>=2){
      var q=[[274,251],[306,251],[274,319],[306,319]],o=[[-7,-9],[5,-5],[-2,5],[7,10],[-8,4],[2,-14],[-4,14]];
      q.forEach(function(c){o.forEach(function(p){s+='<circle class="flower" cx="'+(c[0]+p[0])+'" cy="'+(c[1]+p[1])+'" r="1.8"/>';});});
      s+='<circle class="water" cx="290" cy="285" r="8"/>';
    }
  }
  return s?'<g class="deco">'+s+'</g>':'';
}
function planSVG(){
  var order=['garten','grotte','taufe','turm','sakristei','schiff','kapelle'];
  var g=order.map(function(id){
    var r=ROOM[id],sh=SHAPES[id],st=roomState(r),l=lvl(id);
    var cracks=(st==='ruin'||st==='future')?'<path class="crack" d="'+sh.cr.join(' ')+'"/>':'';
    return '<g class="room '+st+'" data-room="'+id+'" tabindex="0" role="button" aria-label="'+esc(r.name)+', '+STATE_LABEL[st]+'">'+
      '<path class="shape" d="'+sh.d+'"/>'+deco(id,l)+cracks+
      '<text class="lbl'+(sh.inside?' in':'')+(sh.sm?' sm':'')+'" x="'+sh.lx+'" y="'+sh.ly+'">'+esc(r.name)+'</text></g>';
  }).join('');
  return '<svg viewBox="0 0 360 432" role="group" aria-label="Grundriss der Kathedrale">'+
    '<defs>'+
      '<pattern id="p-ruin" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect class="pr-bg" width="8" height="8"/><line class="pr-ln" x1="0" y1="0" x2="0" y2="8"/></pattern>'+
      '<pattern id="p-tile" width="16" height="16" patternUnits="userSpaceOnUse"><rect class="pt-bg" width="16" height="16"/><path class="pt-ln" d="M8 2 L14 8 L8 14 L2 8 Z"/></pattern>'+
      '<linearGradient id="p-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F7E9BD"/><stop offset=".45" stop-color="#E4C57A"/><stop offset=".6" stop-color="#F5E1A3"/><stop offset="1" stop-color="#D2A850"/></linearGradient>'+
    '</defs>'+
    '<text class="compass" x="180" y="26">Osten</text>'+g+
    '<text class="compass" x="180" y="422">Eingang</text></svg>';
}

/* ---------- Kathedrale: Ansichten ---------- */
function showCathedral(){
  var notice='';
  if(S.retro&&!S.retroSeen){
    notice='<div class="notice">Für deinen bisherigen Weg hast du '+stonesTxt(S.retro)+' erhalten.</div>';
    S.retroSeen=true;save();
  }
  var active=ROOMS.filter(function(r){return !r.future;});
  var rows=active.map(function(r){
    var st=roomState(r),l=lvl(r.id),ready=canBuild(r),next=r.steps[l],hint;
    if(st==='vollendet')hint='Gebet';
    else if(next&&next.chapter)hint='Wartet';
    else if(ready)hint='Bereit';
    else hint='Noch nicht';
    var th=IMG[r.id+'-'+l];
    return '<li class="'+(ready?'ready':'')+'"><button class="node-btn" data-room="'+r.id+'">'+(th?'<img class="thumb" src="'+th+'" alt="">':'')+
      '<span class="nt" style="padding-left:6px"><span class="ntitle">'+esc(r.name)+'</span><span class="ndate">'+STATE_LABEL[st]+'</span></span>'+
      '<span class="nstat"><b>'+hint+'</b>'+l+' von '+r.steps.length+'</span></button></li>';
  }).join('');
  var fut=ROOMS.length-active.length;
  render(hud()+'<div class="wrap"><div class="maphead"><button class="link" data-act="map">Zum Pilgerweg</button><button class="link" data-act="album">Kartenalbum</button></div>'+
    '<h1 class="chapter"><span>Die Kathedrale</span></h1>'+
    '<p class="lead">Aus der Ruine wird nach und nach wieder ein Gotteshaus. Jede bestandene Etappe bringt einen Pilgerstein, das erste Gold einer Etappe drei weitere. Tippe einen Raum an.</p>'+
    (IMG.aussen?'<figure class="roomimg wide"><img src="'+IMG.aussen+'" alt="Die Kathedrale von außen"></figure>':'')+
    notice+
    '<div class="plan">'+planSVG()+'</div>'+
    '<div class="legend"><span><i class="l-ruin"></i>Ruine</span><span><i class="l-auf"></i>Im Aufbau</span><span><i class="l-voll"></i>Vollendet</span></div>'+
    '<ul class="rooms">'+rows+'</ul>'+
    '<div class="later" style="margin-top:14px"><h2>'+fut+' weitere Räume</h2><p>'+(function(){var nm=ROOMS.filter(function(r){return r.future;}).map(function(r){return r.name;});return nm.slice(0,-1).join(', ')+(nm.length>1?' und ':'')+nm[nm.length-1];})()+' werden in späteren Kapiteln wiederaufgebaut.</p></div>'+
  '</div>');
}
function showRoom(id,msg,prevL){
  var r=ROOM[id];if(!r)return;
  var st=roomState(r),l=lvl(id),h;
  h=hud()+'<div class="wrap"><div class="maphead"><button class="link" data-act="cathedral">Zur Kathedrale</button></div>'+
    '<h1 class="chapter"><span>'+esc(r.name)+'</span></h1>'+
    '<p class="state-line">'+STATE_LABEL[st]+'</p>';
  if(msg)h+='<div class="notice">'+esc(msg)+'</div>';
  var im=IMG[id+'-'+l],old=prevL!=null?IMG[id+'-'+prevL]:null;
  if(im)h+='<figure class="roomimg"><img src="'+im+'" alt="'+esc(r.name)+', '+STATE_LABEL[st]+'">'+(old?'<img class="old" src="'+old+'" alt="">':'')+'</figure>';
  if(r.future){
    h+='<p class="room-txt">'+esc(r.ruin)+'</p><div class="later"><h2>Noch nicht begehbar</h2><p>Wird '+esc(r.future)+' wiederaufgebaut.</p></div></div>';
    render(h);return;
  }
  h+='<p class="room-txt">'+esc(l?r.steps[l-1].d:r.ruin)+'</p>';
  if(st==='vollendet'&&r.prayer)h+='<button class="btn ghost" id="pray">Gebet öffnen</button><div id="prayer"></div>';
  h+='<ol class="steps">';
  r.steps.forEach(function(step,i){
    var cls,sst,inner='';
    if(i<l){cls='done';sst='Erledigt';}
    else if(step.chapter){cls=i===l?'wait':'later';sst='Wartet';inner='<p>Wird mit '+esc(step.chapter)+' fortgesetzt.</p>';}
    else if(i===l){
      cls='cur';sst='Als Nächstes';
      var rq=reqs(step),ok=rq.every(function(x){return x.ok;});
      inner='<ul class="req">'+rq.map(function(x){return '<li class="'+(x.ok?'ok':'')+'">'+esc(x.t)+'</li>';}).join('')+'</ul>'+
        '<button class="btn primary" id="build"'+(ok?'':' disabled')+'>'+(step.cost?'Für '+stonesTxt(step.cost)+' aufbauen':'Aufbauen')+'</button>';
    }else{
      cls='later';sst='Später';
      inner='<ul class="req">'+reqs(step).map(function(x){return '<li class="'+(x.ok?'ok':'')+'">'+esc(x.t)+'</li>';}).join('')+'</ul>';
    }
    h+='<li class="stp '+cls+'"><div class="stp-top"><h3>'+esc(step.t)+'</h3><span class="sst">'+sst+'</span></div>'+inner+'</li>';
  });
  h+='</ol></div>';
  render(h);
  var b=document.getElementById('build');
  if(b)b.addEventListener('click',function(){
    if(!canBuild(r))return;
    var step=r.steps[l];
    S.stones-=step.cost||0;S.cath[id]=l+1;save();
    var m='Geschafft: '+step.t+'.';
    if(l+1>=r.steps.length)m+=' '+r.art+' '+r.name+' ist vollendet. Das Gebet dieses Raumes ist jetzt offen.';
    showRoom(id,m,l);celebrate(l+1>=r.steps.length);
  });
  var p=document.getElementById('pray');
  if(p)p.addEventListener('click',function(){
    var pr=r.prayer;
    document.getElementById('prayer').innerHTML='<div class="panel damals prayer'+(reduceMotion?'':' enter')+'"><p class="kicker">'+esc(pr.t)+'</p><p class="txt">'+esc(pr.x)+'</p><p class="note">'+esc(pr.n)+'</p></div>';
    p.remove();
  });
}

/* ---------- Titel ---------- */
function showTitle(){
  var any=Object.keys(S.stages).length>0;
  render('<div class="title-screen"><div class="t-card">'+
    roseSVG()+'<h1 class="t-title">Pilger<br>durch die<br>Zeit</h1>'+
    '<p class="t-sub">Fátima 1917 und Lourdes 1858</p>'+
    '<button class="btn primary" data-chap="'+currentChapter()+'">'+(any?'Weiterpilgern':'Aufbrechen')+'</button>'+
    '<button class="btn ghost" data-act="cathedral">Die Kathedrale</button>'+
    '<button class="btn ghost" data-act="album">Kartenalbum</button>'+
    '<button class="link" data-act="rules">So wird gespielt</button>'+
    '<br><button class="link" id="snd">Klang: '+(S.snd===false?'aus':'an')+'</button>'+
  '</div></div>');
  document.getElementById('snd').addEventListener('click',function(){
    S.snd=S.snd===false;save();this.textContent='Klang: '+(S.snd===false?'aus':'an');
    if(S.snd!==false)bell(392,2.2,.1);
  });
}
function showRules(){
  render('<div class="wrap rules"><div class="maphead"><button class="link" data-act="title">Zurück</button></div>'+
    '<h1 class="chapter"><span>So wird gespielt</span></h1>'+
    '<p>Du pilgerst zu den großen Marienwallfahrtsorten, zuerst von Lissabon nach Fátima, dann von Pau nach Lourdes. An jeder Etappe wirst du in die Zeit der Erscheinungen zurückversetzt und musst eine Prüfung bestehen: Wissensfragen gegen die Zeit, Aussagen als wahr oder falsch erkennen, Ereignisse ordnen, ein Gesätz des Rosenkranzes im Rhythmus beten oder den Lichtern einer Prozession folgen.</p>'+
    '<p>Ein neues Kapitel öffnet sich, sobald du alle Etappen des vorigen geschafft hast.</p>'+
    '<p>Du hast drei Kerzen. Jeder Fehler löscht eine. Erlischt die letzte, beginnt die Etappe von vorn, mit neu gemischten Fragen.</p>'+
    '<p>Jede bestandene Etappe bringt eine Karte. Die goldene Fassung gibt es nur, wenn keine Kerze erlischt. Zwei weitere Karten pro Kapitel erhältst du nur für den ganzen Weg, eine davon nur, wenn jede Etappe golden ist.</p>'+
    '<p>Zwischen den Reisen baust du eine verfallene Kathedrale wieder auf. Jede bestandene Etappe bringt einen Pilgerstein, auch beim Wiederholen. Das erste Gold einer Etappe bringt drei weitere. Mit Steinen restaurierst du die Räume, vollenden kannst du manche nur mit bestimmten Karten. In jedem vollendeten Raum wartet ein Gebet.</p>'+
    '<p class="muted">Dein Fortschritt wird in diesem Browser gespeichert.</p>'+
    '<button class="btn primary" data-act="map">Zum Pilgerweg</button></div>');
}

/* ---------- Karte des Weges ---------- */
var viewChap=null;
function showMap(cid){
  cid=cid||viewChap||currentChapter();viewChap=cid;
  var c=CH[cid],open=chapterOpen(c);
  var owned=CARD_ORDER.filter(function(id){return S.cards[id];}).length;
  var nextFound=false;
  var nodes=stagesOf(cid).map(function(i,pos){
    var st=STAGES[i],state=stageState(i),cls=state,stat;
    if(state==='open'&&!nextFound){cls+=' next';nextFound=true;}
    if(state==='locked')stat='<b>Gesperrt</b>';
    else if(state==='open')stat='<b>Offen</b>';
    else if(state==='gold')stat='<b>Gold</b>Karte';
    else stat='<b>Geschafft</b>Gold fehlt';
    return '<li class="node '+cls+'"><button class="node-btn" data-stage="'+i+'"'+(state==='locked'?' disabled':'')+'>'+
      '<span class="tile">'+(pos+1)+'</span>'+
      '<span class="nt"><span class="nleg">'+esc(st.leg)+'</span><span class="ntitle">'+esc(st.title)+'</span><span class="ndate">'+esc(st.date)+'</span></span>'+
      '<span class="nstat">'+stat+'</span></button></li>';
  }).join('');
  var tabs='<div class="tabs">'+CHAPTERS.map(function(x){
    return '<button class="tab'+(x.id===cid?' on':'')+'" data-chap="'+x.id+'">Kapitel '+x.n+'<small>'+esc(x.name)+(chapterOpen(x)?'':', gesperrt')+'</small></button>';
  }).join('')+'</div>';
  render(hud()+'<div class="wrap"><div class="maphead"><button class="link" data-act="title">Titel</button><button class="link" data-act="cathedral">Kathedrale</button><button class="link" data-act="album">Karten ('+owned+' von '+CARD_ORDER.length+')</button></div>'+
    tabs+
    '<h1 class="chapter">Kapitel '+c.n+'<span>'+esc(c.name)+'</span></h1>'+
    '<p class="lead">'+esc(c.lead)+'</p>'+
    (open?'':'<div class="notice">Dieses Kapitel öffnet sich, sobald du alle Etappen von Kapitel '+(c.n-1)+' geschafft hast.</div>')+
    '<ol class="path">'+nodes+'</ol>'+
    '<div class="later"><h2>Kapitel 3: Guadalupe, 1531</h2><p>Noch nicht begehbar.</p></div>'+
  '</div>');
}

/* ---------- Album ---------- */
function showAlbum(){
  var owned=0,golds=0;
  var items=CHAPTERS.map(function(c){
    return '<h2 class="alb-h">Kapitel '+c.n+': '+esc(c.name)+'</h2><div class="album">'+cardsOf(c).map(function(id){
      var v=S.cards[id];
      if(v){owned++;if(v==='gold')golds++;return '<button class="album-item" data-card="'+id+'" aria-label="'+esc(CARDS[id].name)+' ansehen">'+cardHTML(id,v,'sm')+'</button>';}
      return '<div class="slot"><span>?</span>'+esc(CARDS[id].hint)+'</div>';
    }).join('')+'</div>';
  }).join('');
  render(hud()+'<div class="wrap"><div class="maphead"><button class="link" data-act="map">Zum Pilgerweg</button><button class="link" data-act="cathedral">Kathedrale</button></div>'+
    '<h1 class="chapter"><span>Kartenalbum</span></h1>'+
    '<p class="lead">'+owned+' von '+CARD_ORDER.length+' Karten, davon '+golds+' in Gold.</p>'+
    items+
    '<div class="reset"><button class="btn ghost" id="backup">Spielstand sichern oder laden</button><button class="link danger" id="reset">Fortschritt löschen</button></div></div>');
  document.getElementById('backup').addEventListener('click',showBackup);
  var rb=document.getElementById('reset'),armed=false;
  rb.addEventListener('click',function(){
    if(!armed){armed=true;rb.textContent='Wirklich alles löschen, auch die Kathedrale? Nochmal tippen.';return;}
    S={stages:{},cards:{},stones:0,cath:{}};save();showTitle();
  });
}
function openCard(id){
  var v=S.cards[id];if(!v)return;
  var ov=document.createElement('div');ov.className='overlay';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
  ov.innerHTML='<div>'+cardHTML(id,v,'lg')+'<button class="link close">Schließen</button></div>';
  document.body.appendChild(ov);
  function close(){ov.remove();document.removeEventListener('keydown',onk);}
  function onk(e){if(e.key==='Escape')close();}
  ov.addEventListener('click',function(e){if(e.target===ov||e.target.closest('.close'))close();});
  document.addEventListener('keydown',onk);
  ov.querySelector('.close').focus();
}

/* ---------- Etappe ---------- */
var R=null;
var CANDLE_SVG='<svg viewBox="0 0 20 34" aria-hidden="true"><path class="flame" d="M10 1.5 C14.5 7.5 14 11 10 12.8 C6 11 5.5 7.5 10 1.5 Z"/><rect class="wax" x="5.5" y="14.5" width="9" height="18" rx="1.5"/></svg>';
function candlesHTML(){var s='';for(var i=0;i<CANDLES;i++)s+='<span class="candle '+(i<R.candles?'lit':'out')+'">'+CANDLE_SVG+'</span>';return s;}
function updateCandles(puffIdx){
  var el=document.getElementById('candles');if(!el)return;
  el.innerHTML=candlesHTML();el.setAttribute('aria-label',R.candles+' von 3 Kerzen brennen');
  if(puffIdx!=null&&!reduceMotion){var c=el.querySelectorAll('.candle')[puffIdx];if(c)c.classList.add('puff');}
}
function loseCandle(){
  R.candles=Math.max(0,R.candles-1);R.lost++;
  updateCandles(R.candles);
  try{if(navigator.vibrate)navigator.vibrate(90);}catch(e){}
  return R.candles<=0;
}
function startStage(idx,skipStory){
  var st=STAGES[idx];
  R={idx:idx,candles:CANDLES,lost:0};
  render('<div class="stagebar"><div class="stagebar-in"><button class="link" data-act="map">Abbrechen</button>'+
    '<div class="st-title">'+esc(st.title)+'</div><div class="candles" id="candles" role="img"></div></div></div>'+
    '<div class="wrap" id="sb"></div>');
  updateCandles();
  if(skipStory)runChallenge(0);else showScene(0);
}
function body(){return document.getElementById('sb');}
function showScene(p){
  var st=STAGES[R.idx],sc=st.scenes[p],last=p===st.scenes.length-1;
  var prev=p>0?st.scenes[p-1].era:'heute';
  var canSkip=!!(S.stages[st.id]&&S.stages[st.id].done);
  var dots='';for(var i=0;i<st.scenes.length;i++)dots+='<i class="'+(i<=p?'on':'')+'"></i>';
  body().innerHTML='<div class="panel '+sc.era+(sc.era==='damals'&&prev==='heute'&&!reduceMotion?' enter':'')+'">'+
    '<p class="kicker">'+esc(sc.k)+'</p><p class="txt">'+esc(sc.t)+'</p></div>'+
    '<button class="btn primary" id="nx">'+(last?'Prüfung beginnen':'Weiter')+'</button>'+
    '<div class="scene-foot"><div class="dots" aria-hidden="true">'+dots+'</div>'+(canSkip&&!last?'<button class="link" id="skip">Geschichte überspringen</button>':'')+'</div>';
  document.getElementById('nx').addEventListener('click',function(){if(last)runChallenge(0);else showScene(p+1);});
  var sk=document.getElementById('skip');if(sk)sk.addEventListener('click',function(){runChallenge(0);});
  window.scrollTo(0,0);
}
function runChallenge(c){
  var st=STAGES[R.idx];
  if(c>=st.ch.length){finishStage(true);return;}
  var cfg=st.ch[c];
  var done=function(ok){stopAll();if(ok)runChallenge(c+1);else finishStage(false);};
  window.scrollTo(0,0);
  if(cfg.type==='quiz')runQuiz(cfg,done);
  else if(cfg.type==='chrono')runChrono(cfg,done);
  else if(cfg.type==='procession')runProcession(cfg,done);
  else runRosary(cfg,done);
}

/* ---------- Prüfung: Wissensfragen ---------- */
function runQuiz(cfg,done){
  var qs=shuffle(POOLS[cfg.pool].slice()).slice(0,cfg.count),i=0;
  function ask(){
    stopAll();
    if(i>=qs.length){done(true);return;}
    var q=qs[i];
    var isTF=q.v!==undefined;
    var opts=isTF?[{t:'Wahr',ok:q.v===true},{t:'Falsch',ok:q.v===false}]:shuffle([{t:q.a,ok:true}].concat(q.w.map(function(t){return {t:t,ok:false};})));
    var b=body();
    b.innerHTML='<div class="challenge-head"><p class="step">'+esc(cfg.title)+(isTF?', Aussage ':', Frage ')+(i+1)+' von '+qs.length+(isTF?'. Wahr oder falsch?':'')+'</p><h2 class="q">'+esc(isTF?q.s:q.q)+'</h2></div>'+
      '<div class="timer" id="tm" aria-hidden="true"><i id="tb"></i></div>'+
      '<div>'+opts.map(function(o,k){return '<button class="opt" data-k="'+k+'">'+esc(o.t)+'</button>';}).join('')+'</div>'+
      '<div id="fb" aria-live="polite"></div>';
    var tb=document.getElementById('tb'),tm=document.getElementById('tm'),t0=performance.now(),raf=0,answered=false;
    function tick(now){
      var f=Math.max(0,1-(now-t0)/(cfg.time*1000));
      tb.style.transform='scaleX('+f+')';
      if(f<.3)tm.classList.add('low');
      if(f<=0){answer(-1);return;}
      raf=requestAnimationFrame(tick);
    }
    raf=requestAnimationFrame(tick);
    stopFns.push(function(){cancelAnimationFrame(raf);});
    b.querySelectorAll('.opt').forEach(function(btn){btn.addEventListener('click',function(){answer(+btn.dataset.k);});});
    function answer(k){
      if(answered)return;answered=true;cancelAnimationFrame(raf);
      var ok=k>=0&&opts[k].ok;
      b.querySelectorAll('.opt').forEach(function(btn,idx){btn.disabled=true;if(opts[idx].ok)btn.classList.add('right');else if(idx===k)btn.classList.add('wrong');});
      var dead=false;if(!ok)dead=loseCandle();
      var head=ok?'Richtig.':(k<0?'Die Zeit ist abgelaufen.':'Leider falsch.');
      var fb=document.getElementById('fb');
      fb.innerHTML='<div class="fb '+(ok?'':'bad')+'"><strong>'+head+'</strong>'+(q.e?esc(q.e):'')+'</div>'+
        '<button class="btn primary" id="nq">'+(dead?'Weiter':(i+1<qs.length?'Nächste Frage':'Weiter'))+'</button>';
      var nb=document.getElementById('nq');
      nb.addEventListener('click',function(){if(dead){done(false);return;}i++;ask();});
      nb.focus({preventScroll:true});
      fb.scrollIntoView({block:'nearest',behavior:reduceMotion?'auto':'smooth'});
    }
  }
  ask();
}

/* ---------- Prüfung: Zeitstrahl ---------- */
function runChrono(cfg,done){
  var evs=shuffle(CH[STAGES[R.idx].chap].ereignisse.slice()).slice(0,cfg.count);
  var order=evs.slice().sort(function(a,b){return a.k-b.k;});
  var placed=0,over=false,b=body();
  b.innerHTML='<div class="challenge-head"><h2>'+esc(cfg.title)+'</h2><p class="muted">Tippe die Ereignisse in der Reihenfolge an, in der sie geschehen sind. Das früheste zuerst.</p></div>'+
    '<ol class="zeitstrahl" id="zs"></ol><div id="pool">'+evs.map(function(e,k){return '<button class="ev" data-k="'+k+'">'+esc(e.t)+'</button>';}).join('')+'</div><div id="fb" aria-live="polite"></div>';
  var zs=document.getElementById('zs'),fb=document.getElementById('fb');
  b.querySelectorAll('.ev').forEach(function(btn){
    btn.addEventListener('click',function(){
      if(over)return;
      var e=evs[+btn.dataset.k];
      if(e===order[placed]){
        placed++;btn.remove();
        var li=document.createElement('li');li.innerHTML='<b>'+esc(e.d)+'</b>'+esc(e.t);zs.appendChild(li);
        fb.innerHTML='';
        if(placed===order.length){
          over=true;
          fb.innerHTML='<div class="fb"><strong>Die Reihenfolge stimmt.</strong></div><button class="btn primary" id="nq">Weiter</button>';
          document.getElementById('nq').addEventListener('click',function(){done(true);});
        }
      }else{
        btn.classList.remove('shake');void btn.offsetWidth;btn.classList.add('shake');
        var dead=loseCandle();
        if(dead){
          over=true;
          b.querySelectorAll('.ev').forEach(function(x){x.disabled=true;});
          fb.innerHTML='<div class="fb bad"><strong>Die letzte Kerze ist erloschen.</strong>Als Nächstes wäre gewesen: '+esc(order[placed].t)+' ('+esc(order[placed].d)+').</div><button class="btn primary" id="nq">Weiter</button>';
          document.getElementById('nq').addEventListener('click',function(){done(false);});
        }else{
          fb.innerHTML='<div class="fb bad"><strong>Nicht das früheste.</strong>Davor liegt noch etwas anderes.</div>';
        }
      }
    });
  });
}

/* ---------- Prüfung: Rosenkranz im Rhythmus ---------- */
function runRosary(cfg,done){
  var b=body();
  b.innerHTML='<div class="challenge-head"><h2>'+esc(cfg.title)+'</h2><p class="muted">Tippe ins Feld, sobald eine Perle den goldenen Ring erreicht. Zu früh, zu spät oder verpasst kostet eine Kerze.</p></div>'+
    '<div class="rosary" id="rz"><canvas id="rzc" aria-label="Rosenkranzperlen, die auf einen Ring zulaufen"></canvas><div class="rz-label" id="rzl">Bereit, wenn du es bist</div><div class="rz-fb" id="rzf" aria-live="polite"></div></div>'+
    '<button class="btn primary" id="rzgo">Beginnen</button><div id="fb"></div>';
  var wrap=document.getElementById('rz'),cv=document.getElementById('rzc'),ctx=cv.getContext('2d');
  var lab=document.getElementById('rzl'),rfb=document.getElementById('rzf'),go=document.getElementById('rzgo');
  var W=300,H=360,ty=290;
  function size(){var dpr=Math.min(window.devicePixelRatio||1,2);W=wrap.clientWidth;H=Math.round(Math.min(440,Math.max(320,window.innerHeight*.52)));ty=H-72;cv.style.height=H+'px';cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}
  size();
  var cs=getComputedStyle(document.documentElement);function col(n){return cs.getPropertyValue(n).trim();}
  var C={line:col('--line'),bead:col('--azul'),ring:col('--ouro'),ok:col('--ok'),bad:col('--rot'),muted:col('--muted')};
  var seq=[{big:true,l:'Vaterunser'}];
  for(var n=1;n<=10;n++)seq.push({big:false,l:'Gegrüßet seist du, Maria, '+n+' von 10'});
  seq.push({big:true,l:'Ehre sei dem Vater'});
  var beads=[],running=false,raf=0,ended=false,fbTimer=0,lastLabel='';
  function flash(txt,good){rfb.textContent=txt;rfb.className='rz-fb '+(good?'good':'bad');clearTimeout(fbTimer);fbTimer=setTimeout(function(){rfb.textContent='';},650);}
  function start(){
    go.style.display='none';
    var now=performance.now(),t=now+cfg.travel+500;
    beads=seq.map(function(s,i){if(i>0)t+=cfg.interval+(cfg.jitter?(Math.random()*2-1)*cfg.jitter:0);return {big:s.big,l:s.l,at:t,st:0,rt:0};});
    running=true;raf=requestAnimationFrame(frame);
  }
  function resolveMiss(bd,txt){
    bd.st=2;bd.rt=performance.now();flash(txt,false);
    if(loseCandle()){finish(false);}
  }
  function tap(now){
    if(!running)return;
    var best=null,bd=Infinity;
    beads.forEach(function(x){if(x.st===0){var d=Math.abs(now-x.at);if(d<bd){bd=d;best=x;}}});
    if(!best)return;
    var dt=now-best.at;
    if(Math.abs(dt)<=cfg.win){best.st=1;best.rt=now;flash(Math.abs(dt)<=cfg.win*.45?'Genau':'Gut',true);}
    else if(Math.abs(dt)<=cfg.win*2.6){resolveMiss(best,dt<0?'Zu früh':'Zu spät');}
  }
  function frame(now){
    beads.forEach(function(x){if(x.st===0&&now-x.at>cfg.win)resolveMiss(x,'Verpasst');});
    if(!running&&ended){draw(now);return;}
    var next=null;for(var i=0;i<beads.length;i++){if(beads[i].st===0){next=beads[i];break;}}
    var l=next?next.l:'Amen';if(l!==lastLabel){lab.textContent=l;lastLabel=l;}
    draw(now);
    if(!next&&running){running=false;ended=true;setTimeout(function(){finish(true);},500);return;}
    if(running)raf=requestAnimationFrame(frame);
  }
  function draw(now){
    ctx.clearRect(0,0,W,H);
    var cx=W/2,top=-30;
    ctx.strokeStyle=C.line;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
    ctx.strokeStyle=C.ring;ctx.lineWidth=3;ctx.beginPath();ctx.arc(cx,ty,24,0,Math.PI*2);ctx.stroke();
    ctx.lineWidth=1;ctx.globalAlpha=.35;ctx.beginPath();ctx.arc(cx,ty,32,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
    beads.forEach(function(x){
      var r=x.big?15:10.5,y;
      if(x.st===1){var a=1-(now-x.rt)/320;if(a<=0)return;ctx.globalAlpha=a;ctx.fillStyle=C.ok;ctx.beginPath();ctx.arc(cx,ty,r+(1-a)*14,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;return;}
      y=ty-((x.at-now)/cfg.travel)*(ty-top);
      if(y<top-20||y>H+30)return;
      if(x.st===2){var a2=1-(now-x.rt)/700;if(a2<=0)return;ctx.globalAlpha=a2*.8;ctx.fillStyle=C.bad;}
      else ctx.fillStyle=C.bead;
      ctx.beginPath();ctx.arc(cx,y,r,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
      if(x.big&&x.st===0){ctx.strokeStyle=C.ring;ctx.lineWidth=2;ctx.beginPath();ctx.arc(cx,y,r+4,0,Math.PI*2);ctx.stroke();}
    });
  }
  function finish(ok){
    if(ended&&!ok&&!running)return;
    running=false;ended=true;cancelAnimationFrame(raf);draw(performance.now());
    var fb=document.getElementById('fb');
    if(ok){lab.textContent='Amen';fb.innerHTML='<div class="fb"><strong>Das Gesätz ist gebetet.</strong></div><button class="btn primary" id="nq">Weiter</button>';}
    else{lab.textContent='Die Kerzen sind erloschen';fb.innerHTML='<div class="fb bad"><strong>Die letzte Kerze ist erloschen.</strong>Der Rhythmus ist beim nächsten Versuch ein anderer.</div><button class="btn primary" id="nq">Weiter</button>';}
    document.getElementById('nq').addEventListener('click',function(){done(ok);});
  }
  function onDown(e){e.preventDefault();tap(performance.now());}
  function onKey(e){if(e.code==='Space'||e.key===' '){if(running){e.preventDefault();tap(performance.now());}}}
  wrap.addEventListener('pointerdown',onDown);
  document.addEventListener('keydown',onKey);
  window.addEventListener('resize',size);
  go.addEventListener('click',start);
  draw(performance.now());
  stopFns.push(function(){running=false;cancelAnimationFrame(raf);clearTimeout(fbTimer);document.removeEventListener('keydown',onKey);window.removeEventListener('resize',size);});
}

/* ---------- Prüfung: Lichterprozession ---------- */
function tone(f){
  var a=audio();if(!a)return;
  var t=a.currentTime,o=a.createOscillator(),g=a.createGain();
  o.type='sine';o.frequency.value=f;
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.09,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+.6);
  o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+.65);
}
function runProcession(cfg,done){
  var b=body(),N=6,r=0,seq=[],pos=0,phase='idle',timers=[],over=false;
  var FREQ=[392,440,523.25,587.33,659.25,783.99],cells='';
  for(var k=0;k<N;k++)cells+='<button class="pc" data-k="'+k+'" disabled aria-label="Licht '+(k+1)+'">'+CANDLE_SVG+'</button>';
  b.innerHTML='<div class="challenge-head"><h2>'+esc(cfg.title)+'</h2><p class="muted">Die Lichter leuchten nacheinander auf. Merke dir die Reihenfolge und tippe sie genauso an. Jeder Fehler kostet eine Kerze.</p></div>'+
    '<div class="proc">'+cells+'</div><p class="proc-st" id="pst" aria-live="polite">'+cfg.rounds.length+' Runden, jede ein Licht länger</p>'+
    '<button class="btn primary" id="pgo">Beginnen</button><div id="fb"></div>';
  var btns=b.querySelectorAll('.pc'),pst=document.getElementById('pst');
  function later(f,ms){timers.push(setTimeout(f,ms));}
  stopFns.push(function(){timers.forEach(clearTimeout);});
  function setEnabled(on){btns.forEach(function(x){x.disabled=!on;});}
  function light(k,ms){var x=btns[k];x.classList.add('on');tone(FREQ[k]);later(function(){x.classList.remove('on');},ms);}
  function label(t){pst.textContent='Runde '+(r+1)+' von '+cfg.rounds.length+': '+t;}
  function newSeq(){var a=[],last=-1,k;for(var i=0;i<cfg.rounds[r];i++){do{k=Math.floor(Math.random()*N);}while(k===last);a.push(k);last=k;}return a;}
  function show(){
    phase='show';pos=0;setEnabled(false);label('Schau genau hin');
    seq.forEach(function(k,i){later(function(){light(k,cfg.speed*.7);},500+i*cfg.speed);});
    later(function(){if(over)return;phase='input';setEnabled(true);label('Du bist dran');},500+seq.length*cfg.speed);
  }
  function startRound(){seq=newSeq();show();}
  function finish(ok){
    over=true;setEnabled(false);
    var fb=document.getElementById('fb');
    fb.innerHTML=ok?'<div class="fb"><strong>Die Prozession ist an der Grotte angekommen.</strong></div><button class="btn primary" id="nq">Weiter</button>':
      '<div class="fb bad"><strong>Die letzte Kerze ist erloschen.</strong>Beim nächsten Versuch leuchten die Lichter in anderer Reihenfolge.</div><button class="btn primary" id="nq">Weiter</button>';
    document.getElementById('nq').addEventListener('click',function(){done(ok);});
  }
  btns.forEach(function(x){x.addEventListener('click',function(){
    if(phase!=='input'||over)return;
    var k=+x.dataset.k;
    if(k===seq[pos]){
      light(k,260);pos++;
      if(pos===seq.length){
        phase='wait';setEnabled(false);r++;
        if(r>=cfg.rounds.length){finish(true);return;}
        pst.textContent='Richtig. Die Prozession wird länger.';later(startRound,1000);
      }
    }else{
      x.classList.remove('bad');void x.offsetWidth;x.classList.add('bad');
      phase='wait';setEnabled(false);
      if(loseCandle()){finish(false);return;}
      pst.textContent='Nicht dieses Licht. Schau noch einmal hin.';later(show,1200);
    }
  });});
  document.getElementById('pgo').addEventListener('click',function(){this.style.display='none';startRound();});
}

/* ---------- Abschluss ---------- */
function award(id,gold){
  var prev=S.cards[id],now=gold||prev==='gold'?'gold':'normal';
  S.cards[id]=now;
  return {isNew:!prev||(now==='gold'&&prev!=='gold'),variant:now};
}
function finishStage(ok){
  stopAll();
  var st=STAGES[R.idx],idx=R.idx;
  if(!ok){
    body().innerHTML='<div class="reward"><h2>Die Kerzen sind erloschen</h2><p>Die Etappe beginnt von vorn. Fragen und Rhythmus werden neu gemischt.</p>'+
      '<button class="btn primary" id="again">Etappe neu versuchen</button><button class="btn ghost" data-act="map">Zum Pilgerweg</button></div>';
    document.getElementById('again').addEventListener('click',function(){startStage(idx,true);});
    return;
  }
  var gold=R.lost===0;
  var chap=CH[st.chap],wasDone=chapterDone(chap.id);
  var prev=S.stages[st.id]||{};
  var gain=1+(gold&&!prev.gold?3:0);
  S.stones=(S.stones||0)+gain;
  S.stages[st.id]={done:true,gold:!!(prev.gold||gold)};
  var main=award(st.card,gold);
  var allDone=chapterDone(chap.id),allGold=chapterGold(chap.id);
  var bonus=[];
  if(allDone){var bc=award(chap.bonusAll,allGold);if(bc.isNew)bonus.push([chap.bonusAll,bc.variant]);}
  if(allGold&&!S.cards[chap.bonusGold]){S.cards[chap.bonusGold]='gold';bonus.push([chap.bonusGold,'gold']);}
  var nextCh=CHAPTERS[CHAPTERS.indexOf(chap)+1],unlocked=allDone&&!wasDone&&nextCh;
  save();
  var msg;
  if(gold)msg='Keine Kerze ist erloschen. Die goldene Karte gehört dir.';
  else if(main.variant==='gold')msg='Die goldene Karte hattest du schon.';
  else msg=(R.lost===1?'Eine Kerze ist':R.lost+' Kerzen sind')+' erloschen. Für die goldene Karte muss die Etappe ohne Fehler gelingen.';
  var h='<div class="reward"><h2>'+(main.isNew?'Neue Karte':'Etappe geschafft')+'</h2><p>'+msg+'</p>'+
    '<p class="gain">'+STONE_SVG+'<span>+ '+stonesTxt(gain)+(gain>1?'<small>einer für die Etappe, drei für das erste Gold</small>':'')+'</span></p>'+
    '<div class="flip'+(main.variant==='gold'?' gold':'')+'" id="flip" role="button" tabindex="0" aria-label="Karte aufdecken"><div class="flip-inner">'+cardHTML(st.card,main.variant,'md')+'<div class="flip-back"></div></div></div>'+
    '<p class="seal-hint" id="sealhint">Tippe auf die Karte, um sie aufzudecken</p>';
  if(bonus.length){
    h+='<div class="bonus"><h2>'+(bonus.length>1?'Zwei weitere Karten':'Eine weitere Karte')+'</h2><p>'+(bonus.some(function(x){return x[0]===chap.bonusGold;})?'Jede Etappe in Gold. Du hast den ganzen Weg vollkommen gegangen.':'Du hast den ganzen Weg bis '+chap.name+' zurückgelegt.')+'</p>';
    bonus.forEach(function(x){h+='<div style="margin-top:18px">'+cardHTML(x[0],x[1],'md')+'</div>';});
    h+='</div>';
  }
  if(unlocked)h+='<div class="notice" style="text-align:left">Kapitel '+nextCh.n+' ist offen: '+esc(nextCh.name)+', '+esc(nextCh.years)+'.</div><button class="btn primary" data-chap="'+nextCh.id+'">Weiter nach '+esc(nextCh.name)+'</button>';
  if(!gold&&main.variant!=='gold')h+='<button class="btn '+(unlocked?'ghost':'primary')+'" id="again">Nochmal für Gold</button><button class="btn ghost" data-act="map">Zum Pilgerweg</button>';
  else h+='<button class="btn '+(unlocked?'ghost':'primary')+'" data-act="map">Zum Pilgerweg</button>';
  h+='<button class="btn ghost" data-act="cathedral">Zur Kathedrale</button>';
  h+='</div>';
  body().innerHTML=h;
  var fl=document.getElementById('flip'),isGold=main.variant==='gold';
  function reveal(){
    if(fl.classList.contains('open'))return;
    fl.classList.add('open');fl.setAttribute('aria-label','Karte aufgedeckt');
    var hn=document.getElementById('sealhint');if(hn)hn.remove();
    setTimeout(function(){sparks(fl,isGold?28:14,isGold);chime(isGold);},reduceMotion?0:420);
  }
  fl.addEventListener('click',reveal);
  fl.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();reveal();}});
  var ag=document.getElementById('again');if(ag)ag.addEventListener('click',function(){startStage(idx,true);});
  window.scrollTo(0,0);
}

/* ---------- Spielstand sichern ---------- */
function saveCode(){return btoa(unescape(encodeURIComponent(JSON.stringify(S))));}
function showBackup(){
  var ov=document.createElement('div');ov.className='overlay';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
  ov.innerHTML='<div class="sheet"><h2>Spielstand sichern</h2><p>Kopiere diesen Code und bewahre ihn auf, zum Beispiel in einer Notiz. Damit holst du deinen Fortschritt jederzeit zurück, auch auf einem anderen Gerät.</p>'+
    '<textarea id="bk-out" readonly></textarea><button class="btn primary" id="bk-copy">Code kopieren</button>'+
    '<h2 style="margin-top:22px">Spielstand laden</h2><p>Füge einen gesicherten Code ein. Dein aktueller Fortschritt wird dabei ersetzt.</p>'+
    '<textarea id="bk-in" placeholder="Code hier einfügen"></textarea><button class="btn ghost" id="bk-load">Laden</button><p id="bk-msg" aria-live="polite"></p>'+
    '<button class="link" id="bk-close">Schließen</button></div>';
  document.body.appendChild(ov);
  var out=document.getElementById('bk-out'),msg=document.getElementById('bk-msg');out.value=saveCode();
  function close(){ov.remove();}
  document.getElementById('bk-close').addEventListener('click',close);
  ov.addEventListener('click',function(e){if(e.target===ov)close();});
  document.getElementById('bk-copy').addEventListener('click',function(){
    var b=this;function ok(){b.textContent='Kopiert';}
    try{navigator.clipboard.writeText(out.value).then(ok,function(){out.select();document.execCommand('copy');ok();});}catch(e){out.select();try{document.execCommand('copy');ok();}catch(e2){}}
  });
  document.getElementById('bk-load').addEventListener('click',function(){
    try{
      var o=JSON.parse(decodeURIComponent(escape(atob(document.getElementById('bk-in').value.trim()))));
      if(!o||!o.stages||!o.cards)throw 0;
      S=o;migrate();save();close();showTitle();
    }catch(e){msg.textContent='Dieser Code ist ungültig. Bitte prüfe, ob er vollständig kopiert wurde.';msg.style.color='var(--rot)';}
  });
}

/* ---------- Navigation ---------- */
app.addEventListener('click',function(e){
  var a=e.target.closest('[data-act]');
  if(a){var act=a.dataset.act;if(act==='map')showMap();else if(act==='title')showTitle();else if(act==='album')showAlbum();else if(act==='rules')showRules();else if(act==='cathedral')showCathedral();return;}
  var cp=e.target.closest('[data-chap]');
  if(cp){showMap(cp.dataset.chap);return;}
  var s=e.target.closest('[data-stage]');
  if(s&&!s.disabled){startStage(+s.dataset.stage,false);return;}
  var rm=e.target.closest('[data-room]');
  if(rm){showRoom(rm.getAttribute('data-room'));return;}
  var c=e.target.closest('[data-card]');
  if(c)openCard(c.dataset.card);
});
app.addEventListener('keydown',function(e){
  var rm=e.target.closest&&e.target.closest('g[data-room]');
  if(rm&&(e.key==='Enter'||e.key===' ')){e.preventDefault();showRoom(rm.getAttribute('data-room'));}
});

/* ---------- Offline-Fähigkeit ---------- */
if('serviceWorker' in navigator&&/^https?:/.test(location.protocol)){
  window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});
}

/* ---------- Start ---------- */
(function boot(){
  var started=false;
  function go(){if(started)return;started=true;migrate();showTitle();}
  var ws=null;
  try{if(window.storage&&window.storage.get)ws=window.storage.get(KEY,false);}catch(e){}
  if(ws&&ws.then){
    ws.then(function(r){
      if(started||!r||!r.value)return;
      var s=JSON.parse(r.value);
      if(s&&s.stages&&s.cards&&Object.keys(s.stages).length>=Object.keys(S.stages).length)S=s;
    }).catch(function(){}).then(go);
    setTimeout(go,1500);
  }else go();
})();
})();
