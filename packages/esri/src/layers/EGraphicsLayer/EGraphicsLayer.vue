<template>
  <div>
    <slot
      v-if="booted"
      :graphicsLayer="module"
    />
  </div>
</template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectGroupLayer from '../../mixins/injectGroupLayer'

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
