<template>
  <div id="app">
    <h1>Mapp Kit Esri-Leaflet</h1>
    <a href="https://github.com/matt-e-king/vue-mapp-kit/tree/master/packages/esri-leaflet" target="_blank" rel="noopener">Github</a>
    <a href="https://www.npmjs.com/org/vue-mapp-kit" target="_blank" rel="noopener">NPM</a>
    <p>This library (or set of components) uses <a href="https://cct.cals.arizona.edu/vueaflet/" target="_blank" rel="noopener">@vue-mapp-kit/leaflet</a> as its primary dependency. Similar to how MappKitLeaflet provides a "vuetified" approach to handling Leaflet objects, MappKitEsriLeaflet provides the same methodology for handling MappKitEsriLeaflet objects. All objects are managed in a Vuex store, providing the developer easy access from anywhere in their Vue application.</p>

    <tiled-map-layer />
    <feature-layer />
    <image-map-layer />
    <dynamic-map-layer />
    <clustering-points />
    <event-sibling />
  </div>
</template>

<script>
import TiledMapLayer from '@/components/TiledMapLayer'
import FeatureLayer from '@/components/FeatureLayer'
import ImageMapLayer from '@/components/ImageMapLayer'
import DynamicMapLayer from '@/components/DynamicMapLayer'
import ClusteringPoints from '@/components/ClusteringPoints'
import EventSibling from '@/components/EventSibling'

export default {
  name: 'app',
  components: {
    TiledMapLayer,
    FeatureLayer,
    ImageMapLayer,
    DynamicMapLayer,
    ClusteringPoints,
    EventSibling
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.example-map {
  margin: 0 auto 50px;
  width: 500px;
  height: 100%;
}

.example-map .map {
  height: 400px;
}

code {
  padding: 3px 5px;
  border-radius: 3px;
  background-color: #eee;
}
</style>
