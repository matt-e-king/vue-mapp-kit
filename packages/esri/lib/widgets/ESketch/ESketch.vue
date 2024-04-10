<template></template>

<script setup>
import { defineProps, inject, defineEmits } from 'vue'
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html
import Sketch from '@arcgis/core/widgets/Sketch'
import { useConstructor, ConstructionProps, sketchEvents } from '../../composables/useConstructor'

const props = defineProps({
  ...ConstructionProps,
  position: {
    type: String,
    default: 'top-right'
  }
})
const emit = defineEmits(sketchEvents)
const getMapView = inject('getMapView')
const getGraphicsLayer = inject('getGraphicsLayer', undefined)

const {
  instantiate
} = useConstructor({
  addToHook: (module) => {
    if (!getMapView()) console.error('[ESketch] no map view')
    getMapView().ui.add(module, props.position)
  },
  mergePropsHook: () => {
    if (!getMapView() || !getGraphicsLayer()) {
      console.error('[ESketch] no map view or no graphics layers')
    }
    return {
      ...(props.properties.layer ? {} : { layer: getGraphicsLayer() }),
      ...(props.properties.view ? {} : { view: getMapView() })
    }
  },
  name: 'Sketch'
}, props, emit)

instantiate(Sketch)
</script>
