<template></template>

<script>
import L from 'leaflet'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'LControlAttribution',

  mixins: [injectMapMixin],

  props: {
    prefix: {
      type: String,
      default: ''
    },
    attributions: {
      type: Array,
      default: () => ([])
    },
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
    this.module = L.control.attribution(this.options).addTo(this.getMap())

    if (this.prefix) {
      this.module.setPrefix(this.prefix)
    }

    if (this.attributions.length) {
      this.attributions.forEach(a => this.module.addAttribution(a))
    }

    this.booted = true
  },

  beforeDestroy () {
    this.module.remove()
  }
}
</script>
