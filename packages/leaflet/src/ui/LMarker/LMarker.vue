<template></template>

<script>
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'
import injectLayerGroupMixin from '../../mixins/injectLayerGroupMixin'
import injectFeatureGroupMixin from '../../mixins/injectFeatureGroupMixin'
import popupMixin from '../../mixins/popupMixin'

// TODO: custom prop called popupTemplate, if exits, called module.bindPopup
export default {
  name: 'LMarker',

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
      moduleName: 'marker'
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
    },
    'options.draggable'(newValue) {
      if (this.module && this.module.dragging) {
        newValue
          ? this.module.dragging.enable()
          : this.module.dragging.disable()
      }
    },
    'options.icon'(icon) {
      if (this.module && this.module.setIcon) {
        this.module.setIcon(icon)
      }
    }
  }
}
</script>
