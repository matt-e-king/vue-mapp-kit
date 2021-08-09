<template>
  <div class="example-map">
    <h2>Working with popups</h2>
    <p>
      Popups can be enabled in two main ways:
      <ol>
        <li>Use <pre>@ready</pre> event to pass layer object to method and then use <pre>.bindPopup('')</pre></li>
        <li>Use custom VueMappKit prop <pre>popup.content</pre> to enable and <pre>popup.open</pre> to open on mount</li>
      </ol>
    </p>
    <p>Each layer type emits a <pre>@ready</pre> event with the Leaflet layer instance as the main argument. You could </p>
    <l-map
      :map-id="mapId"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    >
      <l-tile-layer v-bind="tileLayer"/>
      <l-marker
        v-bind="markerProps"
        @ready="handleReadyMarker"
      />
      <l-circle
        v-bind="circleProps"
        :popup="{ content: 'I am a circle.', open: true }"
      />
      <l-polygon
        v-bind="polygonProps"
        :popup="{ content: 'I am a polygon.' }"
      />
    </l-map>

    <p>
      <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/leaflet-example/src/components/WorkingWithPopups.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'WorkingWithPopups',

  data() {
    return {
      mapId: 'example-three',
      markerProps: { latlng: [51.5, -0.09] },
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
      }
    }
  },

  methods: {
    handleReadyMarker(marker) {
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
    }
  }
}
</script>
