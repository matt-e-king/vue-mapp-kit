<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectLayerGroupMixin from '../../mixins/injectLayerGroupMixin'
import injectFeatureGroupMixin from '../../mixins/injectFeatureGroupMixin'
import popupMixin from '../../mixins/popupMixin'

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
