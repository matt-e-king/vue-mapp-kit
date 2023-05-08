<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <!-- <h3>Zoom, Attribution and Scale controls</h3> -->

    <LMap
      map-id="other-controls"
      :options="{
        center: [39.74, -104.99],
        zoom: 8,
        attributionControl: false,
        zoomControl: false
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
      <LControlZoom
        :options="{
          zoomInText: 'In',
          zoomOutText: 'Out'
        }"
      />
      <LControlScale
        :options="{
          imperial: true,
          metric: false
        }"
      />
      <LControlAttribution
        prefix="VueMappKit"
        :attributions="['One', 'Two', 'Three']"
      />
    </LMap>
  </section>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LControlZoom,
  LControlScale,
  LControlAttribution
} from '@vue-mapp-kit/leaflet'

export default {
  name: 'GroupsAndControls',

  components: {
    LMap,
    LTileLayer,
    LControlZoom,
    LControlScale,
    LControlAttribution
  },

  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
