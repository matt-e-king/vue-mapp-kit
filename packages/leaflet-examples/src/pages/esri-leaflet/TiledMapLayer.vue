<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <h2>Tiled Map Layer</h2>
    <LMap
      :map-id="mapId"
      :options="{
        center: [30.70, -81.47],
        zoom: 10
      }"
    >
      <ELTiledMapLayer
        :options="{
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer'
        }"
      />
    </LMap>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/SimpleImageMapLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </section>
</template>

<script>
import {
  LMap
} from '@vue-mapp-kit/leaflet'

import ELTiledMapLayer from '@vue-mapp-kit/esri-leaflet/lib/ELTiledMapLayer/ELTiledMapLayer'

export default {
  name: 'TiledMapLayer',

  components: {
    LMap,
    ELTiledMapLayer
  },

  data() {
    return {
      mapId: 'tiled-layer'
    }
  }
}
</script>
