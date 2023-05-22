<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectGroupLayer from '../../mixins/injectGraphicsLayer.js'

export default {
  name: 'EGeoJsonLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      name: 'GeoJSONLayer'
    }
  },

  created () {
    this.instantiate(GeoJSONLayer)
  }
}
</script>
