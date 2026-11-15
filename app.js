(function(){
var N=function(v,l){return l==='en'?v:v.replace('.',',');};
var GH='https://github.com/';
var L={
en:{c1:'© 2026 Xive080',c2:'Digimon is a trademark of Bandai Namco.',c3:'Fan project · not affiliated · no game data included.',ps:'PRESS START',sub:'» PS2 DECOMPILATION',spl:'Press Start to continue',legal:'Fan project · Digimon is a Bandai Namco trademark · no game data',upd:'Last update',pick:'or click to choose',h_sel:'Select',h_ok:'Confirm',h_pan:'Switch panel',h_back:'Back',open:'Open',soon:'Coming soon',
 q1:'Our decompilation',q2:'The starting point · Namek025',q3:'GameCube version · ivanno4317',n4:'Others',q4:'Thanks & tools',
 t1:'Squad World 4',t2:'dw4-ps2-ai · Namek025',t3:'dw4-gc · ivanno4317',t4:'Xive080 & thanks',
 o:{
  p1:{d:'Decompilation of Digimon World 4 for PS2 (NTSC-U, SLUS-20836): source code that builds to the same bytes as the original game.',
      m:'Our project',pr:'Progress',prd:'{pct} of the code decompiled · {funcs} functions · {units} units. Figures as of {date}.',
      eu:'European version',eud:'We compared the European executable (SLES-53405) with the American one. It is a later revision of the same code. Its texts exist in English, German, Italian and Spanish.',
      sr:'Source code',srd:'The repository is not public yet.',gh:'Xive080 on GitHub',ghd:'All my projects live here.'},
  p2:{rep:'Repository',repd:'A matching decompilation of the US version: game code, the Alchemy engine, Lua 4.0.1, zlib and libpng. It is where our work started. No game data included.',
      pr:'Progress',prd:'{tot} overall · {game} of the game code · {lua} of Lua 4.0.1 (according to its README).',
      mods:'Mods',modsd:'Patches and tools built from the same research.'},
  p3:{pr:'Progress',prd:'{gcpct} of the code matches ({gcf} of {gct} functions), according to decomp.dev.',rep:'Repository',repd:'A decompilation in progress of the GameCube version (GDJEB2, US Rev 1), built with dtk-template, objdiff and ninja. It is the structural model we follow for PS2. No game data included.',
      lic:'License',licd:'CC0 1.0: public domain.'},
  p4:{gh:'GitHub',ghd:'Reverse engineering and software projects by Xive080.',
      po:'Portfolio',pod:'A site with all my projects is coming soon.',
      th:'Thanks',thd:'This work stands on the shoulders of:',
      tl:'Tools',tld:'Tools that make this possible:',
      lg:'Legal',lgd:'A non-profit fan project. Digimon is a trademark of Bandai Namco and this site is not affiliated with it. No game data is distributed.'}
 },
 c:'Community',cn:'Digimon Modding Community (world-4 channel)'},
de:{c1:'© 2026 Xive080',c2:'Digimon ist eine Marke von Bandai Namco.',c3:'Fanprojekt · nicht verbunden · keine Spieldaten enthalten.',ps:'START DRÜCKEN',sub:'» PS2-DEKOMPILIERUNG',spl:'Start drücken, um fortzufahren',legal:'Fanprojekt · Digimon ist eine Marke von Bandai Namco · keine Spieldaten',upd:'Letzte Aktualisierung',pick:'oder anklicken',h_sel:'Auswählen',h_ok:'Bestätigen',h_pan:'Feld wechseln',h_back:'Zurück',open:'Öffnen',soon:'Bald verfügbar',
 q1:'Unsere Dekompilierung',q2:'Der Ausgangspunkt · Namek025',q3:'GameCube-Version · ivanno4317',n4:'Weitere',q4:'Dank & Werkzeuge',
 t1:'Squad World 4',t2:'dw4-ps2-ai · Namek025',t3:'dw4-gc · ivanno4317',t4:'Xive080 & Dank',
 o:{
  p1:{d:'Dekompilierung von Digimon World 4 für PS2 (NTSC-U, SLUS-20836): Quellcode, der zu denselben Bytes wie das Originalspiel kompiliert.',
      m:'Unser Projekt',pr:'Fortschritt',prd:'{pct} des Codes dekompiliert · {funcs} Funktionen · {units} Einheiten. Stand: {date}.',
      eu:'Europäische Version',eud:'Wir haben die europäische Programmdatei (SLES-53405) mit der amerikanischen verglichen. Sie ist eine spätere Überarbeitung desselben Codes. Ihre Texte gibt es auf Englisch, Deutsch, Italienisch und Spanisch.',
      sr:'Quellcode',srd:'Das Repository ist noch nicht öffentlich.',gh:'Xive080 auf GitHub',ghd:'Hier liegen alle meine Projekte.'},
  p2:{rep:'Repository',repd:'Eine exakte Dekompilierung der US-Version: Spielcode, die Alchemy-Engine, Lua 4.0.1, zlib und libpng. Hier hat unsere Arbeit begonnen. Keine Spieldaten enthalten.',
      pr:'Fortschritt',prd:'{tot} insgesamt · {game} des Spielcodes · {lua} von Lua 4.0.1 (laut README).',
      mods:'Mods',modsd:'Patches und Werkzeuge aus derselben Forschung.'},
  p3:{pr:'Fortschritt',prd:'{gcpct} des Codes stimmt überein ({gcf} von {gct} Funktionen), laut decomp.dev.',rep:'Repository',repd:'Eine laufende Dekompilierung der GameCube-Version (GDJEB2, US Rev 1) mit dtk-template, objdiff und ninja. Sie ist das Strukturvorbild für unsere PS2-Version. Keine Spieldaten enthalten.',
      lic:'Lizenz',licd:'CC0 1.0: gemeinfrei.'},
  p4:{gh:'GitHub',ghd:'Reverse-Engineering- und Softwareprojekte von Xive080.',
      po:'Portfolio',pod:'Eine Seite mit allen meinen Projekten folgt bald.',
      th:'Dank',thd:'Diese Arbeit baut auf folgenden Leuten auf:',
      tl:'Werkzeuge',tld:'Werkzeuge, die das möglich machen:',
      lg:'Rechtliches',lgd:'Ein nicht kommerzielles Fanprojekt. Digimon ist eine Marke von Bandai Namco; diese Seite steht in keiner Verbindung zu ihr. Es werden keine Spieldaten verbreitet.'}
 },
 c:'Community',cn:'Digimon Modding Community (Kanal world-4)'},
es:{c1:'© 2026 Xive080',c2:'Digimon es una marca de Bandai Namco.',c3:'Proyecto de aficionados · sin afiliación · sin datos del juego.',ps:'PULSA START',sub:'» DECOMPILACIÓN PS2',spl:'Pulsa Start para continuar',legal:'Proyecto de aficionados · Digimon es marca de Bandai Namco · sin datos del juego',upd:'Última actualización',pick:'o haz clic para elegir',h_sel:'Seleccionar',h_ok:'Confirmar',h_pan:'Cambiar panel',h_back:'Volver',open:'Abrir',soon:'Próximamente',
 q1:'Nuestra decompilación',q2:'El punto de partida · Namek025',q3:'Versión GameCube · ivanno4317',n4:'Otros',q4:'Agradecimientos y herramientas',
 t1:'Squad World 4',t2:'dw4-ps2-ai · Namek025',t3:'dw4-gc · ivanno4317',t4:'Xive080 y agradecimientos',
 o:{
  p1:{d:'Decompilación de Digimon World 4 para PS2 (NTSC-U, SLUS-20836): código fuente que compila a los mismos bytes que el juego original.',
      m:'Nuestro proyecto',pr:'Progreso',prd:'{pct} del código decompilado · {funcs} funciones · {units} unidades. Cifras a {date}.',
      eu:'Versión europea',eud:'Hemos comparado el ejecutable europeo (SLES-53405) con el americano. Es una revisión posterior del mismo código. Sus textos existen en inglés, alemán, italiano y español.',
      sr:'Código fuente',srd:'El repositorio aún no es público.',gh:'Xive080 en GitHub',ghd:'Aquí están todos mis proyectos.'},
  p2:{rep:'Repositorio',repd:'Decompilación exacta de la versión USA: código del juego, el motor Alchemy, Lua 4.0.1, zlib y libpng. Es donde empezó nuestro trabajo. No incluye datos del juego.',
      pr:'Progreso',prd:'{tot} en total · {game} del código del juego · {lua} de Lua 4.0.1 (según su README).',
      mods:'Mods',modsd:'Parches y herramientas surgidos de la misma investigación.'},
  p3:{pr:'Progreso',prd:'{gcpct} del código coincide ({gcf} de {gct} funciones), según decomp.dev.',rep:'Repositorio',repd:'Decompilación en curso de la versión GameCube (GDJEB2, Rev 1 USA), con dtk-template, objdiff y ninja. Es el modelo de estructura que seguimos para PS2. No incluye datos del juego.',
      lic:'Licencia',licd:'CC0 1.0: dominio público.'},
  p4:{gh:'GitHub',ghd:'Proyectos de ingeniería inversa y software de Xive080.',
      po:'Portfolio',pod:'Pronto habrá un sitio con todos mis proyectos.',
      th:'Agradecimientos',thd:'Este trabajo se apoya en:',
      tl:'Herramientas',tld:'Herramientas que lo hacen posible:',
      lg:'Aviso legal',lgd:'Proyecto de aficionados sin ánimo de lucro. Digimon es una marca de Bandai Namco y este sitio no está afiliado a ella. No se distribuyen datos del juego.'}
 },
 c:'Comunidad',cn:'Digimon Modding Community (canal world-4)'},
it:{c1:'© 2026 Xive080',c2:'Digimon è un marchio di Bandai Namco.',c3:'Progetto amatoriale · non affiliato · nessun dato del gioco.',ps:'PREMI START',sub:'» DECOMPILAZIONE PS2',spl:'Premi Start per continuare',legal:'Progetto amatoriale · Digimon è un marchio Bandai Namco · nessun dato del gioco',upd:'Ultimo aggiornamento',pick:'oppure clicca per scegliere',h_sel:'Seleziona',h_ok:'Conferma',h_pan:'Cambia pannello',h_back:'Indietro',open:'Apri',soon:'Prossimamente',
 q1:'La nostra decompilazione',q2:'Il punto di partenza · Namek025',q3:'Versione GameCube · ivanno4317',n4:'Altri',q4:'Ringraziamenti e strumenti',
 t1:'Squad World 4',t2:'dw4-ps2-ai · Namek025',t3:'dw4-gc · ivanno4317',t4:'Xive080 e ringraziamenti',
 o:{
  p1:{d:'Decompilazione di Digimon World 4 per PS2 (NTSC-U, SLUS-20836): codice sorgente che compila negli stessi byte del gioco originale.',
      m:'Il nostro progetto',pr:'Avanzamento',prd:'{pct} del codice decompilato · {funcs} funzioni · {units} unità. Dati al {date}.',
      eu:'Versione europea',eud:'Abbiamo confrontato l’eseguibile europeo (SLES-53405) con quello americano. È una revisione successiva dello stesso codice. I suoi testi esistono in inglese, tedesco, italiano e spagnolo.',
      sr:'Codice sorgente',srd:'Il repository non è ancora pubblico.',gh:'Xive080 su GitHub',ghd:'Qui ci sono tutti i miei progetti.'},
  p2:{rep:'Repository',repd:'Decompilazione esatta della versione USA: codice del gioco, motore Alchemy, Lua 4.0.1, zlib e libpng. È da qui che è partito il nostro lavoro. Nessun dato del gioco incluso.',
      pr:'Avanzamento',prd:'{tot} in totale · {game} del codice del gioco · {lua} di Lua 4.0.1 (secondo il suo README).',
      mods:'Mod',modsd:'Patch e strumenti nati dalla stessa ricerca.'},
  p3:{pr:'Avanzamento',prd:'{gcpct} del codice coincide ({gcf} di {gct} funzioni), secondo decomp.dev.',rep:'Repository',repd:'Decompilazione in corso della versione GameCube (GDJEB2, Rev 1 USA), con dtk-template, objdiff e ninja. È il modello di struttura che seguiamo per PS2. Nessun dato del gioco incluso.',
      lic:'Licenza',licd:'CC0 1.0: pubblico dominio.'},
  p4:{gh:'GitHub',ghd:'Progetti di reverse engineering e software di Xive080.',
      po:'Portfolio',pod:'Presto ci sarà un sito con tutti i miei progetti.',
      th:'Ringraziamenti',thd:'Questo lavoro si appoggia su:',
      tl:'Strumenti',tld:'Strumenti che lo rendono possibile:',
      lg:'Note legali',lgd:'Progetto amatoriale senza scopo di lucro. Digimon è un marchio di Bandai Namco e questo sito non è affiliato ad essa. Non si distribuiscono dati del gioco.'}
 },
 c:'Community',cn:'Digimon Modding Community (canale world-4)'}
};
var PANELS={
 1:function(t){var o=t.o.p1;return{lead:o.d,items:[
  {k:o.pr,d:o.prd,upd:'ours'},{k:o.eu,d:o.eud},{k:o.sr,d:o.srd},{k:o.gh,d:o.ghd,href:GH+'Xive080'},{k:t.o.p4.po,d:t.o.p4.pod,soon:1}]};},
 2:function(t){var o=t.o.p2;return{lead:'',items:[
  {k:o.rep,d:o.repd,href:GH+'Namek025/dw4-ps2-ai',upd:'namek'},{k:o.pr,d:o.prd,upd:'namek'},{k:o.mods,d:o.modsd,href:GH+'Namek025/dw4-mods'}]};},
 3:function(t){var o=t.o.p3;return{lead:'',items:[
  {k:o.rep,d:o.repd,href:GH+'ivanno4317/dw4-gc',upd:'gc'},{k:o.pr,d:o.prd,upd:'gc'},{k:o.lic,d:o.licd}]};},
 4:function(t){var o=t.o.p4;return{lead:'',items:[
  {k:o.th,d:o.thd,links:[['Namek025',GH+'Namek025'],['ivanno4317',GH+'ivanno4317'],[t.cn,null],['crashbashash \u00b7 DW4_Crown_Mod',GH+'crashbashash/DW4_Crown_Mod'],['wolfDM-woke \u00b7 digimon_world_4_tools',GH+'wolfDM-woke/digimon_world_4_tools']]},
  {k:o.tl,d:o.tld,links:[['splat',GH+'ethteck/splat'],['objdiff',GH+'encounter/objdiff'],['decomp.me','https://decomp.me'],['Ghidra','https://ghidra-sre.org']]},
  {k:o.lg,d:o.lgd}]};}
};
var DATA={updated:'2026-11-15',ours:{pct:22.7,funcs:9034,units:150,updated:'2026-11-15'},namek:{total:24.2,game:35.8,lua:99.5,pushed:'2026-11-04'},gc:{license:'CC0-1.0',pushed:'2026-11-12',pct:8.64,funcs:1180,total:23334}};
var lang='en',cur=0,sel={1:0,2:0,3:0,4:0},cfgs={};
var quads=document.querySelectorAll('.quad');
function el(tag,txt,cls){var e=document.createElement(tag);if(txt!=null)e.textContent=txt;if(cls)e.className=cls;return e;}
function fmtDate(s){try{return new Intl.DateTimeFormat(lang,{dateStyle:'medium'}).format(new Date(s+'T12:00:00'));}catch(e){return s;}}
function fmt(str){
  var P=function(v){try{return new Intl.NumberFormat(lang,{style:'percent',minimumFractionDigits:1,maximumFractionDigits:1}).format(v/100).replace(/\s?%/,' %');}catch(e){return v+' %';}};
  var I=function(v){try{return new Intl.NumberFormat(lang).format(v);}catch(e){return String(v);}};
  var m={pct:P(DATA.ours.pct),funcs:I(DATA.ours.funcs),units:I(DATA.ours.units),date:fmtDate(DATA.ours.updated),
    tot:P(DATA.namek.total),gcpct:P(DATA.gc.pct),gcf:I(DATA.gc.funcs),gct:I(DATA.gc.total),game:P(DATA.namek.game),lua:P(DATA.namek.lua)};
  return str.replace(/\{(\w+)\}/g,function(x,k){return m[k]!=null?m[k]:x;});
}
function build(n){
  var t=L[lang],c=PANELS[n](t);
  c.items.forEach(function(it){it.d=fmt(it.d);});
  cfgs[n]=c;
}
function renderQuad(q){
  var n=+q.dataset.n,c=cfgs[n],list=q.querySelector('.opts');
  list.replaceChildren();
  c.items.forEach(function(it,i){
    var li=el('li'),b=el('button');b.type='button';b.setAttribute('role','option');
    b.appendChild(el('span','◇','dia'));b.appendChild(el('span',it.k));
    if(it.href)b.appendChild(el('span','↗','ext'));
    b.addEventListener('click',function(e){e.stopPropagation();
      if(cur===n&&sel[n]===i&&it.href){window.open(it.href,'_blank','noopener');return;}
      activate(n,i,false);});
    li.appendChild(b);list.appendChild(li);
  });
  ring(q);paint(q);
}
function ring(q){
  var n=+q.dataset.n,r=q.querySelector('.ring'),p=q.querySelector('.pct'),v=n===1?DATA.ours.pct:(n===2?DATA.namek.total:(n===3?DATA.gc.pct:null));
  if(v==null){r.classList.add('deco');r.style.setProperty('--p',100);r.removeAttribute('role');p.textContent='';return;}
  r.classList.remove('deco');r.style.setProperty('--p',v);
  r.setAttribute('role','progressbar');r.setAttribute('aria-valuemin',0);r.setAttribute('aria-valuemax',100);r.setAttribute('aria-valuenow',v);
  r.setAttribute('aria-label',L[lang].o['p'+n].pr);
  p.textContent=fmt('{'+(n===1?'pct':(n===2?'tot':'gcpct'))+'}');
}
function paint(q){
  var n=+q.dataset.n,on=cur===n,c=cfgs[n],t=L[lang];
  q.classList.toggle('on',on);
  Array.prototype.forEach.call(q.querySelectorAll('.opts button'),function(b,i){
    var s=on&&i===sel[n];b.classList.toggle('sel',s);b.setAttribute('aria-selected',s);});
  var d=q.querySelector('.detail');d.replaceChildren();
  if(!on){d.replaceChildren();q.tabIndex=0;q.setAttribute('role','button');return;}
  q.removeAttribute('role');q.removeAttribute('tabindex');d.hidden=false;
  var it=c.items[sel[n]];
  if(c.lead&&sel[n]<0)d.appendChild(el('p',c.lead));
  d.appendChild(el('p',it.d));
  if(it.links){var ul=el('ul');it.links.forEach(function(l){var li=el('li');
    if(l[1]){var a=el('a',l[0]);a.href=l[1];a.target='_blank';a.rel='noopener noreferrer';li.appendChild(a);}else li.textContent=l[0];ul.appendChild(li);});d.appendChild(ul);}
  if(it.soon)d.appendChild(el('p',t.soon,'note'));
  if(it.upd){var dt=it.upd==='ours'?DATA.ours.updated:DATA[it.upd].pushed;d.appendChild(el('p',t.upd+': '+fmtDate(dt),'note'));}
  if(it.href){var a2=el('a',t.open+' ↗','open');a2.href=it.href;a2.target='_blank';a2.rel='noopener noreferrer';d.appendChild(a2);}
}
function activate(n,i,focus){
  var prev=cur;cur=n;
  if(n&&i!=null)sel[n]=i;
  quads.forEach(paint);
  if(focus){
    if(n){var b=quads[n-1].querySelectorAll('.opts button')[sel[n]];if(b)b.focus({preventScroll:true});}
    else if(prev)quads[prev-1].focus({preventScroll:true});
  }
  if(n&&focus&&window.innerWidth<=720)quads[n-1].scrollIntoView({block:'nearest',behavior:'smooth'});
}
function applyLang(){
  var t=L[lang];document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(function(n){var v=t[n.dataset.i18n];if(v!=null)n.textContent=v;});
  document.querySelectorAll('.langs button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===lang);});
  [1,2,3,4].forEach(build);quads.forEach(renderQuad);
}
quads.forEach(function(q){var n=+q.dataset.n;
});
quads.forEach(function(q){var n=+q.dataset.n;
  q.querySelector('.pad span:last-child').addEventListener('click',function(e){e.stopPropagation();activate(0,null,true);});
  q.addEventListener('keydown',function(e){if(cur!==n&&(e.key==='Enter'||e.key===' ')){e.preventDefault();e.stopPropagation();activate(n,null,true);}});
});
quads.forEach(function(q){q.addEventListener('click',function(){if(cur!==+q.dataset.n)activate(+q.dataset.n,null,false);});});
document.querySelectorAll('.langs button').forEach(function(b){b.addEventListener('click',function(){
  lang=b.dataset.lang;try{localStorage.setItem('sw4lang',lang);}catch(e){}applyLang();});});
document.addEventListener('keydown',function(e){
  if(e.ctrlKey||e.metaKey||e.altKey)return;var k=e.key,c=cfgs[cur];
  if(!splash.hidden){if(k.length===1||k==='Enter'||k.indexOf('Arrow')===0||k==='Escape'){e.preventDefault();enter();}return;}
  if(!cur){if(k>='1'&&k<='4')activate(+k,null,true);else if(k==='Escape'||k==='Backspace'){e.preventDefault();showSplash();}return;}
  if(k==='Escape'||k==='Backspace'){e.preventDefault();activate(0,null,true);}
  else if(k>='1'&&k<='4'){activate(+k,null,true);}
  else if(k==='ArrowRight'){e.preventDefault();activate(cur,(sel[cur]+1)%c.items.length,true);}
  else if(k==='ArrowLeft'){e.preventDefault();activate(cur,(sel[cur]-1+c.items.length)%c.items.length,true);}
  else if(k==='ArrowDown'){e.preventDefault();activate(cur,(sel[cur]+1)%c.items.length,true);}
  else if(k==='ArrowUp'){e.preventDefault();activate(cur,(sel[cur]-1+c.items.length)%c.items.length,true);}
  else if(k==='Enter'){var it=c.items[sel[cur]];if(it&&it.href){e.preventDefault();window.open(it.href,'_blank','noopener');}}
});
function nav(){return (navigator.language||'en').slice(0,2);}
try{var s=localStorage.getItem('sw4lang');lang=L[s]?s:(L[nav()]?nav():'en');}catch(e){lang=L[nav()]?nav():'en';}
var splash=document.getElementById('splash');
function showSplash(){splash.hidden=false;void splash.offsetWidth;splash.classList.remove('out');splash.focus();}
function enter(){if(splash.hidden)return;splash.classList.add('out');setTimeout(function(){splash.hidden=true;},450);
  if(cur){var b=quads[cur-1].querySelectorAll('.opts button')[sel[cur]];if(b)b.focus({preventScroll:true});}}
splash.addEventListener('click',enter);
var h=/^#p([1-4])$/.exec(location.hash);if(h)cur=+h[1];splash.focus();
applyLang();activate(cur,null,false);
fetch('data.json',{cache:'no-store'}).then(function(r){return r.ok?r.json():null;}).then(function(d){
  if(d&&d.ours&&d.namek&&d.gc){DATA=d;applyLang();activate(cur,null,false);}}).catch(function(){});
})();
