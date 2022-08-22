<template>
  <section
    id="map"
    class="MapImageLayer page__map-wrapper"
  >
    <EMap
      :properties="{
        basemap
      }"
      key="map"
    >
      <ESceneView
        :properties="{
          container: 'map'
        }"
        @ready="handleSceneViewReady"
      >
        <EMapImageLayer
          :properties="mapImageProps"
          @ready="handleMapImageReady"
        />
      </ESceneView>
    </EMap>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap'
import ESceneView from '@vue-mapp-kit/esri/lib/views/ESceneView/ESceneView'
import EMapImageLayer from '@vue-mapp-kit/esri/lib/layers/EMapImageLayer/EMapImageLayer'

export default {
  name: 'MapImageLayerPortalItem',

  components: {
    EMap,
    ESceneView,
    EMapImageLayer
  },

  data () {
    return {
      basemap: 'dark-gray-vector',
      mapImageProps: {
        portalItem: {
          id: 'd7892b3c13b44391992ecd42bfa92d01'
        }
      }
    }
  },

  created () {
    this.SceneView = null
  },

  methods: {
    handleSceneViewReady (view) {
      this.SceneView = view
    },
    handleMapImageReady (mapImage) {
      this.SceneView
        .goTo(mapImage.fullExtent)
        .catch((error) => {
          if (error.name != 'AbortError') {
            console.error(error)
          }
        })
    }
  }
}
</script>
