<template>
  <div class="sceneView">
    <slot v-if="booted" v-bind:sceneView="module.SceneView"/>
  </div>
</template>

<script>
import SceneView from '@arcgis/core/views/SceneView'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'

export default {
  name: 'ESceneView',

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

  data() {
    return {
      name: 'SceneView'
    }
  },

  created () {
    this.instantiate(SceneView)
  },

  methods: {
    // override
    addToHook() {},
    mergePropsHook () {
      if (!this.getMap()) console.error('[ESceneView] no parent map found')
      return this.properties.map ? {} : { map: this.getMap() }
    },
    getMapView() {
      return this.module
    }
  }
}
</script>
