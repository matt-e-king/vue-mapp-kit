<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectGroupLayer from '../../mixins/injectGraphicsLayer.js'

export default {
  name: 'EFeatureLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      name: 'FeatureLayer'
    }
  },

  created () {
    this.instantiate(FeatureLayer)
  }
}
</script>
