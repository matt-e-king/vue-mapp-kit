<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <!-- <h3>Custom Icons</h3>
    <p>Following Leaflet tutorial: <a href="https://leafletjs.com/examples/custom-icons/" target="_blank">Markers With Custom Icons</a></p> -->
    <LMap
      map-id="custom-icon"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
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

      <LMarker
        :latlng="[51.5, -0.09]"
        :options="options"
        :popup="{
          content: 'I am a green leaf.',
          open: true
        }"
      />
    </LMap>
  </section>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker
} from '@vue-mapp-kit/leaflet'
import { icon } from 'leaflet'
import iconUrl from '/leaf-green.png'
import shadowUrl from '/leaf-shadow.png'

export default {
  name: 'CustomIcon',

  components: {
    LMap,
    LTileLayer,
    LMarker
  },

  data () {
    return {
      options: {
        icon: icon({
          iconUrl,
          shadowUrl,
          iconSize:     [38, 95], // size of the icon
          shadowSize:   [50, 64], // size of the shadow
          iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        })
      }
    }
  }
}
</script>
