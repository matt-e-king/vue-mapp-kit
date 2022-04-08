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

  provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getGroupLayer: this.groupLayer
    }
  },

  data() {
    return {
      moduleName: 'GroupLayer'
    }
  },

  methods: {
    groupLayer () {
      return this.module[this.moduleName]
    }
  }
}
</script>
