<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

export default {
  name: 'ELegend',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],

  props: {
    position: {
      type: String,
      default: 'bottom-left'
    }
  },

  data() {
    return {
      moduleName: 'Legend'
    }
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) console.error('[ELegend] no map view')
      this.getMapView().ui.add(this.module.Legend, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView()) console.error('[ELegend] no map view')
      return this.properties.view ? {} : { view: this.getMapView() }
    }
  }
}
</script>
