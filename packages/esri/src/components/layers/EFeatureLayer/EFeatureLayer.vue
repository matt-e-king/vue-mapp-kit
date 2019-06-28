<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-feature-layer',

  inject: {
    getMap: {
      default: () => null
    }
  },

  mixins: [constructorMixin],

  data() {
    return {
      module: {
        FeatureLayer: null
      }
    }
  },

  methods: {
    afterInitHook() {
      if (!this.getMap()) console.error('[EGeoJSONLayer] no map found')
      this.getMap().add(this.module.FeatureLayer)
    }
  }
}
</script>

<style scoped></style>