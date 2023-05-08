<template>
  <section
    id="map"
    class="SceneView page__map-wrapper"
  >
    <EMap
      :properties="{
        basemap: 'hybrid'
      }"
    >
      <ESceneView :properties="getSceneMapProps">
        <EGraphicsLayer>
          <EGraphic :properties="getSceneMapPointProps"/>
          <EGraphic :properties="getSceneMapPolygonProps"/>
          <EGraphic :properties="getSceneMapPolylineProps"/>
        </EGraphicsLayer>
      </ESceneView>
    </EMap>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap.vue'
import EGraphic from '@vue-mapp-kit/esri/lib/EGraphic/EGraphic.vue'
import ESceneView from '@vue-mapp-kit/esri/lib/views/ESceneView/ESceneView.vue'
import EGraphicsLayer from '@vue-mapp-kit/esri/lib/layers/EGraphicsLayer/EGraphicsLayer.vue'

export default {
  name: 'SceneView',

  components: {
    EMap,
    EGraphic,
    ESceneView,
    EGraphicsLayer
  },

  computed: {
    getSceneMapProps() {
      return {
        container: 'map',
        camera: { // autocasts as new Camera()
          position: { // autocasts as new Point()
            x: -0.17746710975334712,
            y: 51.44543992422466,
            z: 1266.7049653716385
          },
          heading: 0.34445102566290225,
          tilt: 82.95536300536367
        }
      }
    },
    getSceneMapPointProps() {
      const point = {
          type: 'point', // autocasts as new Point()
          x: -0.178,
          y: 51.48791,
          z: 1010
        }

      const markerSymbol = {
        type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
        color: [226, 119, 40],
        outline: { // autocasts as new SimpleLineSymbol()
          color: [255, 255, 255],
          width: 2
        }
      }

      return {
        geometry: point,
        symbol: markerSymbol
      }
    },
    getSceneMapPolylineProps() {
      const polyline = {
        type: 'polyline', // autocasts as new Polyline()
        paths: [[-0.178, 51.48791, 0],[-0.178, 51.48791, 1000]]
      }

      const lineSymbol = {
        type: 'simple-line', // autocasts as SimpleLineSymbol()
        color: [226, 119, 40],
        width: 4
      };

      return {
        geometry: polyline,
        symbol: lineSymbol
      }
    },
    getSceneMapPolygonProps() {
      const polygon = {
        type: 'polygon', // autocasts as new Polygon()
        rings: [
          [-0.184, 51.48391, 400],
          [-0.184, 51.49091, 500],
          [-0.172, 51.49091, 500],
          [-0.172, 51.48391, 400],
          [-0.184, 51.48391, 400]
        ]
      }

      const fillSymbol = {
        type: 'simple-fill', // autocasts as new SimpleFillSymbol()
        color: [227, 139, 79, 0.8],
        outline: { // autocasts as new SimpleLineSymbol()
          color: [255, 255, 255],
          width: 1
        }
      }

      return {
        geometry: polygon,
        symbol: fillSymbol
      }
    }
  }
}
</script>
