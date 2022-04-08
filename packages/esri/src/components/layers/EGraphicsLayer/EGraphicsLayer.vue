<template>
  <div>
    <slot v-if="booted" v-bind:graphicsLayer="module.GraphicsLayer" />
  </div>
</template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'
import injectGroupLayer from '@/mixins/injectGroupLayer'

export default {
  name: 'e-graphics-layer',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectGroupLayer
  ],

  provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getGraphicsLayer: this.getGraphicsLayer
    }
  },

  data() {
    return {
      moduleName: 'GraphicsLayer'
    }
  },

  methods: {
    getGraphicsLayer () {
      return this.module[this.moduleName]
    }
  }
}
</script>
