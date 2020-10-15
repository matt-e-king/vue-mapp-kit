<template>
  <section id="basicMap" class="map-wrapper">
    <e-map
      :properties="{
        basemap: 'streets'
      }"
      key="basicMap"
    >
      <e-map-view
        :properties="{
          container: 'basicMap',
          zoom: 3,
          center: [-80, 35]
        }"
      >
        <e-basemap-toggle 
          :properties="{ nextBasemap: 'hybrid' }"
          position="bottom-right"
        />
      </e-map-view>
    </e-map>
  </section>
</template>

<script>
export default {
  name: 'BasicMap'
}
</script>
