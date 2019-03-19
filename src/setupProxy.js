const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("Setting up the proxy.");
  app.use(proxy('/api/', { target: 'http://localhost:4005/', changeOrigin: true }));
};