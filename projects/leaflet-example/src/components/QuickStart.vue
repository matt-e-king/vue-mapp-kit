<template>
  <div class="example-map">
    <h3>Quick Start</h3>
    <p>Following Leaflet tutorial: <a href="https://leafletjs.com/examples/quick-start/" target="_blank">Leaflet Quick Start Guide</a></p>
    <l-map
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    >
      <l-tile-layer
        url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        :options="{
          attribution: 'Tiles &copy; Esri',
          maxZoom: 18,
          label: 'Default'
        }"
      />

      <!-- <l-marker
        :latlng="[51.5, -0.09]"
        :events="['click']"
        @click="handleClick"
      /> -->

      <l-marker
        :latlng="[51.5, -0.09]"
        :popup="{
          content: 'I am a popup',
          open: true
        }"
      />

      <l-circle
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

      <l-polygon
        :latlngs="[
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]"
        :popup="{
          content: 'I am a polygon'
        }"
      />
    </l-map>
  </div>
</template>

<script>
export default {
  name: 'QuickStart',

  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
