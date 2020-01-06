<template>
  <div id="app">
    <div id="mainMap">
      <e-map :properties="mapProps" v-if="showMapView" :key="1">
        <!-- the default slot of e-map spits out the map object -->
        <template #default="{ map }">
          <e-map-view
            :events="{
              'click': handleClick
            }"
            :add-to="map"
            :properties="{
              container: 'mainMap',
              zoom: 3,
              center: [-80, 35]
            }">
            
            <!-- <e-portal-item :add-to="map" :properties="{ id: '8444e275037549c1acab02d2626daaee' }"/> -->


            <!-- <e-graphic :properties="getPolylineProps"/>
            <e-graphic :properties="getPolygonProps"/> -->

            <!-- <e-layer-list />

            <e-graphics-layer :properties="{ title: 'Graphics Layer! '}">
              <template #default="{ graphicsLayer }">
                <e-graphic :add-to="graphicsLayer" :properties="getPolylineProps"/>
                <e-graphic :add-to="graphicsLayer" :properties="getPolygonProps"/>
              </template>
            </e-graphics-layer>

            <e-geo-json-layer :properties="getGeoJSONProps"/> -->

            <!--
              have to change e-map-view to this first:
              extent: {
                // autocasts as new Extent()
                xmin: -9177811,
                ymin: 4247000,
                xmax: -9176791,
                ymax: 4247784,
                spatialReference: 102100
              }
            -->

            <!-- <e-feature-layer :properties="{ 
              url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0'
            }"/> -->

            <template #default="{ mapView }">
              <e-group-layer :properties="{ title: 'Graphics!' }">
                <template #default="{ groupLayer }">
                  <e-graphics-layer :add-to="groupLayer" :properties="{ title: 'Graphics Layer! '}">
                    <template :add-to="groupLayer" #default="{ graphicsLayer }">
                      <e-graphic :add-to="graphicsLayer" :properties="getPolylineProps"/>
                      <e-graphic :add-to="graphicsLayer" :properties="getPolygonProps"/>
                      <e-graphic :add-to="graphicsLayer" :properties="getPointProps"/>
                    </template>
                  </e-graphics-layer>
                </template>
              </e-group-layer>

              <!-- <e-geo-json-layer :add-to="map" :properties="getGeoJSONProps"/> -->
              
              <e-layer-list :add-to="mapView"/>
              <e-basemap-toggle 
                :properties="{ nextBasemap: 'hybrid' }"
                position="bottom-right"/>
            </template>

            <!-- <e-group-layer :properties="{ title: 'Graphics!' }">
              <e-graphics-layer :properties="{ title: 'Graphics Layer! '}">
                <e-graphic :properties="getPolylineProps"/>
                <e-graphic :properties="getPolygonProps"/>
              </e-graphics-layer>
            </e-group-layer> -->
            <!-- <e-graphic :properties="getPolygonProps"/> -->

            <!-- <e-graphics-layer :properties="{ title: 'Graphics Layer! '}">
              <e-graphic :properties="getPolylineProps"/>
            </e-graphics-layer>

            <e-geo-json-layer :properties="getGeoJSONProps"/>

            <e-basemap-toggle 
              :properties="{ nextBasemap: 'hybrid' }"
              position="bottom-right"/>  -->
          </e-map-view>
        </template>

        <!-- <e-portal-item :properties="{ id: '8444e275037549c1acab02d2626daaee' }"/> -->
      </e-map>

      <e-map :properties="map2Props" v-else :key="2">
        <template #default="{ map }"> <!-- e-map has default slot with provide Module.map -->
          <e-scene-view :properties="getSceneMapProps">
            <e-graphics-layer>
              <template #default="{ graphicsLayer }">
                <e-graphic :add-to="graphicsLayer" :properties="getSceneMapPointProps"/>
                <e-graphic :add-to="graphicsLayer" :properties="getSceneMapPolygonProps"/>
                <e-graphic :add-to="graphicsLayer" :properties="getSceneMapPolylineProps"/>
              </template>
            </e-graphics-layer>
          </e-scene-view>
        </template>
      </e-map>
    </div>

    <button @click="showMapView = !showMapView">Toggle SceneView / MapView</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMapView: true,
      mapProps: {
        basemap: 'streets'
      },
      map2Props: {
        basemap: 'hybrid'
      },
    }
  },

  computed: {
    getGeoJSONProps() {
      return {
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
        copyright: "USGS Earthquakes",
        popupTemplate: {
          title: "Earthquake Info",
          content: "Magnitude {mag} {type} hit {place} on {time:DateString}"
        }
      }
    },
    getSceneMapProps() {
      return {
        container: "mainMap",
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
          type: "point", // autocasts as new Point()
          x: -0.178,
          y: 51.48791,
          z: 1010
        }

      const markerSymbol = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
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
        type: "polyline", // autocasts as new Polyline()
        paths: [[-0.178, 51.48791, 0],[-0.178, 51.48791, 1000]]
      }

      const lineSymbol = {
        type: "simple-line", // autocasts as SimpleLineSymbol()
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
        type: "polygon", // autocasts as new Polygon()
        rings: [
          [-0.184, 51.48391, 400],
          [-0.184, 51.49091, 500],
          [-0.172, 51.49091, 500],
          [-0.172, 51.48391, 400],
          [-0.184, 51.48391, 400]
        ]
      }

      const fillSymbol = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
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
    },
    getPolygonProps() {
      const polygon = {
        type: "polygon", // autocasts as new Polygon()
        rings: [[-64.78, 32.3],[-66.07, 18.45],[-80.21, 25.78],[-64.78, 32.3]]
      }

      // Create a symbol for rendering the graphic
      const fillSymbol = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
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
          type: "point", // autocasts as new Point()
          longitude: -49.97,
          latitude: 41.73
        };

        // Create a symbol for drawing the point
        var markerSymbol = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
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
        type: "polyline", // autocasts as new Polyline()
        paths: [[-111.30, 52.68],[-98, 49.5],[-93.94, 29.89]]
      }

      // Create a symbol for drawing the line
      const lineSymbol = {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        color: [226, 119, 40],
        width: 4
      }

      // Create an object for storing attributes related to the line
      const lineAtt = {
        Name: "Keystone Pipeline",
        Owner: "TransCanada",
        Length: "3,456 km"
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
          title: "{Name}",
          content: [{
            type: "fields",
            fieldInfos: [
              {fieldName: "Name"},
              {fieldName: "Owner"},
              {fieldName: "Length"}
              ]
          }]
        }
      }
    }
  },

  methods: {
    handleClick(response) {
      console.log(response)
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}

button {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

html, body, #mainMap {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
