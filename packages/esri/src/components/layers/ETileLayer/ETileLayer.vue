<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'ETileLayer',

  mixins: [constructorMixin, injectMapMixin],

  data() {
    return {
      moduleName: 'TileLayer'
    }
  }
}
</script>
