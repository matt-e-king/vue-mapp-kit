<template></template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
import constructorMixin from '@/mixins/constructorMixin'

export default {
  name: 'e-graphic',

  inject: {
    getMapView: {
      default: () => {}
    },
    getGraphicsLayer: {
      default: () => {}
    }
  },

  // constructor handles created()
  mixins: [constructorMixin],

  data() {
    return {
      module: {
        Graphic: null
      }
    }
  },

  methods: {
    afterInitHook() {
      const {
        $options: {
          name
        } = {}
      } = this.$parent

      if (name === 'e-map-view') {
        this.getMapView().graphics.add(this.module.Graphic)
      } else {
        this.getGraphicsLayer().add(this.module.Graphic)
      }
    }
  }
}
</script>

<style scoped></style>