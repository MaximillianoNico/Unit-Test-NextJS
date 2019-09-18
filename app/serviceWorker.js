const CACHE_NAME = 'ui-blogdev';
const urlsToCache = ['/'];

self.addEventListener('install', (event) => {
  const preLoaded = caches.open(CACHE_NAME)
    .then((cache) => {
      cache.addAll(urlsToCache);
    });

  event.waitUntil(preLoaded);
});

self.addEventListener('fetch', (event) => {
  const preLoaded = caches.match(event.request)
    .then((match) => {
      match || fetch(event.request);
    });

  event.respondWith(preLoaded);
});
