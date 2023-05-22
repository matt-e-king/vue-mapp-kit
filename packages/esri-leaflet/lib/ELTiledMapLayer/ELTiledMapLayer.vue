<template></template>

<script>
import constructorMixin from '../mixins/constructorMixin.js'
import injectMapMixin from '../mixins/injectMapMixin.js'

export default {
  name: 'ELTiledMapLayer',
  
  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  data() {
    return {
      moduleName: 'tiledMapLayer'
    }
  }
}
</script>

