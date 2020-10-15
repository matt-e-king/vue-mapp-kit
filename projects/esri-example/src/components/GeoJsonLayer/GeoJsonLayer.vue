<template>
  <section id="geoJsonLayer" class="map-wrapper">
    <e-map
      :properties="{
        basemap: 'streets'
      }"
    >
      <!-- the default slot of e-map spits out the map object -->
        <e-map-view
          :properties="{
            container: 'geoJsonLayer',
            zoom: 3,
            center: [-80, 35]
          }"
        >
          <e-geo-json-layer :properties="getGeoJSONProps" />
        </e-map-view>
    </e-map>
  </section>
</template>

<script>
export default {
  name: 'GeoJsonLayer',

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
    }
  }
}
</script>
