<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer'
import constructorMixin from '../../../mixins/constructorMixin'
import injectMapMixin from '../../../mixins/injectMapMixin'
import injectGroupLayer from '../../../mixins/injectGroupLayer'

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
