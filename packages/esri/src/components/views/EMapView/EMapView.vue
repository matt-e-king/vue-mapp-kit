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
      moduleName: 'MapView'
    }
  },

  computed: {
    // this overrides mergeProps in constructorMixin
    // this merges with $props.properties passed in
    // MapView requires "map" key in properties passed to constructor
    // https://developers.arcgis.com/javascript/latest/sample-code/intro-mapview/index.html
    map () {
      const {
        map
      } = this.properties

      return map ? map : this.getMap()
    },
    mergeProps() {
      if (!this.map) console.error('[EMapView] no parent map found')

      return this.properties.map ? {} : { map: this.getMap() }
    }
  },

  methods: {
    // override
    addToHook() {},
    getMapView() {
      return this.module.MapView
    }
  }
}
</script>
