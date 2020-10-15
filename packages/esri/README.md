# @vue-mapp-kit/esri #

A component driven approach to managing Esri ArcGIS Javascript API 4.x objects using VueJS. Each component supported in this library has an almost identical interface to each respective class in [Esri](https://developers.arcgis.com/javascript/latest/api-reference/).

----------
## Getting Started
```
npm install --save leaflet @vue-mapp-kit/esri
yarn add leaflet @vue-mapp-kit/esri
```

Assuming you are using a `vue-cli` template, your `src/main.js` will look something like this:

```javascript
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import MappKitEsri from '@vue-mapp-kit/esri';

Vue.use(MappKitEsri);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
```

## Component Properties
As mentioned above, this library strives to have an almost identical interface to each respective class in the [Esri Javsacript ArcGIS API](https://developers.arcgis.com/javascript/latest/api-reference/). Each suppported component in this library will have a `properties` prop:
```javascript
<e-map
  :properties="{
    basemap: 'streets'
  }"
>
</e-map>

```
See [Map Properties](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#properties-summary) in the Esri Api Reference. The pattern is followed for each supported component in this library. 

For example, here is a GeoJSON layer:
```javascript
<e-geo-json-layer
  :properties="{
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
    copyright: 'USGS Earthquakes',
    popupTemplate: {
      title: 'Earthquake Info',
      content: 'Magnitude {mag} {type} hit {place} on {time:DateString}'
    }
  }"
/>
```
Tada!

----------

## Events
All events provided by the Esri ArcGIS api are supported in this library but need to be explicity passed in a special `events` prop. The name of the event is also the name of the emitter which passes up event object:
```javascript
<e-map-view
  :events="['click', 'double-click']"
  @click="() => {}"
  @double-click="() => {}"
  :properties="{
    container: 'basicMap',
    zoom: 3,
    center: [-80, 35]
  }"
>
</e-map-view>

```

This library also provide a special emitted evet called `ready` which is triggered after the Esri object has been loaded, instantiated and added to the map:
```javascript
<e-graphics-layer>
  <e-sketch-view-model
    :events="['create']"
    @create="handleSketchAdd"
    @ready="handleSketchReady"
  />
</e-graphics-layer>
```

----------

## Basic Map and MapView
```javascript
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
```
The MapView is a nested component under the Map component.

----------

## Provide and Inject (Add to Parent)
This library uses Vue's Provide and Inject so you don't have to worry about adding the "parent objects" to the `properties` prop or invoking any `.add()` methods on parent objects as you normally would with to construct certain Esri objects.

However, if you really wanted to, any component that "provides itself" to any children component also exposes the instantiated object through a scoped-slot. In some cases this is necessary like when using `GroupLayer`. Here's a more elaborate example:
```javascript
<e-map
  :properties="{
    basemap: 'streets'
  }"
>
  <template #default="{ map }">
    <e-map-view
      :properties="{
        map: map,
        container: 'groupings',
        zoom: 3,
        center: [-80, 35]
      }"
    >
      <e-graphics-layer :properties="{ title: 'More Graphics! '}">
        <e-graphic :properties="getPointProps" />
      </e-graphics-layer>
      
      <e-group-layer :properties="{ title: 'Group!' }">
        <template #default="{ groupLayer }">
          <e-graphics-layer
            :add-to="groupLayer"
            :properties="{ title: 'Graphics! '}"
          >
              <e-graphic :properties="getPolylineProps"/>
              <e-graphic :properties="getPolygonProps"/>
          </e-graphics-layer>
        </template>
      </e-group-layer>

      <e-layer-list />
    </e-map-view>
  </template>
</e-map>
```
Notice how the second `e-graphics-layer` has a prop called `add-to`? This is a special prop on all components that you can utilize if you want to bypass the default "provide and inject" functionality.

----------

## More info
 - More code examples in the [`esri-example`](../../projects/esri-example/src/components) project.
 - Supported components in the [src/components](src/components) directory.
