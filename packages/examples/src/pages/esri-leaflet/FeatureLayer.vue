<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <!-- <h2>Feature Layer</h2> -->
    <LMap
      :map-id="mapId"
      :options="{
        center: [34.06931487498629, -118.80058448853654],
        zoom: 11
      }"
    >
      <LTileLayer
        url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        :options="{
          attribution: 'Tiles &copy; Esri',
          maxZoom: 18,
          label: 'Default'
        }"
      />
      <ELFeatureLayer v-bind="featureLayerOptions"/>
    </LMap>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/SimpleFeatureLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </section>
</template>

<script>
import {
  LMap,
  LTileLayer
} from '@vue-mapp-kit/leaflet'
import ELFeatureLayer from '@vue-mapp-kit/esri-leaflet/lib/ELFeatureLayer/ELFeatureLayer.vue'

export default {
  name: 'FeatureLayer',

  components: {
    LMap,
    LTileLayer,
    ELFeatureLayer
  },

  data() {
    return {
      mapId: 'feature-layer',
      featureLayerOptions: {
        options: {
          url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/Trails/FeatureServer/0'
        }
      }
    }
  }
}
</script>
