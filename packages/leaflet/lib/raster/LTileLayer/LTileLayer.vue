<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'

export default {
  name: 'LTileLayer',

  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  props: {
    urlTemplate: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      moduleName: 'tileLayer'
    }
  },

  computed: {
    rootArgument () { return [this.urlTemplate] }
  }
}
</script>