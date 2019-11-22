<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'e-portal-item',

  mixins: [constructorMixin, injectMapMixin],

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
      const parentMap = this.addTo ? this.addTo : this.getMap()

      if (!parentMap) console.error('[EPortalItem] no map found')

      this.module.Layer.fromPortalItem({ ...this.properties })
        .then(layer => {
          parentMap.add(layer)
        })
        .catch(e => { console.error(e)})
    }
  }
}
</script>

<style scoped></style>