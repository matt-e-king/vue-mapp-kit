<template></template>

<script>
import Leaflet from 'leaflet'
import injectMapMixin from '../mixins/injectMapMixin'

export default {
  name: 'LControlZoom',

  mixins: [
    injectMapMixin
  ],

  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },

  mounted () {
    this.module = Leaflet.control.zoom(this.options).addTo(this.getMap())
  },

  beforeDestroy () {
    this.module.remove()
  }
}
</script>
