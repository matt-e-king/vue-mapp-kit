<template>
  <div class="example-map">
    <h2>Simple FeatureLayer</h2>
    <l-map :map-id="mapId">
      <e-basemap-layer basemap="Streets"/>
      <e-feature-layer v-bind="featureLayerOptions"/>
    </l-map>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/SimpleFeatureLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([37.837, -122.479], 8)
    },

    data() {
      return {
        mapId: 'simple-feature-layer',
        featureLayerOptions: {
          layerName: 'simpleFeatureLayer',
          options: {
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0'
          }
        }
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    }
  }
</script>
