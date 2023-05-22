<template></template>

<script>
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle'
import constructorMixin from '../../mixins/constructorMixin.js'
import injectMapViewMixin from '../../mixins/injectMapViewMixin.js'

export default {
  name: 'EBasemapToggle',

  mixins: [
    constructorMixin,
    injectMapViewMixin
  ],

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data() {
    return {
      name: 'BasemapToggle'
    }
  },

  created () {
    this.instantiate(BasemapToggle)
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) console.error('[EBasemapToggle] no MapView')
      this.getMapView().ui.add(this.module.BasemapToggle, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView()) console.error('[EBasemapToggle] no MapView')
      return this.properties.view ? {} : { view: this.getMapView() }
    }
  }
}
</script>
