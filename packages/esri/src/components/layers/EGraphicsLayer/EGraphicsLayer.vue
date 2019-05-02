<template>
  <div>
    <slot v-if="booted" v-bind:graphicsLayer="module.GraphicsLayer"/>
  </div>
</template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-graphics-layer',

  provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getGraphicsLayer: this.getGraphicsLayer
    }
  },

  inject: {
    getMap: {
      default: () => null
    }
  },

  mixins: [constructorMixin],

  data() {
    return {
      module: {
        GraphicsLayer: null
      }
    }
  },

  methods: {
    afterInitHook() {
      if (!this.getMap()) console.error('[EGraphicsLayer] no map found')
      this.getMap().add(this.module.GraphicsLayer)
    },
    getGraphicsLayer() {
      return this.module.GraphicsLayer
    }
  }
}
</script>

<style scoped></style>