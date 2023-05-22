<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html
import WMSLayer from '@arcgis/core/layers/WMSLayer'
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectGroupLayer from '../../mixins/injectGraphicsLayer.js'

export default {
  name: 'EWmsLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      name: 'WMSLayer'
    }
  },

  created () {
    this.instantiate(WMSLayer)
  }
}
</script>
