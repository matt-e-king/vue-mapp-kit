<template>
  <div>
    <slot
      v-if="booted"
      :groupLayer="module.GroupLayer"
    />
  </div>
</template>

<script>
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GroupLayer.html
import GroupLayer from '@arcgis/core/layers/GroupLayer'
import constructorMixin from '../../mixins/constructorMixin'
import injectMapMixin from '../../mixins/injectMapMixin'

export default {
  name: 'EGroupLayer',

  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  provide() {
    return {
      // this will get injected into all children
      getGroupLayer: this.groupLayer
    }
  },

  data() {
    return {
      name: 'GroupLayer'
    }
  },

  created () {
    this.instantiate(GroupLayer)
  },

  methods: {
    groupLayer () {
      return this.module
    }
  }
}
</script>
