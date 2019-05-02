<template>
  <div class="mapView">
    <slot v-if="booted" v-bind:mapView="module.MapView"/>
  </div>
</template>

<script>
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-map-view',

  inject: {
    getMap: {
      default: () => null
    }
  },
  
  provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getMapView: this.getMapView
    }
  },

  mixins: [constructorMixin],

  data() {
    return {
      module: {
        MapView: null
      }
    }
  },

  methods: {
    afterInitHook() {
      console.log('map-view after loader init')
    },
    getMapView() {
      return this.module.MapView
    }
  },

  computed: {
    // this overrides mergeProps in constructorMixin
    // this merges with $props.properties passed in
    // MapView requires "map" key in properties passed to constructor
    // https://developers.arcgis.com/javascript/latest/sample-code/intro-mapview/index.html
    mergeProps() {
      if (!this.getMap()) console.error('[EMapView] no map found')
      return { map: this.getMap() }
    }
  }
}
</script>

<style scoped>
  /* .map {
    position: relative;
    width:100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  } */
</style>