<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html
import ImageryLayer from '@arcgis/core/layers/ImageryLayer'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectGroupLayer from '../../mixins/injectGroupLayer'

export default {
  name: 'EImageryLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      name: 'ImageryLayer'
    }
  },

  created () {
    this.instantiate(ImageryLayer)
  }
}
</script>
