const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  css: {
    extract: false
  },
  configureWebpack: {
    externals: [
      'esri-loader',
      // Regex
      /^(@arcgis\/core).*/
    ]
  },
  transpileDependencies: true
})
