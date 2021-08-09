<template></template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'
import injectLayerGroupMixin from '@/mixins/injectLayerGroupMixin'
import injectFeatureGroupMixin from '@/mixins/injectFeatureGroupMixin'
import popupMixin from '@/mixins/popupMixin'

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
