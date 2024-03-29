# @vue-mapp-kit/leaflet #

A component driven approach to managing Leaflet objects using Vue. Each component supported in this library has an almost identical interface to each respective class in [Leaflet](https://leafletjs.com/reference-1.7.1.html).

## Vue 3 Upgrade
 * https://github.com/matt-e-king/vue-mapp-kit/tree/release/5.0.0/packages/leaflet

### Table of Contents
 - [v4 Changes](#v4-changes)
 - [Importing](#importing)
 - [Getting Started](#getting-started)
 - [Quick Start Guide](#quick-start-guide)
   - [Preparing your page](#preparing-your-page)
   - [Setting up the map](#setting-up-the-map)
   - [Markers, circles and polygons](#markers-circles-and-polygons)
   - [Accessing Objects in your script](#accessing-objects-in-your-script)
   - [Working with popups](#working-with-popups)
   - [Events](#events)
   - [Groups](#feature-and-layer-groups)
 - [GeoJSON](../../packages/leaflet-examples/src/components/UsingGeoJson.vue)
   - [GeoJSON Collection](../../packages/leaflet-examples/src/components/CustomGeoJsonCollection.vue): custom component dealing with multiple geotypes in same `FeatureCollection`
 - [More Code Examples Here](../../packages/leaflet-examples/src/components)
 - [EsriLeaflet (@vue-mapp-kit/esri-leaflet)](https://github.com/matt-e-king/vue-mapp-kit/tree/master/packages/esri-leaflet)

### Demo
Clone repo and `cd` into `/packages/leaflet-examples` and run `yarn install && yarn serve`

----------

## V4 BREAKING CHANGES
 * A Vuex store is no longer managed
 * Components are not automatically registered into your Vue app. Components need to be imported manually. See examples below.

----------

## Importing
This library build targets are UMD and individual components. The individual components (at the moment) require `vue-loader`.

Import components as UMD:
```
import { LMap, LMarker } from '@vue-mapp-kit/leaflet'
```

Import individual components:
```
import LMap from '@vue-mapp-kit/leaflet/LMap/LMap'
import LMarker from '@vue-mapp-kit/leaflet/ui/LMarker/LMarker'
```

See the `lib` directory after adding this package to your `node_modules` for other import paths.


## Getting Started
```
npm install --save leaflet @vue-mapp-kit/leaflet
yarn add leaflet @vue-mapp-kit/leaflet
```

Assuming you are using a `vue-cli` template, your `src/main.js` will look something like this:
```
import Vue from 'vue'
import App from './App.vue'
import MappKitLeaflet from '@vue-mapp-kit/leaflet'

Vue.use(MappKitLeaflet)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
### CSS
The consumer is also responsible for importing the Leaflet styles:
```
@import "leaflet/dist/leaflet.css"
```

## Quick Start Guide
These simple examples mirrors the effort in the [Leaflet Quick Start Guide](http://leafletjs.com/examples/quick-start/). These examples use the single file component structure, loaded by `vue-loader`

----------

### Preparing your page
Create a new Vue component with a container `div`:
```
<template>
  <div class="example-map"></div>
</template>

<script>
export default {

}
</script>

<style type="text/css">
  .example-map {
    height: 400px;
    width: 500px;
    margin: 10px auto;
  }
</style>
```


----------


### Setting up the map
Import and add `<LMap />` which takes a string prop called `mapId` and object props called `options`. You'll notice this follows a similar interface as the [`Leaflet.map`](https://leafletjs.com/reference-1.7.1.html#map-example). **All MappKitLeaflet components aspire to have a similar pattern; utilizing the same instantiating signature used to create its corresponding Leaflet object.** `map-id` string value becomes the `div#id` the Leaflet map will mount into:
```
<template>
  <div class="map-container">
    <LMap
      map-id="mainMap"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    />
  </div>
</template>

<script>
import { LMap } from '@vue-mapp-kit/leaflet'

export default {
  components: {
    LMap
  }
}
</script>
```
You should have a blank, gray, tile-less map :) The `<LMap />` component uses the Vue provide/inject in order to add nested children to the map.

Now let's add a `<LTileLayer/>` component as a nested child to `<LMap/>`. The `<LTileLayer/>` component accepts two props, `urlTemplate` and `options`:
```
<template>
  <div class="map-container">
    <LMap
      map-id="mainMap"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    >
      <LTileLayer
        url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        :options="{
          attribution: 'Tiles &copy; Esri',
          maxZoom: 18,
          label: 'Default'
        }"
      />
    </LMap>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer
} from '@vue-mapp-kit/leaflet'

export default {
  components: {
    LMap,
    LTileLayer
  }
}
</script>
```
Woo hoo! You should now see a map hovering over a place in London.

----------
### Markers, circles and polygons
Easily add other layers to your map! Let's add a marker:
```
<template>
  <div class="map-container">
    <LMap
      map-id="mainMap"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    >

      ...

      <LMarker :latlng="[51.5, -0.09]"/>
    </LMap>
  </div>
</template>

<script>  
import {
  LMap,
  LMarker
} from '@vue-mapp-kit/leaflet'

export default {
  components: {
    LMap,
    LMarker
  }
}
</script>
```
Adding a circle and polygon are fairly similar:
```
<LMarker :latlng="[51.5, -0.09]"/>
<LCircle
  :latlng="[51.508, -0.11]"
  :options="{
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
  }"
/>

<LPolygon
  :latlngs="[
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
  ]"
/>
```

### Accessing Objects in your script
Each component is equipped with a `@ready` event which will emit `{ event, module }` to whatever handler is used.

### Working with popups
Popups starts to expose some of the flexibility of VueMappKit. You can handle popups in two ways:

1. Use `@ready` event to pass layer object to method and then use `.bindPopup('')`
2. Use custom VueMappKit prop `popup.content` to enable and `popup.open` to open on mount

Every component in VueMappKit comes with a `@ready` event that passes back the instantiated Leaflet object. Technically, you could use the `@ready` event on `<LMap />` to then create the rest of your map functionality instead of this nest-component driven approach.

The `popup` prop is custom to VueMappKit.
```
...

<LMarker
  :latlng="[51.5, -0.09]"
  @ready="(event) => { event.module..bindPopup('') }"
/>

<LMarker
  :latlng="[51.5, -0.09]"
  :popup="{
    content: 'I am a popup',
    open: true
  }"
/>

<LCircle
  :latlng="[51.508, -0.11]"
  :options="{
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
  }"
  :popup="{
    content: 'I am a circle'
  }"
/>

<LPolygon
  :latlngs="[
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
  ]"
  :popup="{
    content: 'I am a polygon'
  }"
/>
```
See full Quick Start example [here](../../packages/leaflet-examples/src/components/QuickStart.vue)

### Events
Pass in an array events (as strings) that are supported by the layer type. Each event passed will then be registered as a listener on the component. See [Leaflets docs](https://leafletjs.com/reference-1.7.1.html) for events. There is a "ready" event that is handle by MappKitLeaflet for you :). Each Leaflet supported event `$emits` an `{ event, module }` object.

Additionaly, you can pass a boolean prop called `enable-bus` which will registered each event passed in `events` prop on the global `this.$mappKitBus` bus.

See full working example [here](../../packages/leaflet-examples/src/components/WorkingWithEvents.vue).

----------

### Feature and Layer groups
Similar to `<LMap />`, both `<LFeatureGroup />` and `<LLayerGroup />` use the Vue provide/inject to add any nested child layers to the appropriate parent layer. See full working example [here](../../packages/leaflet-examples/src/components/GroupsAndControls.vue).