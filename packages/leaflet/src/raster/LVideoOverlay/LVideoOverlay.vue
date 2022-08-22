<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'

export default {
  name: 'LVideoOverlay',

  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  props: {
    videoUrl: {
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
      moduleName: 'videoOverlay'
    }
  },

  computed: {
    rootArgument () { return [this.videoUrl, this.bounds] }
  }
}
</script>