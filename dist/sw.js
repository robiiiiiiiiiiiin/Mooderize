self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        "/",
        //"/convolvers",
        "/convolvers/convolver_church.wav",
        //"/img/",
        "/img/bathroom.jpg",
        "/img/bonjour.jpg",
        "/img/emptymall.jpg",
        "/img/MMM_icon_32.png",
        "/img/MMM_icon_192.png",
        "/img/MMM_icon_512.png",
        "/img/MMM_maskable_icon.png",
        "/img/youtubeLogo.svg",
        "/index.html",
        //"/js/",
        "/js/bundle.js",
        "/js/recorder.worker.js",
        //"/styles/",
        "/styles/progressbar.css",
        "/styles/style.css"
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        let responseClone = response.clone();
        caches.open('v1').then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
      });
    }).catch(() => {
      return caches.match('/img/bonjour.jpg');
    })
  );
});