<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html
import Sketch from '@arcgis/core/widgets/Sketch'
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapViewMixin from '../../mixins/injectMapViewMixin.js'
import injectGraphicsLayer from '../../mixins/injectGraphicsLayer.js'

export default {
  name: 'ESketch',

  mixins: [
    constructorMixin,
    injectMapViewMixin,
    injectGraphicsLayer
  ],

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data() {
    return {
      name: 'Sketch'
    }
  },

  created () {
    this.instantiate(Sketch)
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) { console.error('[ESketch] no map view') }
      this.getMapView().ui.add(this.module, this.position)
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
