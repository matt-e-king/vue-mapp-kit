# @vue-mapp-kit/esri #

A component driven approach to managing Esri ArcGIS Javascript API 4.x objects using VueJS. Each component supported in this library has an almost identical interface to each respective class in [Esri](https://developers.arcgis.com/javascript/latest/api-reference/).

## v4.x.x breaking changes

v4 of @vue-mapp-kit/esri is now using the ESM imports from `@arcgis/core` and the following must be considered:
 - Consumer must install the `@arcgis/core` dependency
 - Consumer must place import Esri global css, e.g. `@import "https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/dark/main.css";`
   - https://developers.arcgis.com/javascript/latest/es-modules/
 - Tree shaking
   - by default the library expects consumer to import the modules needed in their components
     - e.g. `import EMap from '@vue-mapp-kit/esri/src/components/EMap/EMap'`
 - Removed `loadModules`, consumer can use `@arcgis/core` for any additional Esri modules that are not included in this library

----------
## Getting Started
```
npm install --save @vue-mapp-kit/esri
yarn add @vue-mapp-kit/esri
```

Assuming you are using a `vue-cli` template, your `src/main.js` will look something like this:

```javascript
import Vue from 'vue'
import App from './App.vue'
import MappKitEsri from '@vue-mapp-kit/esri'

// must use Vue.use if you want to use $mappKitBus
Vue.use(MappKitEsri)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

 - Code examples in the [`examples`](../../packages/examples/src/pages/esri) package.
 - Supported components in the [src/components](src/components) directory, which follow a similar organizational structure as the [API Reference](https://developers.arcgis.com/javascript/latest/api-reference/)

## Component Properties
As mentioned above, this library strives to have an almost identical interface to each respective class in the [Esri Javsacript ArcGIS API](https://developers.arcgis.com/javascript/latest/api-reference/). Each suppported component in this library will have a `properties` prop:
```javascript
<EMap
  :properties="{
    basemap: 'streets-vector'
  }"
>
</EMap>

```
See [Map Properties](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#properties-summary) in the Esri Api Reference. The pattern is followed for each supported component in this library. 

For example, here is a GeoJSON layer:
```javascript
<EGeoJsonLayer
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
<EMapView
  :events="['click', 'double-click']"
  @click="() => {}"
  @double-click="() => {}"
  :properties="{
    container: 'basicMap',
    zoom: 3,
    center: [-80, 35]
  }"
/>
```

This library also provide a special emitted evet called `ready` which is triggered after the Esri object has been loaded, instantiated and added to the map:
```javascript
<EGraphicsLayer>
  <ESketchViewModel
    :events="['create']"
    @create="handleSketchAdd"
    @ready="handleSketchReady"
  />
</EGraphicsLayer>
```

## Custom Event Bus

Additionaly, you can pass a boolean prop called `enable-bus` which will registered each event passed in the `events` prop on the global `this.$mappKitBus` bus. The $mappKitBus is only available if you include the `Vue.use` statement. See [Getting Started](#getting-start) section.
```javascript
<EMapView
  :events="['click', 'double-click']"
  @click="() => {}"
  @double-click="() => {}"
  enable-bus
  :properties="{
    container: 'basicMap',
    zoom: 3,
    center: [-80, 35]
  }"
/>
```

The event naming convention and listeners looks like this:
```javascript
<script>
export default {
  mounted () {
    this.$mappKitBus.$on('MapView-ready', this.handlerFunction)
    this.$mappKitBus.$on('MapView-click', this.handlerFunction)
    this.$mappKitBus.$on('MapView-double-click', this.handlerFunction)

    // if you passed an id to the properties prop:
    this.$mappKitBus.$on('MapView-id-click', this.handlerFunction)
  },

  methods: {
    handlerFunction ({ event, source }) {
      // do something
    }
  }
}
</script>
```
----------

## Basic Map and MapView
```javascript
<template>
  <section id="basicMap" class="map-wrapper">
    <EMap
      :properties="{
        basemap: 'streets-vector'
      }"
      key="basicMap"
    >
      <EMapView
        :properties="{
          container: 'basicMap',
          zoom: 3,
          center: [-80, 35]
        }"
      >
        <EBasemapToggle
          :properties="{ nextBasemap: 'hybrid' }"
          position="bottom-right"
        />
      </EMapView>
    </EMap>
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
<EMap
  :properties="{
    basemap: 'streets-vector'
  }"
>
  <template #default="{ map }">
    <EMapView
      :properties="{
        map: map,
        container: 'groupings',
        zoom: 3,
        center: [-80, 35]
      }"
    >
      <EGraphicsLayer :properties="{ title: 'More Graphics! '}">
        <EGraphic :properties="getPointProps" />
      </EGraphicsLayer>
      
      <EGroupLayer :properties="{ title: 'Group!' }">
        <template #default="{ groupLayer }">
          <EGraphicsLayer
            :add-to="groupLayer"
            :properties="{ title: 'Graphics! '}"
          >
              <EGraphic :properties="getPolylineProps"/>
              <EGraphic :properties="getPolygonProps"/>
          </EGraphicsLayer>
        </template>
      </EGroupLayer>

      <ELayerList />
    </EMapView>
  </template>
</EMap>
```
Notice how the second `EGraphicsLayer` has a prop called `add-to`? This is a special prop on all components that you can utilize if you want to bypass the default "provide and inject" functionality.

----------

## More info
 - More code examples in the [`examples`](../../packages/examples/src/components) package.
 - Supported components in the [src/components](src/components) directory.
