// Service Worker para cachear el video y recursos pesados
const CACHE_NAME = 'uttecam-v5';
const VIDEO_CACHE = 'uttecam-video-v5';

// Recursos a cachear inmediatamente
const STATIC_CACHE = [
  '/',
  '/logo.png',
  '/hero/uttecamNavidad.png',
  '/hero/portada_navideña.png',
  '/hero/hero1.jpg',
  '/hero/hero2.jpg',
];

// Recursos de video (caché separada para videos grandes)
const VIDEO_RESOURCES = [
  '/hero/UTTECAM.mp4'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Caché estática
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_CACHE);
      }),
      // Caché de video (no bloqueante)
      caches.open(VIDEO_CACHE).then((cache) => {
        return cache.addAll(VIDEO_RESOURCES).catch((error) => {
          console.log('Video cache failed, will cache on first request:', error);
        });
      })
    ]).then(() => {
      self.skipWaiting();
    })
  );
});

// Activación - limpiar cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== VIDEO_CACHE)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// Estrategia de fetch
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo cachear recursos de nuestro dominio
  if (url.origin !== location.origin) {
    return;
  }

  // Estrategia para videos: Cache First (priorizar caché)
  if (request.url.includes('/hero/') && request.url.endsWith('.mp4')) {
    event.respondWith(
      caches.open(VIDEO_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            // Si está en caché, devolverlo inmediatamente
            return cachedResponse;
          }

          // Si no está en caché, descargarlo y guardarlo
          return fetch(request).then((networkResponse) => {
            // Clonar la respuesta porque solo puede usarse una vez
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Estrategia para imágenes: Cache First
  if (request.url.match(/\.(jpg|jpeg|png|gif|webp|svg|avif)$/)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Para otros recursos: Network First (red primero, caché como respaldo)
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Si es exitosa, guardar en caché
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Si falla la red, intentar desde caché
        return caches.match(request);
      })
  );
});
