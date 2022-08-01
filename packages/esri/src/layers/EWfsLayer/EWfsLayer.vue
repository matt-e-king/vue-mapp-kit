<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WFSLayer.html
import WFSLayer from '@arcgis/core/layers/WFSLayer'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectGroupLayer from '../../mixins/injectGroupLayer'

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
