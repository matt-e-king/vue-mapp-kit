<template></template>

<script setup>
import { defineEmits, defineProps, inject, onBeforeUnmount } from 'vue'
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html
import WMSLayer from '@arcgis/core/layers/WMSLayer'
import { useConstructor, ConstructionProps, layerEvents } from '../../composables/useConstructor'

const props = defineProps(ConstructionProps)
const emit = defineEmits(layerEvents)
const getMap = inject('getMap')
const getGroupLayer = inject('getGroupLayer', undefined)
const parent = props.addTo || (getGroupLayer && getGroupLayer()) || (getMap && getMap())

const {
  instantiate,
  getEsriObject
} = useConstructor({
  name: 'WMSLayer'
}, props, emit)

instantiate(WMSLayer, parent)

onBeforeUnmount(() => {
  parent.remove(getEsriObject())

  emit('remove', getEsriObject())
})
</script>
