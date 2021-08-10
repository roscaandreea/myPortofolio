const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
module.exports = function override(config, env) {
  config.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === "GenerateSW") {
      return new WorkboxWebpackPlugin.InjectManifest({
       swSrc: "./src/customServiceWorker.js",
       swDest: "serviceWorker.js"
      });
    }
    return plugin;
  });
  return config;
};

workbox.routing.registerRoute(
    new RegExp("./src"),
    workbox.strategies.NetworkFirst()
  );
  workbox.precaching.precacheAndRoute(self.__precacheManifest || [])