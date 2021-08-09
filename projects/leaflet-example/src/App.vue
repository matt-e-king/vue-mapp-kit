<template>
  <div id="app">
    <h1>Mapp Kit Leaflet</h1>
    <a href="https://github.com/matt-e-king/vue-mapp-kit" target="_blank" rel="noopener">Github</a>
    <a href="https://www.npmjs.com/org/vue-mapp-kit" target="_blank" rel="noopener">NPM</a>

    <quick-start />
    <custom-icon />
    <using-geo-json />
    <vueaflet-geo-json-collection />
    <groups-and-controls />
    <working-with-events />
    <event-sibling />
    <other-vector-layers />
    <working-with-popups />
    <other-controls />
  </div>
</template>

<script>
import QuickStart from '@/components/QuickStart'
import CustomIcon from '@/components/CustomIcon'
import UsingGeoJson from '@/components/UsingGeoJson'
import VueafletGeoJsonCollection from '@/components/VueafletGeoJsonCollection'
import GroupsAndControls from '@/components/GroupsAndControls'
import WorkingWithEvents from '@/components/WorkingWithEvents'
import EventSibling from '@/components/EventSibling'
import OtherVectorLayers from '@/components/OtherVectorLayers'
import WorkingWithPopups from '@/components/WorkingWithPopups'
import OtherControls from '@/components/OtherControls'

export default {
  name: 'app',
  components: {
    QuickStart,
    CustomIcon,
    UsingGeoJson,
    VueafletGeoJsonCollection,
    GroupsAndControls,
    WorkingWithEvents,
    EventSibling,
    OtherVectorLayers,
    WorkingWithPopups,
    OtherControls
  }
}
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

pre {
  margin: 0;
  display: inline-block;
  background-color: #eee;
}
</style>
