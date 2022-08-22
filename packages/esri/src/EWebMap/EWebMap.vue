<template>
  <div class="webmap">
    <slot
      v-if="booted"
      :map="module"
    />
  </div>
</template>

<script>
import WebMap from '@arcgis/core/WebMap'
import constructorMixin from '../mixins/constructorMixin'

export default {
  name: 'EWebMap',

  provide() {
    return {
      // this will get injected into all children
      getMap: this.getMap
    }
  },

  mixins: [constructorMixin],

  data () {
    return {
      name: 'WebMap'
    }
  },

  created () {
    this.instantiate(WebMap)
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
