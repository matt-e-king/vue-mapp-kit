<template>
  <div class="example-map">
    <h3>Custom Icons</h3>
    <p>Following Leaflet tutorial: <a href="https://leafletjs.com/examples/custom-icons/" target="_blank">Markers With Custom Icons</a></p>
    <l-map
      map-id="custom-icon"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    >
      <l-tile-layer
        url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}"
        :options="{
          attribution: 'Tiles &copy; Esri',
          maxZoom: 18,
          accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
          label: 'Default'
        }"
      />

      <l-marker
        :latlng="[51.5, -0.09]"
        :options="options"
        :popup="{
          content: 'I am a green leaf.',
          open: true
        }"
      />
    </l-map>
  </div>
</template>

<script>
import * as Leaflet from 'leaflet'
export default {
  name: 'CustomIcon',

  data () {
    return {
      options: {
        icon: L.icon({
          iconUrl: require('@/assets/leaf-green.png'),
          shadowUrl: require('@/assets/leaf-shadow.png'),
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

<style lang="sass">

</style>