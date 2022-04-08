<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'
import injectGroupLayer from '@/mixins/injectGroupLayer'

export default {
  name: 'e-geo-json-layer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  data() {
    return {
      moduleName: 'GeoJSONLayer'
    }
  }
}
</script>
