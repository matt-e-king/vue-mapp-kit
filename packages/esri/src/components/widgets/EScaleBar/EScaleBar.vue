<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

export default {
  name: 'EScaleBar',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],

  props: {
    position: {
      type: String,
      default: 'top-left'
    }
  },

  data() {
    return {
      moduleName: 'ScaleBar'
    }
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) console.error('[EScaleBar] no map view')
      this.getMapView().ui.add(this.module.ScaleBar, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView()) console.error('[EScaleBar] no map view')
      return this.properties.view ? {} : { view: this.getMapView() }
    }
  }
}
</script>
