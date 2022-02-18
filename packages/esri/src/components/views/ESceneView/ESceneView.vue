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
      moduleName: 'SceneView'
    }
  },

  methods: {
    // override
    addToHook() {},
    mergePropsHook () {
      if (!this.getMap()) console.error('[ESceneView] no parent map found')
      return this.properties.map ? {} : { map: this.getMap() }
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