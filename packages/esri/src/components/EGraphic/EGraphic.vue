<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'
import injectGraphicsLayer from '@/mixins/injectGraphicsLayer'

export default {
  name: 'e-graphic',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin, injectGraphicsLayer],

  data() {
    return {
      moduleName: 'Graphic'
    }
  },

  computed: {
    parent () {
      return this.addTo || this.getGraphicsLayer() || this.getMapView().graphics
    }
  },

  methods: {
    addToHook() {
      if (!this.parent) console.error('[EGraphic] no parent "add" found')
      
      this.parent.add(this.module.Graphic)
    },
    beforeDestroyHook() {
      this.parent.remove(this.module.Graphic)

      this.$emit('remove', this.module.Graphic)
    }
  }
}
</script>

<style scoped></style>