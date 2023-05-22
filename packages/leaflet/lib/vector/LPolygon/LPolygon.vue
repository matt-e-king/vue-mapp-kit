<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapMixin from '../../mixins/injectMapMixin.js'
import injectLayerGroupMixin from '../../mixins/injectLayerGroupMixin.js'
import injectFeatureGroupMixin from '../../mixins/injectFeatureGroupMixin.js'
import popupMixin from '../../mixins/popupMixin.js'

export default {
  name: 'LPolygon',

  mixins: [
    constructorMixin,
    injectMapMixin,
    injectLayerGroupMixin,
    injectFeatureGroupMixin,
    popupMixin
  ],

  props: {
    latlngs: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },

  data() {
    return {
      moduleName: 'polygon'
    }
  },

  computed: {
    // TODO: add verification to ensure latlng type
    rootArgument () { return [this.latlngs] }
  }
}
</script>
