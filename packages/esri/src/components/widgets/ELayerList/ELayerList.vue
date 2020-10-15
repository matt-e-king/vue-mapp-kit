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
      moduleName: 'LayerList' 
    }
  },

  methods: {
    addToHook() {
      if (!this.view) console.error('[ELayerList] no map view')
      this.view.ui.add(this.module.LayerList, this.position)
    }
  },

  computed: {
    mergeProps() {
      if (!this.view) console.error('[ELayerList] no map view')
      return this.properties.view ? {} : { view: this.getMapView() }
    },
    view () {
      const {
        view
      } = this.properties

      return view ? view : this.getMapView()
    }
  }
}
</script>

<style scoped></style>