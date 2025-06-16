
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("math-game").then(cache => {
      return cache.addAll([
        "index.html",
        "script.js",
        "background.jpg",
        "manifest.json",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
