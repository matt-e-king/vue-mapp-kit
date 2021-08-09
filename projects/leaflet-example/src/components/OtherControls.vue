<template>
  <div class="example-map">
    <h3>Zoom, Attribution and Scale controls</h3>

    <l-map
      map-id="other-controls"
      :options="{
        center: [39.74, -104.99],
        zoom: 8,
        attributionControl: false,
        zoomControl: false
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
      <l-control-zoom
        :options="{
          zoomInText: 'In',
          zoomOutText: 'Out'
        }"
      />
      <l-control-scale
        :options="{
          imperial: true,
          metric: false
        }"
      />
      <l-control-attribution
        prefix="VueMappKit"
        :attributions="['One', 'Two', 'Three']"
      />
    </l-map>
  </div>
</template>

<script>
export default {
  name: 'GroupsAndControls',

  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
