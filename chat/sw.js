var CACHE = 'cr-chat-v1';
var FILES = ['./','index.html','manifest.json','config.js','img/cr4-icon-192.png','img/cr4-icon-512.png'];
self.addEventListener('install', function(e){ e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}).then(function(){return self.skipWaiting();})); });
self.addEventListener('activate', function(e){ e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==CACHE;}).map(function(x){return caches.delete(x);}));}).then(function(){return self.clients.claim();})); });
self.addEventListener('fetch', function(e){ e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(CACHE).then(function(cc){cc.put(e.request,c);});return r;}).catch(function(){return caches.match(e.request,{ignoreSearch:true});})); });
