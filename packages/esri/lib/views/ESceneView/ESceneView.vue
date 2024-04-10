<template>
  <div class="sceneView">
    <slot
      v-if="booted"
      :sceneView="getEsriObject()"
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps, inject, provide, onBeforeUnmount } from 'vue'
import SceneView from '@arcgis/core/views/SceneView'
import { useConstructor, ConstructionProps, viewEvents } from '../../composables/useConstructor'

const props = defineProps(ConstructionProps)
const emit = defineEmits(viewEvents)
const getMap = inject('getMap')

const {
  instantiate,
  booted,
  getEsriObject
} = useConstructor({
  name: 'SceneView',
  addToHook: () => {},
  mergePropsHook: () => {
    if (!getMap()) { console.error('[ESceneView] No map instance for SceneView') }
    return props.properties.map ? {} : { map: getMap() }
  }
}, props, emit)

instantiate(SceneView)

provide('getMapView', getEsriObject)

onBeforeUnmount(() => {
  emit('remove', getEsriObject())
  getMap().remove(getEsriObject())
})

</script>
