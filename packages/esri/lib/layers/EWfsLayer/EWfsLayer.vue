<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WFSLayer.html
import WFSLayer from '@arcgis/core/layers/WFSLayer'
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectGroupLayer from '../../mixins/injectGraphicsLayer.js'

export default {
  name: 'EWfsLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      name: 'WFSLayer'
    }
  },

  created () {
    this.instantiate(WFSLayer)
  }
}
</script>
