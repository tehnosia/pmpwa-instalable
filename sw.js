self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('portal-medis').then(function(cache) {
     return cache.addAll([
       '/pmpwa-instalable/',
       '/pmpwa-instalable/index.html',
       '/pmpwa-instalable/index.js',
       '/pmpwa-instalable/style.css',
       '/pmpwa-instalable/images/pmlogo.jpg',
     ]);
   })
 );
});
self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
