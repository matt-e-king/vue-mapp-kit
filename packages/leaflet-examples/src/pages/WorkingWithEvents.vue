<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <h2>Working with events</h2>
    <p>Pass in an array events (as strings) that are supported by the layer type. See <a href="http://leafletjs.com/reference-1.3.0.html" target="_blank">Leaflets docs for events</a>. There is a "ready" event that is handle by MappKitLeaflet for you :)</p>
    <LMap
      :map-id="mapId"
      :options="{
        center: [51.5079, -0.0787],
        zoom: 13
      }"
      :events="['click']"
      @click="handleMapClick"
    >
      <LTileLayer v-bind="tileLayer" />
      <LMarker
        v-bind="markerProps"
        :events="['dragend']"
        @dragend="handleMarkerDrag"
      />
      <LCircle
        v-bind="circleProps"
        :events="['popupopen']"
        @popupopen="handleCirclePopup"
        :popup="{
          content: 'Yas, queen.'
        }"
      />
      <LPolygon
        v-bind="polygonProps" 
        enable-bus
        :events="['mouseover']"
        @ready="handlePolygonReady"
        @mouseover="handlePolygonHover"
      />
    </LMap>

    <div class="event-list">
      <span>Map Clicks: {{ mapClick }}</span>
      <span>Polygon Hovers: {{ polygonHovers }}</span>
      <span>Marker Drags: {{ markerDrags }}</span>
      <span>Circle Popup: {{ circlePopups }}</span>
    </div>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/leaflet-example/src/components/WorkingWithEvents.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </section>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LCircle,
  LPolygon
} from '@vue-mapp-kit/leaflet'

export default {
  name: 'WorkingWithEvents',

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
    LPolygon
  },

  data () {
    return {
      mapId: 'events-example',
      markerProps: { 
        latlng: [51.5, -0.09],
        options: {
          draggable: true
        }
      },
      circleProps: {
        latlng: [51.508, -0.11],
        options: {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 500
        }
      },
      polygonProps: {
        latlngs: [
          [51.509, -0.08],
          [51.503, -0.06],
          [51.51, -0.047]
        ],
      },
      tileLayer: {
        urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
        options: {
          attribution: 'Tiles &copy; Esri',
          maxZoom: 18,
          label: 'Default'
        }
      },
      mapClick: 0,
      polygonHovers: 0, 
      markerDrags: 0,
      circlePopups: 0
    }
  },

  methods: {
    handlePolygonReady(polygon) {
      polygon.bindTooltip("Boo.")
    },
    handleMapClick(event) {
      console.info("Event: ", event)
      this.mapClick++
    },
    handlePolygonHover({ event, layer }) {
      console.info("Event: ", event, ", Layer: ", layer)
      this.polygonHovers++
    },
    handleMarkerDrag({ event, layer }) {
      console.info("Event: ", event, ", Layer: ", layer)
      this.markerDrags++
    },
    handleCirclePopup({ event, layer }) {
      console.info("Event: ", event, ", Layer: ", layer)
      this.circlePopups++
    },
  }
}
</script>

<style lang="css">
  .event-list {
    display: flex;
  }

  .event-list span {
    flex: 1;
    font-size: 12px;
    padding: 3px;
    background-color: grey;
    color: #fff;
    font-weight: bold;
  }
</style>
