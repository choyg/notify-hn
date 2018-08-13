var cacheName = 'shell-content';
var filesToCache = ['/base.css', '/app.js', '/idb.js', '/icon/icon192.png', '/'];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

this.addEventListener('fetch', function(event) {
  // it can be empty if you just want to get rid of that error
});
