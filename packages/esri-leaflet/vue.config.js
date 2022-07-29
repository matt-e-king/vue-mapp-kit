module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: [
      'leaflet',
      'esri-leaflet',
      'esri-leaflet-cluster',
      'leaflet.markercluster',
      'lodash.filter',
      'lodash.foreach',
      'lodash.reduce',
      'lodash.values',
      '@vue-mapp-kit/leaflet',
      'vue',
      'vuex'
    ]
  }
};
