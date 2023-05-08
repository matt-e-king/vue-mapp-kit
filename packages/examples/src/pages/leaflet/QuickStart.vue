<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <!-- <h3>Quick Start</h3>
    <p>Following Leaflet tutorial: <a href="https://leafletjs.com/examples/quick-start/" target="_blank">Leaflet Quick Start Guide</a></p> -->
    <LMap
      :options="{
        center: [51.505, -0.09],
        zoom: 13
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

      <LMarker
        :latlng="[51.5, -0.09]"
        :popup="{
          content: 'I am a popup',
          open: true
        }"
      />

      <LCircle
        :latlng="[51.508, -0.11]"
        :options="{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }"
        :popup="{
          content: 'I am a circle'
        }"
      />

      <LPolygon
        :latlngs="[
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]"
        :popup="{
          content: 'I am a polygon'
        }"
      />
    </LMap>
  </section>
</template>

<script>
import {
  LTileLayer,
  LMarker,
  LCircle,
  LPolygon
} from '@vue-mapp-kit/leaflet'
import LMap from '@vue-mapp-kit/leaflet/lib/LMap/LMap.vue'

export default {
  name: 'QuickStart',

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
    LPolygon
  },

  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
