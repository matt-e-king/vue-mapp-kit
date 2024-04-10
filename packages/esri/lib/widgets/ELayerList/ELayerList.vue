<template></template>

<script setup>
import { defineProps, inject } from 'vue'
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html
import LayerList from '@arcgis/core/widgets/LayerList'
import { useConstructor, ConstructionProps } from '../../composables/useConstructor'

const props = defineProps({
  ...ConstructionProps,
  position: {
    type: String,
    default: 'top-right'
  }
})
const getMapView = inject('getMapView')

const {
  instantiate
} = useConstructor({
  addToHook: (module) => {
    if (!getMapView()) console.error('[ELayerList] no map view')
    getMapView().ui.add(module, props.position)
  },
  mergePropsHook: () => {
    if (!getMapView()) { console.error('[ELayerList] No map instance for MapView') }
    return props.properties.view ? {} : { view: getMapView() }
  },
  name: 'LayerList'
}, props)

instantiate(LayerList)
</script>
