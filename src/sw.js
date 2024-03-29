workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
self.addEventListener('install', event => {
    const asyncInstall = new Promise(resolve => {
      console.log("Waiting to resolve...")
      setTimeout(resolve, 5000)
    })
    event.waitUntil(asyncInstall)
  });

  self.addEventListener('activate', event => {
    console.log('activate')
  });

  workbox.routing.registerRoute(
    new RegExp('https:.*min\.(css|js)'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'cache'
    })
  );

