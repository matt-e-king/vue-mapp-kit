# Vueaflet #

A component driven approach to managing Leaflet objects using Vue and Vuex. Each component registers its Leaflet object in a Vuex store, allowing easy access to your Leaflet objects anywhere in your Vue application.

> BREAKING CHANGES from v0.6.0 to v1.0.0

 - Import changed from `vueaflet` to `@vue-mapp-kit/leaflet` and `@vue-mapp-kit/esri-leaflet`
 - `VueafletBus` now attached to root `Vue` instance
	 - Use `this.$vueafletBus` instead of  `import { VueafletBus } from 'vueaflet'`
 - Project is dependent on leaflet 1.3.3 above; use `import * as Leaflet from 'leaflet'`
 - `createVueafletStore` is deprecated, see [Getting Started](#getting-started)

 > BREAKING CHANGES going to v2.0.0

 - `leaflet` needs to be installed separately 

### Table of Contents
 - [Getting Started](#getting-started)
 - [Quick Start Guide](#quick-start-guide)
   - [Preparing your page](#preparing-your-page)
   - [Setting up the map](#setting-up-the-map)
   - [Markers, circles and polygons](#markers-circles-and-polygons)
   - [Working with popups](#working-with-popups)
   - [Try out some other simple layers](#try-out-some-other-simple-layers)
   - [Events](#events)
   - [Feature Groups](#feature-groups)
   - [Manage your layers using Vuex](#manage-your-layers-using-vuex)
 - [More Code Examples Here](https://github.com/webdev-cals-arizona-edu/vueaflet/tree/master/projects/vueaflet-example/src/components)
 - [EsriLeaflet (@vue-mapp-kit/esri-leaflet)](https://github.com/webdev-cals-arizona-edu/vueaflet/tree/master/packages/esri)

### Demos
[Demo for all code exmamples in /src/components/Examples](https://cct.cals.arizona.edu/vueaflet/)

### Features not documented

 - Layers
   - LGeoJsonLayer
   - LGeoJsonCollection (handles multiple geo types)
 - Vuex
   - **Still in development:** Instead of using the tag-like syntax inside of a `<template>`, you can simply pass a single Javascript object into `<l-map/>` component, and let `Veuaflet` do the rest! Documentation for shape of object coming soon.
 - Misc
   - Ordering z-index of panes using an `order` prop
   - Leaflet.PM (drawing shapes on the map)

### Feature in development

 - Lots!
 - **esri-vueaflet:** additional set of components inspired by esri-leaflet, that uses Vueaflet as a dependency.
 - Hosted, practical examples
 - Ensuring all "options" for each Leaflet UI layer are watched/reactive
   - i.e. instead of `setOpacity` or `setStyle`, just change `options.opacity`
 - Documentation for vueaflet store structure
 - Layer controls to toggle basemaps and layers
 - Evaluation of other Leaflet features that can be represented in component format

----------
## Getting Started
```
npm install --save @vue-mapp-kit/leaflet
yarn add @vue-mapp-kit/leaflet
```

Assuming you are using a `vue-cli` template, your `src/main.js` will look something like this:
```
import Vue from 'vue'
import App from './App'
import store from 'store'
import Vueaflet from '@vue-mapp-kit/leaflet'

// attaches a 'vueaflet' module into your Vuex store
Vue.use(Vueaflet, { store })

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
```
NOTE: This library relies on Vuex in order to store your Leaflet objects.

## Quick Start Guide
These simple examples mirror the effort in the [Leaflet Quick Start Guide](http://leafletjs.com/examples/quick-start/). These examples use the single file component structure, loaded by `vue-loader`


----------

### Preparing your page
Create a new Vue component with a container `div`:
```
<template>
  <div class="map-container"></div>
</template>

<script>
  export default {

  }
</script>

<style type="text/css">
  .map-container {
    height: 400px;
    width: 500px;
    margin: 10px auto;
  }
</style>
```


----------


### Setting up the map
When this plugin is ingested by Vue, `Vue.use(Vueaflet)`, all vueaflet components are globally registered. Add a nested `<l-map/>` which takes a string prop called `mapId`. This string value becomes the `div#id` the Leaflet map will mount into:
```
<template>
  <div class="map-container">
    <l-map :mapId="mapId"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mapId: 'exampleMap'
      }
    }
  }
</script>
```
You should have a blank, gray, tile-less map :) 

Now let's add a `<l-tile-layer/>` component as a nested child to `<l-map/>`. The `<l-tile-layer/>` component accepts two props, `urlTemplate` and `options`. You'll notice this follows a similar interface as the [`Leaflet.tileLayer`](http://leafletjs.com/reference-1.3.0.html#tilelayer). **All vueaflet components aspire to have a similar pattern; utilizing the same instantiating signature used to create its corresponding Leaflet object.** Here's the code snippet:
```
<template>
  <div class="map-container">
    <l-map :mapId="mapId">
      <l-tile-layer v-bind="tileLayer"/>
    </l-map>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mapId: 'exampleMap',
        tileLayer: {
          urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}',
          options: {
            attribution: 'Tiles &copy; Esri',
            maxZoom: 18,
            accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
            label: 'Default'
          }
        }
      }
    }
  }
</script>
```
Let's `setView` so we can start creating some layers. This is where Vuex comes into play; let's look at some code and then explain:
```
<script>
  export default {
    mounted() {
      this.$store.getters.getMap(this.mapId).setView([51.505, -0.09], 13)
    },

  ...
  }
</script>

```
When the `<l-map/>` component mounted, it added the Leaflet map object to a Vuex store. Documentation on the shape of the Vueaflet store coming soon. Here are some other ways to get the map object from the store:
```
...

mounted() {
  this.$store.state.vueaflet.maps[this.mapId].setView([51.505, -0.09], 13)
}

...
```
```
<script>
  import { mapGetters } from 'vuex'

  export default {
    mounted() {
      this.getMap(this.mapId).setView([51.505, -0.09], 13)
    },

  ...

    computed: {
      ...mapGetters(['getMap'])
    }
  }
</script>
```
Woo hoo! You should now see a map hovering over a place in London.

Before we move on, we'd like to mention the purpose of this library is solely to make it easier to "create" and "get" your Leaflet objects. Notice how our `<l-map/>` component doesn't contain props to `setView`, rather gives you an interface to:

 - Create the `Leaflet.map` object
 - Fetch the `Leaflet.map` object using the Vuex interface
 
Once you have the object... use it! All the Leaflet options and methods are at your disposal. However, there are *some* features that we provide an easy interface to. [See popups belows.](#working-with-popups)

----------
### Markers, circles and polygons
Easily add other layers to your map! Let's add a marker:
```
<template>
  <div class="map-container">
    <l-map :mapId="mapId">
      <l-tile-layer v-bind="tileLayer"/>
      <l-marker v-bind="markerProps"/>
    </l-map>
  </div>
</template>

<script>
  ...
  
  export default {
  ...
  
    data() {
      return {
    ...
        markerProps: { latlng: [51.5, -0.09] }
      }
    },

  ...
  }
</script>
```
Adding a circle and polygon are fairly similar:
```
...

<l-marker v-bind="markerProps"/>
<l-circle v-bind="circleProps"/>
<l-polygon v-bind="polygonProps"/>

...
...

markerProps: { latlng: [51.5, -0.09] },
circleProps: {
  latlng: [51.508, -0.11],
  options: {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }
},
polygonProps: {
  latlng: [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ],
}

...


----------

```
### Working with popups
Simply pass a string to the `popup` prop on each of these simple layer types:
```
...

<l-marker v-bind="markerProps" popup="Hello. I am a marker."/>
<l-circle v-bind="circleProps" popup="Hello. I am a circle."/>
<l-polygon v-bind="polygonProps" popup="Hello. I am a polygon."/>

...
```
Each layer `$emits` a `ready` status.

----------

### Try out some other simple layers
```
<l-rectangle v-bind="rectangleProps"/>
<l-polyline v-bind="polylineProps"/>

<!-- multiline is just a polyline with nested arrays for latlng -->
<l-polyline v-bind="multiPolylineProps"/>

...
...
polylineProps: {
  latlng: [
    [51.518, -0.1124],
    [51.522, -0.0890],
    [51.518, -0.0556]
  ],
  options: { color: 'red' }
},
rectangleProps: {
  latlng: [[51.496, -0.115], [51.489, -0.102]],
  options: {color: "#ff7800", weight: 1}
},
multiPolylineProps: {
  latlng: [
    [[51.495, -0.0705], [51.489, -0.058]],
    [[51.488, -0.07084], [51.498, -0.0506]]
  ],
  options: { color: 'blue' }
}
```

----------

### Events
Pass in an array events (as strings) that are supported by the layer type. See [Leaflets docs](http://leafletjs.com/reference-1.3.0.html) for events. There is a "ready" event that is handle by Vueaflet for you :). Each Leaflet supported event `$emits` back an `{ event, layer }` object:
```
<template>
  <div class="map-container">
    <l-map :mapId="mapId" :events="['click']" v-on:click="handleMapClick">
      ...
      
      <l-marker v-bind="dragMarkerProps"
        v-on:ready="handleMarkerReady"
        v-on:dragend="handleMarkerDragEnd"/>
        
      ...
    </l-map>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
  ...

    data() {
      return {
        ...
        
        dragMarkerProps: { 
          latlng: [51.488224, -0.090208],
          options: { draggable: true }
        },
        
        ...
      }
    },

    methods: {
      handleMapClick(e) {
        alert(e.latlng)
      },
      handleMarkerReady(marker) {
        marker.bindPopup('Drag me!').openPopup()
      },
      handleMarkerDragEnd({ event, layer }) {
        alert(`Marker dragged to: ${layer.getLatLng()}`)
      }
    }
  }
</script>
```
Additionaly, you can pass a boolean prop called `enabled-bus` which will also attach each event passed in the array of events to property attached to each component as `this.$vueafletBus`. More on that soon...

Couple of things to note:

 - `v-on:ready` occurs on all layers, custom to Vueaflet
 - The `draggable` options is not part of the `Leaflet.marker` api. This implementation is specific to Vueaflet and currently only supported on Markers.

----------

### Feature groups
Wrap the layers we created in previous examples in the `<l-feature-group/>` component. Make sure to include a `layer-name` prop for your feature group:

```
<template>
  <div class="map-container">
    <l-map :mapId="mapId" :events="['click']" v-on:click="handleMapClick">
      <l-tile-layer v-bind="tileLayer"/>
      
      <!-- leave a few layers out of the feature group, for fun! -->
    <l-marker v-bind="dragMarkerProps"
          :events="['dragend']"
          v-on:ready="handleMarkerReady"
          v-on:dragend="handleMarkerDragEnd"/>
      <l-rectangle v-bind="rectangleProps"/>
      <l-polyline v-bind="polylineProps"/>
      <l-polyline v-bind="multiPolylineProps"/>

      <l-feature-group layer-name="featureGroup">
        <l-marker v-bind="markerProps" popup="Hello. I am a marker."/>
        <l-circle v-bind="circleProps" popup="Hello. I am a circle."/>
        <l-polygon v-bind="polygonProps" popup="Hello. I am a polygon."/>
      </l-feature-group>
    </l-map>
  </div>
</template>
```
The nested layer components are injected with a data prop informing the `mounted()` lifecycle method to "add to parent" instead of "add to map". In other terms, `Leaflet.featureGroup().addLayer(marker)` instead of `Leaflet.marker().addTo(map)`.

Now you can toggle that feature layer without using `Leaflet.control`:
```
<template>
  <div class="map-container">
    <l-map :mapId="mapId" :events="['click']" v-on:click="handleMapClick">
      <l-tile-layer v-bind="tileLayer"/>

      <l-feature-group v-if="toggleFeatureGroup" layer-name="featureGroup">
        ...
      </l-feature-group>
    </l-map>

    <button @click.prevent="toggleFeatureGroup = !toggleFeatureGroup">Toggle Feature Group</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    mounted() {
      this.getMap(this.mapId).setView([51.505, -0.09], 13)
    },

    data() {
      return {
        ...
        toggleFeatureGroup: true,
        ...
      }
    },

    ...
  }
</script>
```

----------

### Manage your layers using Vuex
We've already provided an example for how to utilize the `vueaflet` store for retrieving the map object. You can achieve the same functionality for an `<l-feature-group/>`. By passing the feature group component a `layer-name` prop, you are also storing this `Leaflet.featureGroup` object in the vueaflet store using the `layer-name` as the object `key`. You can access that feature group like so:
```
/* layerName being the string prop passed to l-feature-group */
this.$store.state.vueaflet.namedLayers[layerName]
```
Here is a separate single file component that is part of the same example app. This is to showcase how these Leaflet objects can stretch across your entire app. This example uses a vueaflet `getter` to access and manipulate the feature group object created in `./App.vue`:
```
<template>
  <div class="mock-controls" style="margin-top: 30px;">
    <button @click.prevent="getGeoJSON">getGeoJSON</button>
    <button @click.prevent="openPopups">openPopups</button>
    <button @click.prevent="getBounds">getBounds</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getNamedLayer'])
    },

    methods: {
      getFeatureGroup() {
        return this.getNamedLayer('featureGroup')
      },
      getGeoJSON() {
        alert(JSON.stringify(this.getFeatureGroup().toGeoJSON()))
      },
      openPopups() {
        let timeToWait = 0

        this.getFeatureGroup().eachLayer((layer) => {
          setTimeout(() => {
            layer.openPopup()
          }, timeToWait)

          timeToWait += 500
        })
      },
      getBounds() {
        alert(JSON.stringify(this.getFeatureGroup().getBounds()))
      }
    }
  }
</script>
```
Meanwhile in the other component:
```
<template>
  <div class="map-container">
    <l-map :mapId="mapId" :events="['click']" v-on:click="handleMapClick">
      ...
    </l-map>

    ...

    <!-- New component! -->
    <mock-controls/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MockControls from './MockControls'

  export default {
    components: {
      MockControls
    },
    
    ...
  }
</script>
```
Full vueaflet store documentation coming soon...

