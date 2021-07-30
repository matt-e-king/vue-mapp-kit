<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

export default {
  name: 'EScaleBar',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],

  props: {
    position: {
      type: String,
      default: 'top-left'
    }
  },

  data() {
    return {
      moduleName: 'ScaleBar'
    }
  },

  methods: {
    addToHook() {
      if (!this.view) console.error('[EScaleBar] no map view')
      this.view.ui.add(this.module.ScaleBar, this.position)
    }
  },

  computed: {
    mergeProps() {
      if (!this.view) console.error('[EScaleBar] no map view')
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
