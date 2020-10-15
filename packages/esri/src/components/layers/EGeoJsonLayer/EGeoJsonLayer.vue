<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'e-geo-json-layer',

  mixins: [constructorMixin, injectMapMixin],

  data() {
    return {
      moduleName: 'GeoJSONLayer'
    }
  }
}
</script>
