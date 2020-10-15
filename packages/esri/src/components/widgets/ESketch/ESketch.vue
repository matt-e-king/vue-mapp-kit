<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'
import injectGraphicsLayer from '@/mixins/injectGraphicsLayer'

export default {
  name: 'e-sketch',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin, injectGraphicsLayer],

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data() {
    return {
      moduleName: 'Sketch' 
    }
  },

  methods: {
    addToHook() {
      if (!this.view) console.error('[ESketch] no map view')
      this.view.ui.add(this.module.Sketch, this.position)
    }
  },

  computed: {
    mergeProps() {
      return {
        ...(this.properties.layer ? {} : { layer: this.layer }),
        ...(this.properties.view ? {} : { view: this.view })
      }
    },
    layer () {
      const {
        layer = this.getGraphicsLayer()
      } = this.properties

      return layer
    },
    view () {
      const {
        view = this.getMapView()
      } = this.properties

      return view
    }
  }
}
</script>

<style scoped></style>