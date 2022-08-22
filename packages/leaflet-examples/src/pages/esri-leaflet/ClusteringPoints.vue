<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <h2>Clustering Points</h2>
    <p>
      This component requires <code>npm install --save-dev leaflet.markercluster esri-leaflet-cluster</code>
    </p>
    <p>
      The CSS from <code>leaflet.mark</code> is not shipped with <code>@vue-mapp-kit/esri-leaflet</code> so you must include it in your component: <br />
      <code>
        import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
        import 'leaflet.markercluster/dist/MarkerCluster.css'
      </code>
    </p>
    <LMap
      :map-id="mapId"
      :options="{
        center: [0, 0],
        zoom: 2,
        maxZoom: 18
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
      <ELClusterFeatureLayer
        v-bind="featureLayerOptions"
        :events="['clusterclick']"
        enable-bus
        @clusterclick="handleClusterClick"
      />
    </LMap>
    
    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/ClusteringPoints.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </section>
</template>

<script>
// https://esri.github.io/esri-leaflet/api-reference/layers/cluster-feature-layer.html
import {
  LMap,
  LTileLayer
} from '@vue-mapp-kit/leaflet'
import ELClusterFeatureLayer from '@vue-mapp-kit/esri-leaflet/lib/ELClusterFeatureLayer/ELClusterFeatureLayer'

import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'

export default {
  name: 'ClusteringPoints',

  components: {
    LMap,
    LTileLayer,
    ELClusterFeatureLayer
  },

  data() {
    return {
      mapId: 'clustering-points',
      featureLayerOptions: {
        options: {
          url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0'
        }
      }
    }
  },

  methods: {
    handleClusterClick(e) {
      console.log('Cluster event: ', e)
    }
  }
}
</script>
