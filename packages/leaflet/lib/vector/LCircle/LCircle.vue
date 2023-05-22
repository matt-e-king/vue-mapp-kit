<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectLayerGroupMixin from '../../mixins/injectLayerGroupMixin.js'
import injectFeatureGroupMixin from '../../mixins/injectFeatureGroupMixin.js'
import popupMixin from '../../mixins/popupMixin.js'

export default {
  name: 'LCircle',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectLayerGroupMixin,
    injectFeatureGroupMixin,
    popupMixin
  ],

  props: {
    latlng: {
      type: [Array, Object], // https://leafletjs.com/reference-1.7.1.html#latlng
      required: true
    }
  },

  data() {
    return {
      moduleName: 'circle'
    }
  },

  computed: {
    // TODO: add verification to ensure latlng type
    rootArgument () { return [this.latlng] }
  },
  
  watch: {
    latlng(newLatlng) {
      if (this.module && this.module.setLatLng) {
        this.module.setLatLng(newLatlng)
      }
    }
  }
}
</script>
