<template>
  <div id="app">
    <h1>Mapp Kit Leaflet</h1>
    <a href="https://github.com/matt-e-king/vue-mapp-kit" target="_blank" rel="noopener">Github</a>
    <a href="https://www.npmjs.com/org/vue-mapp-kit" target="_blank" rel="noopener">NPM</a>


    <!--
    <using-geo-json />
    <vueaflet-geo-json-collection /> -->
    <quick-start />
    <custom-icon />
    <using-geo-json />
    <groups-and-controls />
    <vueaflet-geo-json-collection />
    <working-with-events />
    <event-sibling />
    <other-vector-layers />
    <working-with-popups />
    <other-controls />


    <!-- <setting-up-map></setting-up-map> -->
    <!-- <markers-circles-polygons></markers-circles-polygons>
    <working-with-popups></working-with-popups>
    <other-vector-layers></other-vector-layers>
    <working-with-events></working-with-events>
    <event-sibling></event-sibling>
    <readme-example></readme-example> -->
  </div>
</template>

<script>
import QuickStart from '@/components/QuickStart'
import GroupsAndControls from '@/components/GroupsAndControls'
import CustomIcon from '@/components/CustomIcon'
import SettingUpMap from '@/components/SettingUpMap'
import MarkersCirclesPolygons from '@/components/MarkersCirclesPolygons'
import WorkingWithPopups from '@/components/WorkingWithPopups'
import OtherVectorLayers from '@/components/OtherVectorLayers'
import WorkingWithEvents from '@/components/WorkingWithEvents'
import OtherControls from '@/components/OtherControls'
import EventSibling from '@/components/EventSibling'
import UsingGeoJson from '@/components/UsingGeoJson'
import VueafletGeoJsonCollection from '@/components/VueafletGeoJsonCollection'
import ReadmeExample from '@/components/ReadmeExample'

export default {
  name: 'app',
  components: {
    QuickStart,
    GroupsAndControls,
    CustomIcon,
    SettingUpMap,
    MarkersCirclesPolygons,
    WorkingWithPopups,
    OtherVectorLayers,
    EventSibling,
    WorkingWithEvents,
    OtherControls,
    UsingGeoJson,
    VueafletGeoJsonCollection,
    ReadmeExample
  },
};
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
