<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

export default {
  name: 'ELegend',

  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],

  props: {
    position: {
      type: String,
      default: 'bottom-left'
    }
  },

  data() {
    return {
      moduleName: 'Legend'
    }
  },

  methods: {
    addToHook() {
      if (!this.view) console.error('[ELegend] no map view')
      this.view.ui.add(this.module.Legend, this.position)
    }
  },

  computed: {
    mergeProps() {
      if (!this.view) console.error('[ELegend] no map view')
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
