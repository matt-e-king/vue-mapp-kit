<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html
import LayerList from '@arcgis/core/widgets/LayerList'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapViewMixin from '../../mixins/injectMapViewMixin'

export default {
  name: 'ELayerList',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data() {
    return {
      name: 'LayerList'
    }
  },

  created () {
    this.instantiate(LayerList)
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) console.error('[ELayerList] no map view')
      this.getMapView().ui.add(this.module, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView()) console.error('[ELayerList] no map view')
      return this.properties.view ? {} : { view: this.getMapView() }
    }
  }
}
</script>

<style scoped></style>