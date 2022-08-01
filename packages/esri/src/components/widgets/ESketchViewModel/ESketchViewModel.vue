<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch-SketchViewModel.html
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel'
import constructorMixin from '../../../mixins/constructorMixin'
import injectMapViewMixin from '../../../mixins/injectMapViewMixin'
import injectGraphicsLayer from '../../../mixins/injectGraphicsLayer'

export default {
  name: 'e-sketch-view-model',

  mixins: [constructorMixin, injectMapViewMixin, injectGraphicsLayer],

  props: {
    tool: {
      type: String,
      default: ''
    },
    toolMode: {
      type: Object,
      default: () => ({ mode: 'hybrid' })
    }
  },

  data() {
    return {
      name: 'SketchViewModel'
    }
  },

  created () {
    this.instantiate(SketchViewModel)
  },

  watch: {
    tool: 'setTool'
  },

  // @todo use "watchUtils" to watch this.module.activeTool
  // or think of some way to keep tool active on.create success

  methods: {
    // override
    addToHook() {},
    mergePropsHook () {
      if (!this.getMapView() || !this.getGraphicsLayer()) {
        console.error('[ESketch] no map view or no graphics layers')
      }
      return {
        ...(this.properties.layer ? {} : { layer: this.getGraphicsLayer() }),
        ...(this.properties.view ? {} : { view: this.getMapView() })
      }
    },
    setTool (tool) {
      if (tool) {
        this.module.create(tool, this.toolMode)
      } else {
        // this.module.SketchViewModel.cancel()
      }
    }
  }
}
</script>
