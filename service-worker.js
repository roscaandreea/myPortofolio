importScripts("/myPortofolio/precache-manifest.167769cbda8e0ff45a4a6cbd721e771a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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


