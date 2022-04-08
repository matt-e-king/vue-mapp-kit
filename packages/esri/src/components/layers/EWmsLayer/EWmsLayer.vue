<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'
import injectGroupLayer from '@/mixins/injectGroupLayer'

export default {
  name: 'EWmsLayer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      moduleName: 'WMSLayer'
    }
  }
}
</script>
