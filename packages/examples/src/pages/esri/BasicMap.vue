<template>
  <section
    id="map"
    class="BasicMap page__map-wrapper"
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
          center: [-80, 35]
        }"
      >
        <EScaleBar />
        <EBasemapToggle 
          :properties="{ nextBasemap: 'hybrid' }"
          position="bottom-right"
        />
      </EMapView>
    </EMap>

    <button
      @click="toggleBasemap"
      class="BasicMap__toggle"
    >
      Custom toggle basemap
    </button>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap.vue'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView.vue'
import EScaleBar from '@vue-mapp-kit/esri/lib/widgets/EScaleBar/EScaleBar.vue'
import EBasemapToggle from '@vue-mapp-kit/esri/lib/widgets/EBasemapToggle/EBasemapToggle.vue'

export default {
  name: 'BasicMap',

  components: {
    EMap,
    EMapView,
    EScaleBar,
    EBasemapToggle
  },

  data () {
    return {
      basemap: 'streets-vector'
    }
  },

  methods: {
    toggleBasemap () {
      this.basemap = this.basemap === 'streets-vector' ? 'gray-vector' : 'streets-vector'
    }
  }
}
</script>

<style scoped>  
  .BasicMap {
    position: relative;
  }

  .BasicMap__toggle {
    position: absolute;
    top: 30px;
    right: 30px;
  }
</style>
