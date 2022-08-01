<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryTileLayer.html
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectGroupLayer from '../../mixins/injectGroupLayer'

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
