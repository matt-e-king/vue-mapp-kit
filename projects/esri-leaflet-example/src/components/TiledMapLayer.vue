<template>
  <div class="example-map">
    <h2>Tiled Map Layer</h2>
    <l-map
      :map-id="mapId"
      :options="{
        center: [30.70, -81.47],
        zoom: 10
      }"
    >
      <e-l-tiled-map-layer
        :options="{
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer'
        }"
      />
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
      mapId: 'tiled-layer'
    }
  }
}
</script>
