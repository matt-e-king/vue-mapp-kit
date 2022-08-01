<template>
  <div>
    <slot
      v-if="booted"
      :graphicsLayer="module.GraphicsLayer"
    />
  </div>
</template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import constructorMixin from '../../../mixins/constructorMixin'
import injectMapMixin from '../../../mixins/injectMapMixin'
import injectGroupLayer from '../../../mixins/injectGroupLayer'

export default {
  name: 'EGraphicsLayer',

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
      name: 'GraphicsLayer'
    }
  },

  created () {
    this.instantiate(GraphicsLayer)
  },

  methods: {
    getGraphicsLayer () {
      return this.module
    }
  }
}
</script>
