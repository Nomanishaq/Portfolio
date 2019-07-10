var cacheName = 'pwa-practice-v3';
var filesToCache = [
  '/',
  '/index.html',
  '/css/bootstrap.min.css',
  './css/cobox.css',
  './css/portfolio.css',
  './css/style.css',
  './fonts/glyphicons-halflings-regular.eot',
  './fonts/glyphicons-halflings-regular.svg',
  './fonts/glyphicons-halflings-regular.ttf',
  './fonts/glyphicons-halflings-regular.woff',
  './fonts/glyphicons-halflings-regular.woff2',
  './images/1-1.jpg',
  './images/1.jpg',
  './images/2-2.jpg',
  './images/2.jpg',
  './images/3-3.jpg',
  './images/3.jpg',
  './images/4-4.jpg',
  './images/4.jpg',
  './images/5-5.jpg',
  './images/5.jpg',
  './images/6-6.jpg',
  './images/6.jpg',
  './images/7-7.jpg',
  './images/7.jpg',
  './images/8-8.jpg',
  './images/8.jpg',
  './images/9-9.jpg',
  './images/9.jpg',
  './images/banner.jpg',
  './images/blank.gif',
  './images/loader.GIF',
  './images/loading.gif',
  './images/man.jpg',
  './images/nav.png',
  './images/social-icons.png',
  './js/bootstrap.min.js',
  './js/classie.js',
  './js/cobox.js',
  './js/grid3d.js',
  './js/helper.js',
  './js/modernizr.custom.js',
  './js/responsiveslides.min.js',
  '/main.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
          
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});
