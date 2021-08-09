<template>
  <div class="example-map">
    <h3>Layer Groups and Layers Control</h3>
    <p>Following Leaflet tutorial: <a href="https://leafletjs.com/examples/layers-control/" target="_blank">Layer Groups and Layers Control</a></p>
    <l-map
      map-id="groups"
      :options="{
        center: [39.74, -104.99],
        zoom: 8
      }"
    >
      <l-control-layers>
        <template #default="{ addBaseLayer, addOverlay }">
          <l-tile-layer
            url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
            :options="{
              attribution: 'Tiles &copy; Esri',
              maxZoom: 18,
              label: 'Default'
            }"
            @ready="(module) => addBaseLayer(module, 'Topo')"
          />
          <l-tile-layer
            url-template="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            :options="{
              attribution: 'Tiles &copy; Esri',
              maxZoom: 18,
              label: 'Default'
            }"
            @ready="(module) => (addBaseLayer(module, 'Street'))"
          />

          <l-feature-group
            @ready="(module) => (addOverlay(module, 'Cities'))"
          >
            <l-marker
              :latlng="[39.61, -105.02]"
              :popup="{
                content: 'This is Littleton, CO.'
              }"
            />
            <l-marker
              :latlng="[39.74, -104.99]"
              :popup="{
                content: 'This is Denver, CO.'
              }"
            />
            <l-marker
              :latlng="[39.73, -104.8]"
              :popup="{
                content: 'This is Aurora, CO.'
              }"
            />
            <l-marker
              :latlng="[39.77, -105.23]"
              :popup="{
                content: 'This is Golden, CO.'
              }"
            />
          </l-feature-group>
        </template>
      </l-control-layers>
    </l-map>
  </div>
</template>

<script>
export default {
  name: 'GroupsAndControls'
}
</script>
