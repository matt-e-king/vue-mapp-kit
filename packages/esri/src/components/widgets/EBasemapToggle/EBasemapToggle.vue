<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-basemap-toggle',

  inject: {
    getMapView: {
      default: () => null
    }
  },

  // constructor handles created()
  mixins: [constructorMixin],

  data() {
    return {
      module: {
        BasemapToggle: null
      }
    }
  },

  methods: {
    afterInitHook() {
      this.getMapView().ui.add(this.module.BasemapToggle, "top-right");
    }
  },

  computed: {
    mergeProps() {
      if (!this.getMapView()) console.error('[EBasemapToggle] no map view')
      return { view: this.getMapView() }
    }
  }
}
</script>

<style scoped></style>