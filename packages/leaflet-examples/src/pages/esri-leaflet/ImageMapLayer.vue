<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <h2>Image Map Layer</h2>
    <LMap
      :map-id="mapId"
      :options="{
        center: [43.50, -120.23],
        zoom: 7
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
      <ELImageMapLayer v-bind="imageMapLayerOptions"/>
    </LMap>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/SimpleImageMapLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </section>
</template>

<script>
import {
  LMap,
  LTileLayer
} from '@vue-mapp-kit/leaflet'
import ELImageMapLayer from '@vue-mapp-kit/esri-leaflet/lib/ELImageMapLayer/ELImageMapLayer'
export default {
  name: 'ImageMapLayer',

  components: {
    LMap,
    LTileLayer,
    ELImageMapLayer
  },

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
