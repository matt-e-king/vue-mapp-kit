<template>
  <div class="mapView">
    <slot v-if="booted" v-bind:mapView="module.MapView"/>
  </div>
</template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'EMapView',

  mixins: [constructorMixin, injectMapMixin],

  provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
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
      moduleName: 'MapView'
    }
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
      return this.module.MapView
    }
  }
}
</script>
