let CACHE_NAME = 'my-site-cache';

let urlsToCache = [
    './',
    './css/site.css',
    './assets/images/logo/logo521x521.png',
    './assets/images/logo/logo256x256.png',
    './assets/images/logo/logo192x192.png',
    './assets/images/logo/logo128x128.png',
    './assets/images/logo/logo72x72.png',
    './index.html',
    './info.html'
];

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(e){
    console.log('intercept req:' +e.request.url);
});