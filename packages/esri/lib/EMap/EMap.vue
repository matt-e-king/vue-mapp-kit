<template>
  <div class="map">
    <slot
      v-if="booted"
      :map="getEsriObject()"
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, watch, provide } from 'vue'
import Map from '@arcgis/core/Map'
import { useConstructor, ConstructionProps, defaultEvents } from '../composables/useConstructor'

const props = defineProps(ConstructionProps)
const emit = defineEmits([...defaultEvents])

const {
  instantiate,
  booted,
  getEsriObject
} = useConstructor({
  name: 'Map',
  addToHook: () => {}
}, props, emit)

instantiate(Map)

provide('getMap', getEsriObject)

const changeBasemap = () => {
  const {
    properties: {
      basemap = ''
    } = {}
  } = props

  if (!basemap) {
    console.warn('No basemap in properties')

    return
  }

  getEsriObject().basemap = basemap
}

watch(
  () => props.properties.basemap,
  changeBasemap
)

</script>
