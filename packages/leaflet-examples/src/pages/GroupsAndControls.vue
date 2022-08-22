<template>
  <section
    id="map"
    class="page__map-wrapper"
  >
    <h3>Layer Groups and Layers Control</h3>
    <p>Following Leaflet tutorial: <a href="https://leafletjs.com/examples/layers-control/" target="_blank">Layer Groups and Layers Control</a></p>
    <LMap
      map-id="groups"
      :options="{
        center: [39.74, -104.99],
        zoom: 8
      }"
    >
      <LControlLayers>
        <template #default="{ addBaseLayer, addOverlay }">
          <LTileLayer
            url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
            :options="{
              attribution: 'Tiles &copy; Esri',
              maxZoom: 18,
              label: 'Default'
            }"
            @ready="(module) => addBaseLayer(module, 'Topo')"
          />
          <LTileLayer
            url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            :options="{
              attribution: 'Tiles &copy; Esri',
              maxZoom: 18,
              label: 'Default'
            }"
            @ready="(module) => (addBaseLayer(module, 'Street'))"
          />

          <LFeatureGroup
            @ready="(module) => (addOverlay(module, 'Cities'))"
          >
            <LMarker
              :latlng="[39.61, -105.02]"
              :popup="{
                content: 'This is Littleton, CO.'
              }"
            />
            <LMarker
              :latlng="[39.74, -104.99]"
              :popup="{
                content: 'This is Denver, CO.'
              }"
            />
            <LMarker
              :latlng="[39.73, -104.8]"
              :popup="{
                content: 'This is Aurora, CO.'
              }"
            />
            <LMarker
              :latlng="[39.77, -105.23]"
              :popup="{
                content: 'This is Golden, CO.'
              }"
            />
          </LFeatureGroup>
        </template>
      </LControlLayers>
    </LMap>
  </section>
</template>

<script>
import {
  LMap,
  LControlLayers,
  LTileLayer,
  LFeatureGroup,
  LMarker
} from '@vue-mapp-kit/leaflet'

export default {
  name: 'GroupsAndControls',

  components: {
    LMap,
    LControlLayers,
    LTileLayer,
    LFeatureGroup,
    LMarker
  }
}
</script>
