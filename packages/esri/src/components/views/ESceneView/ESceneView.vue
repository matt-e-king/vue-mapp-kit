<template>
  <div class="sceneView">
    <slot v-if="booted" v-bind:sceneView="module.SceneView"/>
  </div>
</template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'e-scene-view',

  mixins: [constructorMixin, injectMapMixin],

  provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getMapView: this.getMapView
    }
  },

  data() {
    return {
      module: {
        SceneView: null
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

      if (!parentMap) console.error('[ESceneView] no map found')

      return { map: parentMap }
    }
  },

  methods: {
    afterInitHook() {
      console.log('[EMapView] Overriding afterInitHook')
    },
    getMapView() {
      return this.module.SceneView
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