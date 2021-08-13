importScripts("/myPortofolio/precache-manifest.63e03d166e1fe1ef288de526843d7de0.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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


