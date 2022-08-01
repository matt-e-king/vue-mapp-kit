<template></template>

<script>
import ScaleBar from '@arcgis/core/widgets/ScaleBar'
import constructorMixin from '../../../mixins/constructorMixin'
import injectMapViewMixin from '../../../mixins/injectMapViewMixin'

export default {
  name: 'EScaleBar',

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
      name: 'ScaleBar'
    }
  },

  created () {
    this.instantiate(ScaleBar)
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) console.error('[EScaleBar] no map view')
      this.getMapView().ui.add(this.module, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView()) console.error('[EScaleBar] no map view')
      return this.properties.view ? {} : { view: this.getMapView() }
    }
  }
}
</script>
