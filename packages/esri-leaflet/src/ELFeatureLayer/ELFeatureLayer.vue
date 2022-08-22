<template></template>

<script>
import constructorMixin from '../mixins/constructorMixin'
import injectMapMixin from '../mixins/injectMapMixin'

export default {
  name: 'ELFeatureLayer',
  
  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  data() {
    return {
      moduleName: 'featureLayer'
    }
  },

  watch: {
    'options.opacity'(newOpacity) {
      if (newOpacity !== null || newOpacity !== undefined) {
        this.innerLayer.options.opacity = newOpacity
        this.innerLayer.redraw()
      }
    }
  }
}
</script>
