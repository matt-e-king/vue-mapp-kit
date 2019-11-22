<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

export default {
  name: 'e-graphic',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],

  data() {
    return {
      module: {
        Graphic: null
      }
    }
  },

  methods: {
    afterInitHook() {
      const parentView = this.addTo ? this.addTo : this.getMapView().graphics

      if (!parentView) console.error('[EGraphic] no parent collection found')
      
      parentView.add(this.module.Graphic)
    }
  },
}
</script>

<style scoped></style>