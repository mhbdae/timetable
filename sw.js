/* Makes the timetable installable and usable offline.
   Pages are fetched fresh when online (so updates show up) and served from the cache when offline. */
const CACHE = "timetable-v1";
const CORE = ["./", "index.html", "blank.html", "manifest.webmanifest", "manifest-blank.webmanifest",
              "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(CORE.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const url = new URL(r.url);
  const same = url.origin === self.location.origin;
  const fonts = /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!same && !fonts) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (fonts){
      const hit = await cache.match(r);
      if (hit) return hit;
      try { const res = await fetch(r); cache.put(r, res.clone()); return res; } catch(err){ return Response.error(); }
    }
    try {
      const res = await fetch(r);
      if (res.ok) cache.put(r, res.clone());
      return res;
    } catch(err){
      const hit = await cache.match(r, { ignoreSearch:true });
      if (hit) return hit;
      if (r.mode === "navigate"){ const home = await cache.match("index.html") || await cache.match("./"); if (home) return home; }
      return Response.error();
    }
  })());
});
