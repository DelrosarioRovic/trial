const CACHE_NAME = 'legends-todo-v1';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './css/login-carousel.css',
  './css/login.css',
  './js/auth-transition.js',
  './js/login-carousel.js',
  './js/prevent-zoom.js',
  './assets/images/login-carousel-1.jpg',
  './assets/images/login-carousel-2.jpg',
  './assets/images/login-carousel-3.jpg',
  './assets/icons/google.png',
  './assets/icons/facebook.png',
  './assets/icons/twitter-alt.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});