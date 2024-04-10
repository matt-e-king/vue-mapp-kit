<template></template>

<script setup>
import { defineProps, inject } from 'vue'
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html
import ScaleBar from '@arcgis/core/widgets/ScaleBar'
import { useConstructor, ConstructionProps } from '../../composables/useConstructor'

const props = defineProps({
  ...ConstructionProps,
  position: {
    type: String,
    default: 'bottom-left'
  }
})
const getMapView = inject('getMapView')

const {
  instantiate
} = useConstructor({
  addToHook: (module) => {
    if (!getMapView()) console.error('[EScaleBar] no map view')
    getMapView().ui.add(module, props.position)
  },
  mergePropsHook: () => {
    if (!getMapView()) { console.error('[EMapView] No map instance for MapView') }
    return props.properties.view ? {} : { view: getMapView() }
  },
  name: 'ScaleBar'
}, props)

instantiate(ScaleBar)

</script>
