<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-layer-list',

  inject: {
    getMapView: {
      default: () => null
    }
  },

  // constructor handles created()
  mixins: [constructorMixin],

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
      this.getMapView().ui.add(this.module.LayerList, this.position);
    }
  },

  computed: {
    mergeProps() {
      if (!this.getMapView()) console.error('[ELayerList] no map view')
      return { view: this.getMapView() }
    }
  }
}
</script>

<style scoped></style>