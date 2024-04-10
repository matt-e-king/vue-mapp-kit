<template></template>

<script setup>
import { defineEmits, defineProps, inject, onBeforeUnmount } from 'vue'
import Graphic from '@arcgis/core/Graphic'
import { useConstructor, ConstructionProps, defaultEvents } from '../composables/useConstructor'

const props = defineProps(ConstructionProps)
const emit = defineEmits([...defaultEvents])
const getMapView = inject('getMapView')
const getGraphicsLayer = inject('getGraphicsLayer', undefined)
const parent = props.addTo || (getGraphicsLayer && getGraphicsLayer()) || (getMapView && getMapView().graphics)

const {
  instantiate,
  getEsriObject
} = useConstructor({
  name: 'Graphic'
}, props, emit)

instantiate(Graphic, parent)

onBeforeUnmount(() => {
  parent.remove(getEsriObject())

  emit('remove', getEsriObject())
})
</script>
