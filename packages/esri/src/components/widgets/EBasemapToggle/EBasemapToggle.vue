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
      moduleName: 'BasemapToggle'
    }
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) console.error('[EBasemapToggle] no MapView')
      this.getMapView().ui.add(this.module.BasemapToggle, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView()) console.error('[EBasemapToggle] no MapView')
      return this.properties.view ? {} : { view: this.getMapView() }
    }
  }
}
</script>
