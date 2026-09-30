/* Offline-Speicher. Bei Änderungen die Versionsnummer erhöhen. */
var VERSION = 'pilger-1';
var FILES = ['./', 'aussen.webp', 'bilder.js', 'garten-0.webp', 'garten-1.webp', 'garten-2.webp', 'garten-3.webp', 'icon-192.png', 'icon-512.png', 'index.html', 'kapelle-0.webp', 'kapelle-1.webp', 'kapelle-2.webp', 'kapelle-3.webp', 'kapitel-1-fatima.js', 'kapitel-2-lourdes.js', 'manifest.webmanifest', 'schiff-0.webp', 'schiff-1.webp', 'schiff-2.webp', 'schiff-3.webp', 'spiel.js', 'style.css'];
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
