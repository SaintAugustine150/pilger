/* Offline-Speicher. Bei Änderungen die Versionsnummer erhöhen. */
var VERSION = 'pilger-6';
/* Die Bilder kommen automatisch aus bilder.js, hier stehen nur Code und Symbole */
self.window = self;
importScripts('bilder.js');
var FILES = ['./', 'bilder.js', 'icon-192.png', 'icon-512.png', 'index.html', 'kapitel-1-fatima.js', 'kapitel-2-lourdes.js', 'manifest.webmanifest', 'spiel.js', 'style.css']
  .concat(self.BILDER.kathedrale.map(function (k) { return 'bilder/kathedrale/' + k + '.webp'; }))
  .concat(self.BILDER.karten.map(function (k) { return 'bilder/karten/' + k + '.webp'; }))
  .concat((self.BILDER.wege || []).map(function (k) { return 'bilder/wege/' + k + '.webp'; }));
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var isImg = /\.(webp|png)$/.test(new URL(req.url).pathname);
  if (isImg) {
    /* Bilder: zuerst aus dem Speicher, sonst aus dem Netz */
    e.respondWith(caches.match(req).then(function (hit) {
      return hit || fetch(req).then(function (res) {
        var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(req, copy); }); return res;
      });
    }));
  } else {
    /* Code und Texte: zuerst aus dem Netz (damit Updates sofort da sind), offline aus dem Speicher */
    e.respondWith(fetch(req).then(function (res) {
      var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(req, copy); }); return res;
    }).catch(function () { return caches.match(req); }));
  }
});
