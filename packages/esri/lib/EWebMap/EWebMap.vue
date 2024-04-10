<template>
  <div class="webmap">
    <slot
      v-if="booted"
      :map="getEsriObject()"
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, watch, provide } from 'vue'
import WebMap from '@arcgis/core/WebMap'
import { useConstructor, ConstructionProps, defaultEvents } from '../composables/useConstructor'

const props = defineProps(ConstructionProps)
const emit = defineEmits([...defaultEvents])

const {
  instantiate,
  booted,
  getEsriObject
} = useConstructor({
  name: 'WebMap',
  addToHook: () => {}
}, props, emit)

instantiate(WebMap)

provide('getMap', getEsriObject)

const changeBasemap = () => {
  const {
    properties: {
      basemap = ''
    } = {}
  } = props

  if (!basemap) {
    console.warn('[EWebMap] No basemap in properties')

    return
  }

  getEsriObject().basemap = basemap
}

watch(
  () => props.properties.basemap,
  changeBasemap
)
</script>
