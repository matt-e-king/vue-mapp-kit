# @vue-mapp-kit/leaflet #

A component driven approach to managing Leaflet objects using Vue. Each component supported in this library has an almost identical interface to each respective class in [Leaflet](https://leafletjs.com/reference-1.7.1.html).

### Table of Contents
 - [Getting Started](#getting-started)
 - [Quick Start Guide](#quick-start-guide)
   - [Preparing your page](#preparing-your-page)
   - [Setting up the map](#setting-up-the-map)
   - [Markers, circles and polygons](#markers-circles-and-polygons)
   - [Working with popups](#working-with-popups)
   - [Events](#events)
   - [Groups](#feature-and-layer-groups)
 - [More Code Examples Here](https://github.com/matt-e-king/vue-mapp-kit/tree/master/projects/leaflet-example/src/components)
 - [EsriLeaflet (@vue-mapp-kit/esri-leaflet)](https://github.com/matt-e-king/vue-mapp-kit/tree/master/packages/esri-leaflet)

### Demos
[Demo for all code exmamples in /projects/leaflet-example/src/components](https://cct.cals.arizona.edu/vueaflet/)

----------
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

## Quick Start Guide
These simple examples mirror the effort in the [Leaflet Quick Start Guide](http://leafletjs.com/examples/quick-start/). These examples use the single file component structure, loaded by `vue-loader`


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
When this plugin is ingested by Vue, `Vue.use(MappKitLeaflet)`, all MappKitLeaflet components are globally registered. Add `<l-map />` which takes a string prop called `mapId` and object props called `options`. You'll notice this follows a similar interface as the [`Leaflet.map`](https://leafletjs.com/reference-1.7.1.html#map-example). **All MappKitLeaflet components aspire to have a similar pattern; utilizing the same instantiating signature used to create its corresponding Leaflet object.** `map-id` string value becomes the `div#id` the Leaflet map will mount into:
```
<template>
  <div class="map-container">
    <l-map
      map-id="mainMap"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    />
  </div>
</template>

<script>
export default {

}
</script>
```
You should have a blank, gray, tile-less map :) The `<l-map />` component uses the Vue provide/inject in order to add nested children to the map.

Now let's add a `<l-tile-layer/>` component as a nested child to `<l-map/>`. The `<l-tile-layer/>` component accepts two props, `urlTemplate` and `options`:
```
<template>
  <div class="map-container">
    <l-map
      map-id="mainMap"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    >
      <l-tile-layer
        url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        :options="{
          attribution: 'Tiles &copy; Esri',
          maxZoom: 18,
          label: 'Default'
        }"
      />
    </l-map>
  </div>
</template>

<script>
export default {
  
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
    <l-map
      map-id="mainMap"
      :options="{
        center: [51.505, -0.09],
        zoom: 13
      }"
    >

      ...

      <l-marker :latlng="[51.5, -0.09]"/>
    </l-map>
  </div>
</template>

<script>  
export default {

}
</script>
```
Adding a circle and polygon are fairly similar:
```
<l-marker :latlng="[51.5, -0.09]"/>
<l-circle
  :latlng="[51.508, -0.11]"
  :options="{
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
  }"
/>

<l-polygon
  :latlngs="[
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
  ]"
/>
```
### Working with popups
Popups starts to expose some of the flexibility of VueMappKit. You can handle popups in two ways:

1. Use `@ready` event to pass layer object to method and then use `.bindPopup('')`
2. Use custom VueMappKit prop `popup.content` to enable and `popup.open` to open on mount

Every component in VueMappKit comes with a `@ready` event that passes back the instantiated Leaflet object. Technically, you could use the `@ready` event on `<l-map />` to then create the rest of your map functionality instead of this nest-component driven approach.

The `popup` prop is custom to VueMappKit.
```
...

<l-marker
  :latlng="[51.5, -0.09]"
  @ready="(event) => { event.module..bindPopup('') }"
/>

<l-marker
  :latlng="[51.5, -0.09]"
  :popup="{
    content: 'I am a popup',
    open: true
  }"
/>

<l-circle
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

<l-polygon
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
See full Quick Start example [here](https://github.com/matt-e-king/vue-mapp-kit/blob/master/projects/leaflet-example/src/components/QuickStart.vue)

### Events
Pass in an array events (as strings) that are supported by the layer type. Each event passed will then be registered as a listener on the component. See [Leaflets docs](https://leafletjs.com/reference-1.7.1.html) for events. There is a "ready" event that is handle by MappKitLeaflet for you :). Each Leaflet supported event `$emits` an `{ event, module }` object.

Additionaly, you can pass a boolean prop called `enable-bus` which will registered each event passed in `events` prop on the global `this.$mappKitBus` bus.

See full working example [here](https://github.com/matt-e-king/vue-mapp-kit/blob/master/projects/leaflet-example/src/components/WorkingWithEvents.vue).

----------

### Feature and Layer groups
Similar to `<l-map />`, both `<l-feature-group />` and `<l-layer-group />` use the Vue provide/inject to add any nested child layers to the appropriate parent layer. See full working example [here](../../projects/leaflet-example/src/components/GroupsAndControls.vue).