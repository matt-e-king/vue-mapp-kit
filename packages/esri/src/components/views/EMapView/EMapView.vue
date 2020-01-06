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
      type: Object,
      default: () => ({}) // TODO: add validator
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
    afterLoadedHook() {
      for (const eventType in this.events) {
        console.log(eventType)

        this.module.MapView.on(eventType, (event) => {
          this.module.MapView.hitTest(event)
            .then((response) => {
              if (typeof this.events[eventType] === 'function') {
                this.events[eventType](response)
              } else {
                console.warning(`${eventType} value must be a function`)
              }
            })
        })
      }
    },
    getMapView() {
      return this.module.MapView
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