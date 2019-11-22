<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

export default {
  name: 'e-layer-list',

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
      module: {
        LayerList: null
      } 
    }
  },

  methods: {
    afterInitHook() {
      const parentView = this.addTo ? this.addTo : this.getMapView()

      if (!parentView) console.error('[ELayerList] no map view')
      parentView.ui.add(this.module.LayerList, this.position)
    }
  },

  computed: {
    mergeProps() {
      const parentView = this.addTo ? this.addTo : this.getMapView()

      if (!parentView) console.error('[ELayerList] no map view')
      return { view: parentView }
    }
  }
}
</script>

<style scoped></style>