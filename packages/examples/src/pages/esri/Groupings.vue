<template>
  <section
    id="map"
    class="Groupings page__map-wrapper"
  >
    <EMap
      :properties="{
        basemap: 'streets-vector'
      }"
    >
      <template #default="{ map }">
        <EMapView
          :properties="{
            map: map,
            container: 'map',
            zoom: 3,
            center: [-80, 35]
          }"
        >
          <EGraphicsLayer :properties="{ title: 'More Graphics! '}">
            <EGraphic :properties="getPointProps" />
          </EGraphicsLayer>
          
          <EGroupLayer :properties="{ title: 'Group!' }">
            <template #default="{ groupLayer }">
              <EGraphicsLayer
                :add-to="groupLayer"
                :properties="{ title: 'Graphics! '}"
              >
                  <EGraphic :properties="getPolylineProps"/>
                  <EGraphic :properties="getPolygonProps"/>
              </EGraphicsLayer>
            </template>
          </EGroupLayer>

          <ELayerList />
        </EMapView>
      </template>
    </EMap>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap.vue'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView.vue'
import EGraphic from '@vue-mapp-kit/esri/lib/EGraphic/EGraphic.vue'
import EGraphicsLayer from '@vue-mapp-kit/esri/lib/layers/EGraphicsLayer/EGraphicsLayer.vue'
import EGroupLayer from '@vue-mapp-kit/esri/lib/layers/EGroupLayer/EGroupLayer.vue'
import ELayerList from '@vue-mapp-kit/esri/lib/widgets/ELayerList/ELayerList.vue'

export default {
  name: 'Groupings',

  components: {
    EMap,
    EMapView,
    EGraphic,
    EGraphicsLayer,
    EGroupLayer,
    ELayerList
  },

  computed: {
    getPolygonProps() {
      const polygon = {
        type: 'polygon', // autocasts as new Polygon()
        rings: [[-64.78, 32.3],[-66.07, 18.45],[-80.21, 25.78],[-64.78, 32.3]]
      }

      // Create a symbol for rendering the graphic
      const fillSymbol = {
        type: 'simple-fill', // autocasts as new SimpleFillSymbol()
        color: [227, 139, 79, 0.8],
        outline: { // autocasts as new SimpleLineSymbol()
          color: [255, 255, 255],
          width: 1
        }
      }

      // Add the geometry and symbol to a new graphic
      return {
        attributes: {
          name: 'Polyglot Polygon!'
        },
        geometry: polygon,
        symbol: fillSymbol
      }
    },

    getPointProps() {
      // First create a point geometry (this is the location of the Titanic)
        var point = {
          type: 'point', // autocasts as new Point()
          longitude: -49.97,
          latitude: 41.73
        };

        // Create a symbol for drawing the point
        var markerSymbol = {
          type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
          color: [226, 119, 40],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [255, 255, 255],
            width: 2
          }
        };

        // Create a graphic and add the geometry and symbol to it
        return {
          attributes: {
            name: 'Dot!'
          },
          geometry: point,
          symbol: markerSymbol
        }
    },

    getPolylineProps() {
      // First create a line geometry (this is the Keystone pipeline)
      const polyline = {
        type: 'polyline', // autocasts as new Polyline()
        paths: [[-111.30, 52.68],[-98, 49.5],[-93.94, 29.89]]
      }

      // Create a symbol for drawing the line
      const lineSymbol = {
        type: 'simple-line', // autocasts as SimpleLineSymbol()
        color: [226, 119, 40],
        width: 4
      }

      // Create an object for storing attributes related to the line
      const lineAtt = {
        Name: 'Keystone Pipeline',
        Owner: 'TransCanada',
        Length: '3,456 km'
      }

      /*******************************************
       * Create a new graphic and add the geometry,
       * symbol, and attributes to it. You may also
       * add a simple PopupTemplate to the graphic.
       * This allows users to view the graphic's
       * attributes when it is clicked.
       ******************************************/
      return {
        geometry: polyline,
        symbol: lineSymbol,
        attributes: lineAtt,
        popupTemplate: { // autocasts as new PopupTemplate()
          title: '{Name}',
          content: [{
            type: 'fields',
            fieldInfos: [
              { fieldName: 'Name' },
              { fieldName: 'Owner' },
              { fieldName: 'Length' }
            ]
          }]
        }
      }
    }
  }
}
</script>
