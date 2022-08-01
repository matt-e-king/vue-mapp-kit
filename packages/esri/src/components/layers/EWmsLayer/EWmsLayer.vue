<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html
import WMSLayer from '@arcgis/core/layers/WMSLayer'
import constructorMixin from '../../../mixins/constructorMixin'
import injectMapMixin from '../../../mixins/injectMapMixin'
import injectGroupLayer from '../../../mixins/injectGroupLayer'

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
