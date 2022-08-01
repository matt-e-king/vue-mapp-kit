<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html
import Legend from '@arcgis/core/widgets/Legend'
import constructorMixin from '../../../mixins/constructorMixin'
import injectMapViewMixin from '../../../mixins/injectMapViewMixin'

export default {
  name: 'ELegend',

  mixins: [
    constructorMixin,
    injectMapViewMixin
  ],

  props: {
    position: {
      type: String,
      default: 'bottom-left'
    }
  },

  data() {
    return {
      name: 'Legend'
    }
  },

  created () {
    this.instantiate(Legend)
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) console.error('[ELegend] no map view')
      this.getMapView().ui.add(this.module, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView()) console.error('[ELegend] no map view')
      return this.properties.view ? {} : { view: this.getMapView() }
    }
  }
}
</script>
