<template></template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'
import injectLayerGroupMixin from '@/mixins/injectLayerGroupMixin'
import injectFeatureGroupMixin from '@/mixins/injectFeatureGroupMixin'

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
