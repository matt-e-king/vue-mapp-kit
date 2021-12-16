<template>
  <div class="example-map">
    <h2>Feature Layer</h2>
    <l-map
      :map-id="mapId"
      :options="{
        center: [34.06931487498629, -118.80058448853654],
        zoom: 11
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
      <e-l-feature-layer v-bind="featureLayerOptions"/>
    </l-map>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/SimpleFeatureLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  export default {
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
