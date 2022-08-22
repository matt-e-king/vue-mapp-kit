const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  configureWebpack: {
    externals: [
      'leaflet',
      'vue',
      'vuex'
    ]
  }
})
