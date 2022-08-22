<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectLayerGroupMixin from '../../mixins/injectLayerGroupMixin'
import injectFeatureGroupMixin from '../../mixins/injectFeatureGroupMixin'
import popupMixin from '../../mixins/popupMixin'

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
