<template>
  <div>
    <slot
      v-if="booted"
      :groupLayer="getEsriObject()"
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, inject, provide, onBeforeUnmount } from 'vue'
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GroupLayer.html
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import { useConstructor, ConstructionProps, layerEvents } from '../../composables/useConstructor'

const props = defineProps(ConstructionProps)
const emit = defineEmits(layerEvents)
const getMap = inject('getMap')
const parent = props.addTo || (getMap && getMap())

const {
  instantiate,
  booted,
  getEsriObject
} = useConstructor({
  name: 'GroupLayer'
}, props, emit)

instantiate(GroupLayer, parent)

provide('getGroupLayer', getEsriObject)

onBeforeUnmount(() => {
  parent.remove(getEsriObject())

  emit('remove', getEsriObject())
})

</script>
