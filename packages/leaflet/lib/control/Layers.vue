<template>
  <div class="control-layers">
    <slot
      v-if="booted"
      :addBaseLayer="addBaseLayer"
      :addOverlay="addOverlay"
    />
  </div>
</template>

<script>
import Leaflet from 'leaflet'
import injectMapMixin from '../mixins/injectMapMixin.js'

export default {
  name: 'LControlLayers',

  mixins: [injectMapMixin],

  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      booted: false
    }
  },

  mounted () {
    this.module = Leaflet.control.layers({}, {}, this.options).addTo(this.getMap())
    this.booted = true
  },

  methods: {
    addBaseLayer (layer, name) {
      if (layer) {
        this.module.addBaseLayer(layer, name)
      }
    },
    addOverlay (overlay, name) {
      if (overlay) {
        this.module.addOverlay(overlay, name)
      }
    }
  },

  beforeDestroy () {
    this.module.remove()
  }
}
</script>
