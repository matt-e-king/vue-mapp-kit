<template>
  <div>
    <slot
      v-if="booted"
      :graphicsLayer="getEsriObject()"
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, inject, provide, onBeforeUnmount } from 'vue'
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import { useConstructor, ConstructionProps, layerEvents } from '../../composables/useConstructor'

const props = defineProps(ConstructionProps)
const emit = defineEmits(layerEvents)
const getMap = inject('getMap')
const getGroupLayer = inject('getGroupLayer', undefined)
const parent = props.addTo || (getGroupLayer && getGroupLayer()) || (getMap && getMap())

const {
  instantiate,
  booted,
  getEsriObject
} = useConstructor({
  name: 'GraphicsLayer'
}, props, emit)

instantiate(GraphicsLayer, parent)

provide('getGraphicsLayer', getEsriObject)

onBeforeUnmount(() => {
  parent.remove(getEsriObject())

  emit('remove', getEsriObject())
})

</script>
