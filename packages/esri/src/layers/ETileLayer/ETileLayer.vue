<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html
import TileLayer from '@arcgis/core/layers/TileLayer'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectGroupLayer from '../../mixins/injectGroupLayer'

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
