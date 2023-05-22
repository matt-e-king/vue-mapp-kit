<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryTileLayer.html
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectGroupLayer from '../../mixins/injectGraphicsLayer.js'

export default {
  name: 'EMapImageLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      name: 'MapImageLayer'
    }
  },

  created () {
    this.instantiate(MapImageLayer)
  }
}
</script>
