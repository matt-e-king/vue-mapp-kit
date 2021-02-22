<template>
  <main id="app">
    <section class="map-section">
      <h2>Basic Map</h2>
      <p>Simple map with a map view (and basemap toggle).</p>

      <basic-map />
    </section>

    <section class="map-section">
      <h2>Graphics</h2>
      <p>Add simple graphics to the map and map view.</p>

      <graphics />
    </section>

    <section class="map-section">
      <h2>Groupings</h2>
      <p>Add graphics to graphic layers and graphic layers to group layers!</p>

      <groupings />
    </section>

    <section class="map-section">
      <h2>GeoJSON Layer</h2>
      <p>Add a GeoJSON layer to the map view</p>

      <geo-json-layer />
    </section>

    <section class="map-section">
      <h2>Portal Item Layer</h2>
      <p>Add a Portal Item layer to the map view</p>

      <portal-item-layer />
    </section>

    <section class="map-section">
      <h2>Scene View</h2>
      <p>A map with a scene view.</p>

      <scene-view />
    </section>

    <section class="map-section">
      <h2>Sketch Widget</h2>
      <p>Stock Esri sketch widget</p>

      <sketch-widget />
    </section>

    <section class="map-section">
      <h2>Sketch View Modeler</h2>
      <p>Interact with the Sketch View Modeler with your own custom UI. Warning! Lots of boiler plate.</p>

      <sketch-view-modeler />
    </section>

    <section class="map-section">
      <h2>Load in additional modules</h2>
      <p>Not all Esri classes are available in this library, use "loadModules" to load in whatever Esri classes you want!</p>

      <load-modules />
    </section>
  </main>
</template>

<script>
import BasicMap from './components/BasicMap/BasicMap'
import GeoJsonLayer from './components/GeoJsonLayer/GeoJsonLayer'
import Graphics from './components/Graphics/Graphics'
import Groupings from './components/Groupings/Groupings'
import PortalItemLayer from './components/PortalItemLayer/PortalItemLayer'
import SceneView from './components/SceneView/SceneView'
import SketchWidget from './components/SketchWidget/SketchWidget'
import SketchViewModeler from './components/SketchViewModeler/SketchViewModeler'
import LoadModules from './components/LoadModules/LoadModules'

export default {
  components: {
    BasicMap,
    GeoJsonLayer,
    Graphics,
    Groupings,
    PortalItemLayer,
    SceneView,
    SketchWidget,
    SketchViewModeler,
    LoadModules
  },

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
  }
}
</script>


<style>
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
