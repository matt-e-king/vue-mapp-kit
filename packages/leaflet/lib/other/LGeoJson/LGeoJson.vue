<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectLayerGroupMixin from '../../mixins/injectLayerGroupMixin.js'
import injectFeatureGroupMixin from '../../mixins/injectFeatureGroupMixin.js'

// TODO: build in reactivity, if data changes clearLayers(), addData()
export default {
  name: 'LGeoJson',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectLayerGroupMixin,
    injectFeatureGroupMixin
  ],

  props: {
    data: {
      type: [Array, Object, String],
      required: true,
      default: () => ({})
    }
  },

  data () {
    return {
      moduleName: 'geoJSON'
    }
  },

  computed: {
    // TODO: add verification to ensure latlng type
    rootArgument () { return [this.data] }
  }
}
</script>
