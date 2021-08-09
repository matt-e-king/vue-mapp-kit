<template></template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'LImageOverlay',

  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  props: {
    imageUrl: {
      type: String,
      required: true
    },
    // https://leafletjs.com/reference-1.7.1.html#latlngbounds
    bounds: {
      type: [Object, Array],
      required: true
    }
  },

  data() {
    return {
      moduleName: 'imageOverlay'
    }
  },

  computed: {
    rootArgument () { return [this.imageUrl, this.bounds] }
  }
}
</script>