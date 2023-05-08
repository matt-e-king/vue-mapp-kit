
# @vue-mapp-kit/esri-leaflet #

This library (or set of components) uses [@vue-mapp-kit/leaflet](https://github.com/matt-e-king/vue-mapp-kit) as its primary dependency. Similar to how @vue-mapp-kit/leaflet provides a "vuetified" approach to handling Leaflet objects, MappKitEsriLeaflet provides the same methodology for handling Esri-Leaflet objects.

**This project is currently in development with ZERO test coverage! Use at your own risk :)** 
 - [v5 Changes](#v5-changes)
 - [Getting Started](#getting-started)
 - [Code Examples](#code-examples)
 - [Accessing Objects in your script](#accessing-objects-in-your-script)

----------

### Demo
Clone repo and `cd` into `/packages/leaflet-examples` and run `yarn install && yarn dev`

----------

## V5 Changes
 - Migrated to Vue 3
 - Uses `mitt` to emulate old Vue 2 event system
 - Direct import paths changed to include `lib`
  - Old: `import FeatureLayer from '@vue-mapp-kit/esr-leaflet/FeatureLayer/FeatureLayer'`
  - New: `import FeatureLayer from '@vue-mapp-kit/esr-leaflet/lib/FeatureLayer/FeatureLayer.vue'`

----------
## Getting Started
```
npm install --save leaflet esri-leaflet @vue-mapp-kit/leaflet @vue-mapp-kit/esri-leaflet
yarn add leaflet esri-leaflet @vue-mapp-kit/leaflet @vue-mapp-kit/esri-leaflet
```

`@vue-mapp-kit/esri-leaflet` is just a collection of components and doesn't require an install, but `@vue-mapp-kit/leaflet` as it's dependency still does require an install. 

Assuming you are using `vite` as your build/bundler, your `src/main.js` will look something like this:
```javascript
import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import VueMappKitLeafet from '@vue-mapp-kit/leaflet'

const a = createApp(App)
a.use(VueMappKitLeafet)
a.use(router)

a.mount('#app')

```

----------
## Code Examples
These simple examples mirror the examples found in the [Esri-Leaflet documentation](https://esri.github.io/esri-leaflet/examples/)

 - [Tiled Map Layer](../../packages/examples/src/pages/esri-leaflet/TiledMapLayer.vue)
 - [Feature Layer](../../packages/examples/src/pages/esri-leaflet/FeatureLayer.vue)
 - [Image Map Layer](../../packages/examples/src/pages/esri-leaflet/ImageMapLayer.vue)
 - [Dynamic Map Layer](../../packages/examples/src/pages/esri-leaflet/DynamicMapLayer.vue)
 - [Clustering Points **](../../packages/examples/src/pages/esri-leaflet/ClusteringPoints.vue)
 - [Event](../../packages/examples/src/pages/esri-leaflet/EventSibling.vue)

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