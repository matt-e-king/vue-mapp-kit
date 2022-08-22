<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <h2>Dynamic Map Layer</h2>
    <LMap
      :map-id="mapId"
      :options="{
        center: [37.71, -99.88],
        zoom: 4
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
      <ELDynamicMapLayer v-bind="dynamicMapOptions"/>
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
import ELDynamicMapLayer from '@vue-mapp-kit/esri-leaflet/lib/ELDynamicMapLayer/ELDynamicMapLayer'

export default {
  name: 'DynamicMapLayer',

  components: {
    LMap,
    LTileLayer,
    ELDynamicMapLayer
  },

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
