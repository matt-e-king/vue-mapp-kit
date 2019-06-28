<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-geo-json-layer',

  inject: {
    getMap: {
      default: () => null
    }
  },

  mixins: [constructorMixin],

  data() {
    return {
      module: {
        GeoJSONLayer: null
      }
    }
  },

  methods: {
    afterInitHook() {
      if (!this.getMap()) console.error('[EGeoJSONLayer] no map found')
      this.getMap().add(this.module.GeoJSONLayer)
    }
  }
}
</script>

<style scoped></style>