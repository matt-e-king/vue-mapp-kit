<template></template>

<script>
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'ELDynamicMapLayer',
  
  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  data() {
    return {
      moduleName: 'dynamicMapLayer'
    }
  },

  watch: {
    'options.layers': {
      handler(newLayers) {
        this.innerLayer.options.layers = newLayers
        this.innerLayer.redraw()
      },
      deep: true
    },
    'options.opacity'(newOpacity) {
      if (newOpacity !== null || newOpacity !== undefined) {
        this.innerLayer.options.opacity = newOpacity
        this.innerLayer.redraw()
      }
    }
  }
}
</script>
