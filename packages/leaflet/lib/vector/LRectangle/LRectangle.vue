<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectLayerGroupMixin from '../../mixins/injectLayerGroupMixin.js'
import injectFeatureGroupMixin from '../../mixins/injectFeatureGroupMixin.js'
import popupMixin from '../../mixins/popupMixin.js'

export default {
  name: 'LRectangle',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectLayerGroupMixin,
    injectFeatureGroupMixin,
    popupMixin
  ],

  props: {
    bounds: {
      type: [Array, Object], // https://leafletjs.com/reference-1.7.1.html#latlngbounds
      required: true
    }
  },

  data() {
    return {
      moduleName: 'rectangle'
    }
  },

  computed: {
    // TODO: add verification to ensure latlng type
    rootArgument () { return [this.bounds] }
  }
}
</script>
