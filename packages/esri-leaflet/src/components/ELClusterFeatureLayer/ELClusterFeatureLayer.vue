<template></template>

<script>
import 'leaflet.markercluster'
import * as esriCluster from 'esri-leaflet-cluster'
import constructorMixin from '@/mixins/constructorMixin'
import injectMapMixin from '@/mixins/injectMapMixin'

export default {
  name: 'ELClusterFeatureLayer',
  
  mixins: [
    constructorMixin,
    injectMapMixin
  ],

  data() {
    return {
      moduleName: 'clusterFeatureLayer'
    }
  },

  methods: {
    createModule () {  
      console.log(`Constructing clusterFeatureLayer`)
  
      this.module = esriCluster.featureLayer(this.options) // setting outside of $data to make non-reactive
    },
  }
}
</script>
