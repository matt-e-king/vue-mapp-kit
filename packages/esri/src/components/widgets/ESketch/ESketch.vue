<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'
import injectGraphicsLayer from '@/mixins/injectGraphicsLayer'

export default {
  name: 'ESketch',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin, injectGraphicsLayer],

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data() {
    return {
      moduleName: 'Sketch' 
    }
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) { console.error('[ESketch] no map view') }
      this.getMapView().ui.add(this.module.Sketch, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView() || !this.getGraphicsLayer()) {
        console.error('[ESketch] no map view or no graphics layers')
      }
      return {
        ...(this.properties.layer ? {} : { layer: this.getGraphicsLayer() }),
        ...(this.properties.view ? {} : { view: this.getMapView() })
      }
    }
  }
}
</script>
