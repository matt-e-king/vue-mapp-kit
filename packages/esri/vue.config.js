module.exports = {
  lintOnSave: false,
  css: {
    modules: true,
    extract: false
  },
  configureWebpack: {
    externals: [
      'esri-loader',
      'vue',
      'vuex'
    ]
  }
};