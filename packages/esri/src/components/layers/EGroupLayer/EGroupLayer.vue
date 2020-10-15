<template>
  <div>
    <slot v-if="booted" v-bind:groupLayer="module.GroupLayer"/>
  </div>
</template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'e-group-layer',

  mixins: [constructorMixin, injectMapMixin],

  data() {
    return {
      moduleName: 'GroupLayer'
    }
  }
}
</script>
