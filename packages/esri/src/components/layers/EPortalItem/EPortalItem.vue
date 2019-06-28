<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-portal-item',

  inject: {
    getMap: {
      default: () => null
    }
  },

  mixins: [constructorMixin],

  mounted() {
    this.loaderInit()
      .then(([Layer]) => {
        Layer.fromPortalItem({
          ...this.properties
        })
      })
  },

  data() {
    return {
      noInstantiation: true,
      module: {
        Layer: null
      }
    }
  },

  methods: {
    afterInitHook() {
      if (!this.getMap()) console.error('[EPortalItem] no map found')

      this.module.Layer.fromPortalItem({ ...this.properties })
        .then(this.addLayer)
        .catch(e => { console.error(e)})
    },
    addLayer(layer) {
      this.getMap().add(layer)
    }
  }
}
</script>

<style scoped></style>