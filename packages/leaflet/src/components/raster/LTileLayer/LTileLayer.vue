<template></template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

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