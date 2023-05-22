<template>
  <div class="layer-group">
    <slot
      v-if="booted"
      :layerGroup="module"
    />
  </div>
</template>

<script>
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'

export default {
  name: 'LLayerGroup',

  provide() {
    return {
      getLayerGroup: this.getModule
    }
  },

  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  props: {
    layers: {
      type: Array, // https://leafletjs.com/reference-1.7.1.html#latlng
      default: () => ([])
    }
  },

  data() {
    return {
      moduleName: 'layerGroup'
    }
  },

  computed: {
    rootArgument () { return [this.layers] }
  },

  methods: {
    getModule() {
      return this.module // set in constructor
    }
  }
}
</script>
