const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  css: {
    extract: false
  },
  configureWebpack: {
    externals: [
      // Regex
      /^(@arcgis\/core).*/
    ]
  },
  transpileDependencies: true
})
