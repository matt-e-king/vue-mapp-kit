<template>
  <div class="example-map">
    <h2>Showing an ArcGIS basemap</h2>
    <l-map :map-id="mapId">
      <e-basemap-layer basemap="Streets"/>
    </l-map>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/ShowingArcGisBasemap.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([39, -97.5], 4)
    },

    data() {
      return {
        mapId: 'create-first-map'
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    }
  }
</script>
