<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryTileLayer.html
import ImageryTileLayer from '@arcgis/core/layers/ImageryTileLayer'
import constructorMixin from '../../../mixins/constructorMixin'
import injectMapMixin from '../../../mixins/injectMapMixin'
import injectGroupLayer from '../../../mixins/injectGroupLayer'

export default {
  name: 'EImageryTileLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      name: 'ImageryTileLayer'
    }
  },

  created () {
    this.instantiate(ImageryTileLayer)
  }
}
</script>
