<template>
  <div class="mapView">
    <slot v-if="booted" v-bind:mapView="module.MapView"/>
  </div>
</template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'e-map-view',

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
      module: {
        MapView: null
      }
    }
  },

  computed: {
    // this overrides mergeProps in constructorMixin
    // this merges with $props.properties passed in
    // MapView requires "map" key in properties passed to constructor
    // https://developers.arcgis.com/javascript/latest/sample-code/intro-mapview/index.html
    mergeProps() {
      const parentMap = this.addTo ? this.addTo : this.getMap()

      if (!parentMap) console.error('[EPortalItem] no map found')
      return { map: parentMap }
    }
  },

  methods: {
    afterInitHook() {
      console.log('[EMapView] Overriding afterInitHook')
    },
    getMapView() {
      return this.module.MapView
    }
  }
}
</script>
