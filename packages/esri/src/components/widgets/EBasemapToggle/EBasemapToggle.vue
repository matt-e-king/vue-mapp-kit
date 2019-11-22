<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

export default {
  name: 'e-basemap-toggle',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data() {
    return {
      module: {
        BasemapToggle: null
      } 
    }
  },

  methods: {
    afterInitHook() {
      const parentView = this.addTo ? this.addTo : this.getMapView()

      if (!parentView) console.error('[EBasemapToggle] no map view')
      parentView.ui.add(this.module.BasemapToggle, this.position)
    }
  },

  computed: {
    mergeProps() {
      const parentView = this.addTo ? this.addTo : this.getMapView()

      if (!parentView) console.error('[EBasemapToggle] no map view')
      return { view: parentView }
    }
  }
}
</script>

<style scoped></style>