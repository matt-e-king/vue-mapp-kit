
# @vue-mapp-kit/esri-leaflet #

This library (or set of components) uses [@vue-mapp-kit/leaflet](https://github.com/matt-e-king/vue-mapp-kit) as its primary dependency. Similar to how @vue-mapp-kit/leaflet provides a "vuetified" approach to handling Leaflet objects, MappKitEsriLeaflet provides the same methodology for handling MappKitEsriLeaflet objects. All objects are managed in a Vuex store, providing the developer easy access from anywhere in their Vue application.

**This project is currently in development with ZERO test coverage! Use at your own risk :)** 

 - [Getting Started](#getting-started)
 - [Code Examples](#code-examples)
 - [Quick Start Guide](#quick-start-guide)

----------
## Getting Started
```
npm install --save @vue-mapp-kit/leaflet @vue-mapp-kit/esri-leaflet
yarn add @vue-mapp-kit/leaflet @vue-mapp-kit/esri-leaflet
```

**Note: You must also yarn/npm install `esri-leaflet`, `esri-leaflet-cluster (must use 2.0.0)` and `leaflet.markercluster`
Assuming you are using a `vue-cli` template, your `src/main.js` will look something like this:

```
import Vue from 'vue'
import App from './App'
import store from 'store'
import MappKitLeaflet from '@vue-mapp-kit/leaflet' // core comes as a dependency of @vue-mapp-kit/esri-leaflet
import MappKitEsriLeaflet from '@vue-mapp-kit/esri-leaflet'

// pass your vuex store to MapKitLeaflet
Vue.use(MappKitLeaflet, { store })
Vue.use(MappKitEsriLeaflet)

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
```
NOTE: This library relies on Vuex in order to store your Leaflet objects.

----------
## Code Examples
These simple examples mirror the examples found in the [MappKitEsriLeaflet documentation](https://esri.github.io/esri-leaflet/examples/)

 - [Showing ArcGIS Basemap](https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/ShowingArcGisBasemap.vue)
 - [Basemap With Labels](https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/BasemapWithLabels.vue)
 - [Simple Feature Layer](https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/SimpleFeatureLayer.vue)
 - [Simple Image Map Layer](https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/SimpleImageMapLayer.vue)
 - [Clustering Points](https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/esri-leaflet-example/src/components/ClusteringPoints.vue)

More examples coming soon!

----------
## Quick Start Guide
Coming soon! Will provide a full walk through to take advantage of all sorts of MappKitEsriLeaflet features, working with events, working with queries, and managing your MappKitEsriLeaflet objects using Vuex.

### Events
Pass in an array events (as strings) that are supported by the esri layer type. There is a "ready" event that is handle by MappKitEsriLeaflet for you :). Each Leaflet supported event `$emits` back an `{ event, layer }` object:
```
<template>
  <div class="example-map">
    <l-map :mapId="mapId" :events="['click']" v-on:click="handleMapClick">
      ...
      
      <e-cluster-feature-layer 
        v-bind="featureLayerOptions"
        :events="['clusterclick']"
        enable-bus
        v-on:clusterclick="handleClusterClick"/>
        
      ...
    </l-map>
  </div>
</template>

...
```

Additionaly, you can pass a boolean prop called `enabled-bus` which will also attach each event passed in the array of events to property attached to each component as `this.$mappKitBus`. See the `EventSibling.vue` component as an example.