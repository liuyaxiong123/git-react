//http-proxy-middleware
const { createProxyMiddleware:proxy } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:3008',
            changeOrigin: true
        })
    )
}