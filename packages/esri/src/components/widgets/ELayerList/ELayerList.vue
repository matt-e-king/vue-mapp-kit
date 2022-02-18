<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

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
      moduleName: 'LayerList' 
    }
  },

  methods: {
    addToHook() {
      if (!this.getMapView()) console.error('[ELayerList] no map view')
      this.getMapView().ui.add(this.module.LayerList, this.position)
    },
    mergePropsHook () {
      if (!this.getMapView()) console.error('[ELayerList] no map view')
      return this.properties.view ? {} : { view: this.getMapView() }
    }
  }
}
</script>

<style scoped></style>