
# @vue-mapp-kit/esri-leaflet #

This library (or set of components) uses [@vue-mapp-kit/leaflet](https://github.com/matt-e-king/vue-mapp-kit) as its primary dependency. Similar to how @vue-mapp-kit/leaflet provides a "vuetified" approach to handling EsriLeaflet objects, MappKitEsriLeaflet provides the same methodology for handling EsriLeaflet objects.

**This project is currently in development with ZERO test coverage! Use at your own risk :)** 
 - [v4 Changes](#v4-changes)
 - [Getting Started](#getting-started)
 - [Code Examples](#code-examples)
 - [Accessing Objects in your script](#accessing-objects-in-your-script)

----------

### Demo
Clone repo and `cd` into `/packages/leaflet-examples` and run `yarn install && yarn serve`

----------

## V4 BREAKING CHANGES
 * Removed the ability to saved objects in Vuex store
 * Removed Basemap component

----------
## Getting Started
```
npm install --save leaflet esri-leaflet @vue-mapp-kit/leaflet @vue-mapp-kit/esri-leaflet
yarn add leaflet esri-leaflet @vue-mapp-kit/leaflet @vue-mapp-kit/esri-leaflet
```

```
import Vue from 'vue';
import App from './App.vue';
import MappKitLeaflet from '@vue-mapp-kit/leaflet'
// import MappKitEsriLeaflet from '@vue-mapp-kit/esri-leaflet'

Vue.use(MappKitLeaflet)
// Vue.use(MappKitEsriLeaflet) this is no longer necessary
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
```

----------
## Code Examples
These simple examples mirror the examples found in the [MappKitEsriLeaflet documentation](https://esri.github.io/esri-leaflet/examples/)

 - [Tiled Map Layer](../../packages/leaflet-examples/src/components/TiledMapLayer.vue)
 - [Feature Layer](../../packages/leaflet-examples/src/components/FeatureLayer.vue)
 - [Image Map Layer](../../packages/leaflet-examples/src/components/ImageMapLayer.vue)
 - [Dynamic Map Layer](../../packages/leaflet-examples/src/components/DynamicMapLayer.vue)
 - [Clustering Points **](../../packages/leaflet-examples/src/components/ClusteringPoints.vue)
 - [Event](../../packages/leaflet-examples/src/components/EventSibling.vue)

** Using the `ELClusterFeatureLayer` component, the consumer is responsible for `npm install` or `yarn add` the following dependencies:
 * `esri-leaflet-cluster`
 * `leaflet.markercluster`
and if you want to use default styles you must include/import the following css files:
```
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
```

## Accessing Objects in your script
Each component is equipped with a `@ready` event which will emit `{ event, module }` to whatever handler is used. This is the best way to access built-in methods on the respective `esri-leaflet` modules being instantiated.