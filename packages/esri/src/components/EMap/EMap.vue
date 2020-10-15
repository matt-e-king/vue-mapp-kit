<template>
  <div class="map">
    <slot v-if="booted" v-bind:map="module.Map"/>
  </div>
</template>

<script>
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-map',

  provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getMap: this.getMap
    }
  },

  mixins: [constructorMixin],

  props: {
    mapId: {
      type: String,
      default: 'mainMap'
    }
  },

  data() {
    return {
      moduleName: 'Map'
    }
  },

  methods: {
    // override
    addToHook() {},
    getMap() {
      return this.module.Map
    }
  }
}
</script>

<style></style>