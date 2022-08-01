<template>
  <section
    id="map"
    class="TileLayer page__map-wrapper"
  >
    <EMap
      :properties="{
        basemap
      }"
      key="map"
    >
      <EMapView
        :properties="{
          container: 'map',
          zoom: 3,
          center: [-99, 39]
        }"
      >
        <ETileLayer
          :properties="tileLayerProps"
        />
      </EMapView>
    </EMap>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView'
import ETileLayer from '@vue-mapp-kit/esri/lib/layers/ETileLayer/ETileLayer'

export default {
  name: 'TileLayer',

  components: {
    EMap,
    EMapView,
    ETileLayer
  },

  data () {
    return {
      basemap: 'dark-gray-vector',
      tileLayerProps: {
        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
      }
    }
  }
}
</script>
