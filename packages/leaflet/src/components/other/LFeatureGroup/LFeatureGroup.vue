<template>
  <div class="feature-group">
    <slot
      v-if="booted"
      :layerGroup="module"
    />
  </div>
</template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'LFeatureGroup',

  provide() {
    return {
      getFeatureGroup: this.getModule
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
      moduleName: 'featureGroup'
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
