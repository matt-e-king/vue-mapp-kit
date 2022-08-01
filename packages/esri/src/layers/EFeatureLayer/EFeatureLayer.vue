<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectGroupLayer from '../../mixins/injectGroupLayer'

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
