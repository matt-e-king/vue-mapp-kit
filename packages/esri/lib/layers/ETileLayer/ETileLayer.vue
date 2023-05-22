<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html
import TileLayer from '@arcgis/core/layers/TileLayer'
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectGroupLayer from '../../mixins/injectGraphicsLayer.js'

export default {
  name: 'ETileLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      name: 'TileLayer'
    }
  },

  created () {
    this.instantiate(TileLayer)
  }
}
</script>
