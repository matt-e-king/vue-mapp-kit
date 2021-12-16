<template>
  <div class="example-map">
    <h2>Image Map Layer</h2>
    <l-map
      :map-id="mapId"
      :options="{
        center: [43.50, -120.23],
        zoom: 7
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
      <e-l-image-map-layer v-bind="imageMapLayerOptions"/>
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
      mapId: 'image-map-layer',
      imageMapLayerOptions: {
        options: {
          url: 'https://landsat.arcgis.com/arcgis/rest/services/Landsat/PS/ImageServer',
          attribution: 'United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)'
        }
      }
    }
  }
}
</script>
