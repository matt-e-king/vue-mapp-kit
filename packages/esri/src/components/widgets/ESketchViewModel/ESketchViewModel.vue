<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'
import injectGraphicsLayer from '@/mixins/injectGraphicsLayer'

export default {
  name: 'e-sketch-view-model',

  mixins: [constructorMixin, injectMapViewMixin, injectGraphicsLayer],

  data () {
    return {
      moduleName: 'SketchViewModel'
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
  },

  methods: {
    // override
    addToHook() {},
  }
}
</script>
