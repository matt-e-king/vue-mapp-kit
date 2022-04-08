
# @vue-mapp-kit/esri-leaflet #

This library (or set of components) uses [@vue-mapp-kit/leaflet](https://github.com/matt-e-king/vue-mapp-kit) as its primary dependency. Similar to how @vue-mapp-kit/leaflet provides a "vuetified" approach to handling EsriLeaflet objects, MappKitEsriLeaflet provides the same methodology for handling EsriLeaflet objects.

**This project is currently in development with ZERO test coverage! Use at your own risk :)** 
 - [v3 Changes](#v3-changes)
 - [Getting Started](#getting-started)
 - [Code Examples](#code-examples)
 - [Accessing Objects in your script](#accessing-objects-in-your-script)

----------

### Demo
Clone repo and `cd` into `/projects/esri-leaflet-example` and run `yarn install && yarn serve`

----------

## V3 BREAKING CHANGES
 * Removed the ability to saved objects in Vuex store
 * Removed Basemap component
 * Change component naming convention: e.g. \<e-feature-layer\> to \<e-l-feature-layer\>

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
import MappKitEsriLeaflet from '@vue-mapp-kit/esri-leaflet'

Vue.use(MappKitLeaflet)
Vue.use(MappKitEsriLeaflet)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
```

----------
## Code Examples
These simple examples mirror the examples found in the [MappKitEsriLeaflet documentation](https://esri.github.io/esri-leaflet/examples/)

 - [Tiled Map Layer](../../projects/esri-leaflet-example/src/components/TiledMapLayer.vue)
 - [Feature Layer](../../projects/esri-leaflet-example/src/components/FeatureLayer.vue)
 - [Image Map Layer](../../projects/esri-leaflet-example/src/components/ImageMapLayer.vue)
 - [Dynamic Map Layer](../../projects/esri-leaflet-example/src/components/DynamicMapLayer.vue)
 - [Clustering Points **](../../projects/esri-leaflet-example/src/components/ClusteringPoints.vue)
 - [Event](../../projects/esri-leaflet-example/src/components/EventSibling.vue)

** Using the clustering feature requires you to `npm install` or `yarn add` the following dependencies:
 * `esri-leaflet-cluster`
 * `leaflet.markercluster`
and if you want to use default styles you must include/import the following css files:
```
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
```

## Accessing Objects in your script
Each component is equipped with a `@ready` event which will emit `{ event, module }` to whatever handler is used. This is the best way to access built-in methods on the respective `esri-leaflet` modules being instantiated.