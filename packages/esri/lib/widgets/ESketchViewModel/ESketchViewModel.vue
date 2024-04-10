<template></template>

<script setup>
import { defineProps, defineEmits, inject, watch } from 'vue'
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel'
import { useConstructor, ConstructionProps, sketchEvents } from '../../composables/useConstructor'

const props = defineProps({
  ...ConstructionProps,
  tool: {
    type: String,
    default: ''
  },
  toolMode: {
    type: Object,
    default: () => ({ mode: 'hybrid' })
  }
})
const emit = defineEmits(sketchEvents)
const getMapView = inject('getMapView')
const getGraphicsLayer = inject('getGraphicsLayer', undefined)

const {
  instantiate,
  getEsriObject
} = useConstructor({
  addToHook: () => {},
  mergePropsHook: () => {
    if (!getMapView() || !getGraphicsLayer()) {
      console.error('[ESketchViewModel] no map view or no graphics layers')
    }
    return {
      ...(props.properties.layer ? {} : { layer: getGraphicsLayer() }),
      ...(props.properties.view ? {} : { view: getMapView() })
    }
  },
  name: 'SketchViewModel'
}, props, emit)

instantiate(SketchViewModel)

const setTool = (tool) => {
  if (tool) {
    console.log(tool)
    getEsriObject().create(tool, props.toolMode)
  } else {
    // this.module.SketchViewModel.cancel()
  }
}

watch(
  () => props.tool,
  setTool
)
</script>
