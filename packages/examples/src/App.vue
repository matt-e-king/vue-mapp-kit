<template>
  <main id="app">
    <h1>New exmaples</h1>

    <div
      id="map"
      style="width:500px; height: 500px"
    >
      <e-map
        :properties="{
          basemap: 'streets-vector'
        }"
        key="map"
      >
        <e-map-view
          :properties="{
            container: 'map',
            zoom: 3,
            center: [-80, 35]
          }"
        >
          <!-- <e-scale-bar />
          <e-basemap-toggle 
            :properties="{ nextBasemap: 'hybrid' }"
            position="bottom-right"
          /> -->
        </e-map-view>
      </e-map>
    </div>
  </main>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/src/components/EMap/EMap.vue'
import EMapView from '@vue-mapp-kit/esri/src/components/views/EMapView/EMapView.vue'

export default {
  name: 'App',

  components: {
    EMap,
    EMapView
  }
}
</script>


<style>
@import "@arcgis/core/assets/esri/themes/dark/main.css";
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif
}

.map-section {
  width: 650px;
  max-width: 95vw;
  margin: 0 auto 75px;
  text-align: center;
}

.map-section h2 {
  margin-bottom: 0;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
}
</style>
