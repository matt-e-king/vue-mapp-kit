<template></template>

<script>
import constructorMixin from '../mixins/constructorMixin.js'
import injectMapMixin from '../mixins/injectMapMixin.js'

export default {
  name: 'ELImageMapLayer',
  
  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  data() {
    return {
      moduleName: 'imageMapLayer'
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

