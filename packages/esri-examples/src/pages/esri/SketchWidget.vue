<template>
  <section
    id="map"
    class="SketchWidget page__map-wrapper"
  >
    <EMap
      :properties="{
        basemap: 'streets-vector'
      }"
    >
      <EMapView
        :properties="{
          container: 'map',
          zoom: 3,
          center: [-80, 35]
        }"
      >
        <EGraphicsLayer>
          <ESketch
            :events="['create']"
            @create="handleSketchAdd"
          />
        </EGraphicsLayer>
      </EMapView>
    </EMap>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView'
import EGraphic from '@vue-mapp-kit/esri/lib/EGraphic/EGraphic'
import EGraphicsLayer from '@vue-mapp-kit/esri/lib/layers/EGraphicsLayer/EGraphicsLayer'
import ESketch from '@vue-mapp-kit/esri/lib/widgets/ESketch/ESketch'

export default {
  name: 'SketchWidget',

  components: {
    EMap,
    EMapView,
    EGraphic,
    EGraphicsLayer,
    ESketch
  },

  methods: {
    handleSketchAdd (obj) {
      const {
        event: {
          state,
          graphic
        } = {}
      } = obj

      if (state === 'complete') {
        console.log(graphic)
      }
    }
  }
}
</script>
