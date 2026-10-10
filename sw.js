var CACHE='workout-board-v1';
var SHELL=['./','index.html','data.js','manifest.webmanifest','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.method!=='GET')return;
  var url=new URL(req.url);
  var isFont=url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com';
  if(isFont){
    e.respondWith(caches.open(CACHE).then(function(c){return c.match(req).then(function(hit){
      var net=fetch(req).then(function(r){c.put(req,r.clone());return r}).catch(function(){return hit});
      return hit||net;
    })}));
    return;
  }
  if(url.origin!==location.origin)return;
  e.respondWith(fetch(req).then(function(r){
    var copy=r.clone();caches.open(CACHE).then(function(c){c.put(req,copy)});return r;
  }).catch(function(){return caches.match(req).then(function(hit){return hit||caches.match('index.html')})}));
});
