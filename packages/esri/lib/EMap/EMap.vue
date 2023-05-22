<template>
  <div class="map">
    <slot
      v-if="booted"
      :map="module"
    />
  </div>
</template>

<script>
import Map from '@arcgis/core/Map'
import constructorMixin from '../mixins/constructorMixin.js'

export default {
  name: 'EMap',

  provide() {
    return {
      // this will get injected into all children
      getMap: this.getMap
    }
  },

  mixins: [constructorMixin],

  data() {
    return {
      name: 'Map'
    }
  },

  created () {
    this.instantiate(Map)
  },

  watch: {
    'properties.basemap': 'changeBasemap'
  },

  methods: {
    // override
    addToHook() {},
    getMap() {
      return this.module
    },
    changeBasemap () {
      const {
        properties: {
          basemap = ''
        } = {}
      } = this

      if (!basemap) {
        console.warn('No basemap in properties')

        return
      }

      this.getMap().basemap = basemap
    }
  }
}
</script>
