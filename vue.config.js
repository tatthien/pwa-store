const path = require('path')

module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, './src/styles/config.styl')
        ]
      },
      css: {
        localIdentName: '_[hash:base64:8]'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://lab.inbusiness.no/wp-json/wc/v2',
        pathRewrite: {
          'api': '/'
        },
        changeOrigin: true
      }
    }
  },
  pwa: {
    workboxOptions: {
      runtimeCaching: [{
        urlPattern: '/api/',
        handler: 'cacheFirst'
      }]
    }
  }
}
