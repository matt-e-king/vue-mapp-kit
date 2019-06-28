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
      this.getMapView().ui.add(this.module.BasemapToggle, this.position);
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