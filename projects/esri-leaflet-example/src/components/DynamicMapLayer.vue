<template>
  <div class="example-map">
    <h2>Dynamic Map Layer</h2>
    <l-map
      :map-id="mapId"
      :options="{
        center: [37.71, -99.88],
        zoom: 4
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
      <e-l-dynamic-map-layer v-bind="dynamicMapOptions"/>
    </l-map>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/SimpleImageMapLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapId: 'dynamic-map-layer',
      dynamicMapOptions: {
        options: {
          url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer',
          opacity: 0.7
        }
      }
    }
  }
}
</script>
