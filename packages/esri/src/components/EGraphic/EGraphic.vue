<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import Graphic from '@arcgis/core/Graphic'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapViewMixin from '../../mixins/injectMapViewMixin'
import injectGraphicsLayer from '../../mixins/injectGraphicsLayer'

export default {
  name: 'EGraphic',

  mixins: [
    constructorMixin,
    injectMapViewMixin,
    injectGraphicsLayer
  ],

  data() {
    return {
      name: 'Graphic'
    }
  },

  created () {
    this.instantiate(Graphic)
  },

  methods: {
    getParent () {
      return this.addTo || this.getGraphicsLayer() || this.getMapView().graphics
    },
    addToHook() {
      if (!this.getParent()) console.error('[EGraphic] no parent "add" found')
      
      this.getParent().add(this.module)
    },
    beforeDestroyHook() {
      this.getParent().remove(this.module)

      this.$emit('remove', this.module)
    }
  }
}
</script>

<style scoped></style>