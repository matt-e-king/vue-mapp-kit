<template>
  <div class="mapView">
    <slot
      v-if="booted"
      :mapView="getEsriObject()"
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, inject, provide, onBeforeUnmount } from 'vue'
import MapView from '@arcgis/core/views/MapView'
import { useConstructor, ConstructionProps, viewEvents } from '../../composables/useConstructor'

const props = defineProps(ConstructionProps)
const emit = defineEmits(viewEvents)
const getMap = inject('getMap')

const {
  instantiate,
  booted,
  getEsriObject
} = useConstructor({
  name: 'MapView',
  addToHook: () => {},
  mergePropsHook: () => {
    if (!getMap()) { console.error('[EMapView] No map instance for MapView') }
    return props.properties.map ? {} : { map: getMap() }
  }
}, props, emit)

instantiate(MapView)

provide('getMapView', getEsriObject)

onBeforeUnmount(() => {
  emit('remove', getEsriObject())
  getMap().remove(getEsriObject())
})

</script>
