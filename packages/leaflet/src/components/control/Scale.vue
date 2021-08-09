<template></template>

<script>
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'LControlScale',

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
    this.module = L.control.scale(this.options).addTo(this.getMap())
  },

  beforeDestroy () {
    this.module.remove()
  }
}
</script>
