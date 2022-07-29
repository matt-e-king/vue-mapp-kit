module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: [
      'leaflet',
      'lodash.filter',
      'lodash.foreach',
      'lodash.reduce',
      'lodash.values',
      'vue',
      'vuex'
    ]
  }
};