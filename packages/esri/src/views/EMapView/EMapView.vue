<template>
  <div class="mapView">
    <slot
      v-if="booted"
      :mapView="module"
    />
  </div>
</template>

<script>
import MapView from '@arcgis/core/views/MapView'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'

export default {
  name: 'EMapView',

  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  provide() {
    return {
      // this will get injected into all children
      getMapView: this.getMapView
    }
  },

  props: {
    events: {
      type: Array,
      default: () => ([]) // TODO: add validator
    }
  },

  data() {
    return {
      name: 'MapView'
    }
  },

  created () {
    this.instantiate(MapView)
  },

  methods: {
    // override
    addToHook() {},
    /**
     * MapView requires a property that references the map
     * Using a method to ensure the map instance doesn't become an observable
     */
    mergePropsHook () {
      if (!this.getMap()) { console.error('[EMapView] No map instance for MapView') }
      return this.properties.map ? {} : { map: this.getMap() }
    },
    getMapView() {
      return this.module
    }
  }
}
</script>
