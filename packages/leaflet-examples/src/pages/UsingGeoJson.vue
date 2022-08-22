<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <h2>Using GeoJSON</h2>
    <p>Contains all the GeoJSON examples from the <a href="http://leafletjs.com/examples/geojson/" target="_blank">Leaflet documentation</a></p>

    <LMap
      :map-id="mapId"
      :options="{
        zoom: 4,
        center: [39.36827914916014, -97.86621093750001]
      }"
    >
      <LTileLayer
        url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}"
        :options="{
          attribution: 'Tiles &copy; Esri',
          maxZoom: 18,
          accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
          label: 'Default'
        }"
      />

      <LGeoJson
        :data="geojsonFeature"
        :options="optionsForPopupFeatures"
      />
      <LGeoJson
        :data="myLines"
      />
      <LGeoJson
        :data="states"
        :options="optionsForStates"
      />
      <LGeoJson
        :data="someGeojsonFeature"
        :options="optionsForPointToLayer"
      />
      <LGeoJson
        :data="filterFeatures"
        :options="optionsForFilter"
      />
    </LMap>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/leaflet-example/src/components/UsingGeoJson.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </section>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LGeoJson
} from '@vue-mapp-kit/leaflet'
import { circleMarker } from 'leaflet'

export default {
  name: 'UsingGeoJson',

  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },

  data() {
    return {
      mapId: 'geojson',
      tileLayer: {
        urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}',
        options: {
          attribution: 'Tiles &copy; Esri',
          maxZoom: 18,
          accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
          label: 'Default'
        }
      },
      geojsonFeature: [{
        "type": "Feature",
        "properties": {
          "name": "Coors Field",
          "amenity": "Baseball Stadium",
          "popupContent": "This is where the Rockies play!"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-104.99404, 39.75621]
        }
      }],
      myLines: [
        {
          "type": "LineString",
          "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
        }, 
        {
          "type": "LineString",
          "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
        }
      ],
      states: [
        {
          "type": "Feature",
          "properties": {"party": "Republican"},
          "geometry": {
            "type": "Polygon",
            "coordinates": [[
              [-104.05, 48.99],
              [-97.22,  48.98],
              [-96.58,  45.94],
              [-104.03, 45.94],
              [-104.05, 48.99]
            ]]
          }
        }, 
        {
          "type": "Feature",
          "properties": {"party": "Democrat"},
          "geometry": {
            "type": "Polygon",
            "coordinates": [[
              [-109.05, 41.00],
              [-102.06, 40.99],
              [-102.03, 36.99],
              [-109.04, 36.99],
              [-109.05, 41.00]
            ]]
          }
        }
      ],
      someGeojsonFeature: [{
        "type": "Point",
        "coordinates": [-99.9316, 43.2171]
      }],
      filterFeatures: [
        {
          "type": "Feature",
          "properties": {
            "name": "Coors Field",
            "show_on_map": true
          },
          "geometry": {
            "type": "Point",
            "coordinates": [-105.0183, 41.87211]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Busch Field",
            "show_on_map": false
          },
          "geometry": {
            "type": "Point",
            "coordinates": [-104.98404, 39.74621]
          }
        }
      ]
    }
  },

  computed: {
    optionsForStates() {
      return {
        style: function(feature) {
          switch (feature.properties.party) {
            case 'Republican': return { color: "#ff0000" }
            case 'Democrat':   return { color: "#0000ff" }
          }
        }
      }
    },
    optionsForPointToLayer() {
      const geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }

      return {
        pointToLayer: function (feature, latlng) {
          return circleMarker(latlng, geojsonMarkerOptions);
        }
      }
    },
    optionsForPopupFeatures() {
      return {
        onEachFeature: this.onPopupFeature
      }
    },
    optionsForFilter() {
      return {
        filter: function(feature, layer) {
          return feature.properties.show_on_map;
        }
      }
    }
  },

  methods: {
    onPopupFeature(feature, layer) {
      if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
      }
    }
  }
}
</script>
