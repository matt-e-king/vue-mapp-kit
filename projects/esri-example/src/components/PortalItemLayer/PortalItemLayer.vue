<template>
  <section id="portalItemLayer" class="map-wrapper">
    <e-map
      :properties="{
        basemap: 'streets'
      }"
    >
      <e-map-view
        :properties="{
          container: 'portalItemLayer',
          zoom: 4,
          center: [-97, 35]
        }"
      />

      <e-portal-item :properties="{ id: '8444e275037549c1acab02d2626daaee' }"/>
    </e-map>
  </section>
</template>

<script>
export default {
  name: 'PortalItemLayer',

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
