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
import constructorMixin from '../mixins/constructorMixin'

export default {
  name: 'EMap',

  provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
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
