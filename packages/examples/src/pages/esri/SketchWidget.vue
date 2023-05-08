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
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap.vue'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView.vue'
import EGraphic from '@vue-mapp-kit/esri/lib/EGraphic/EGraphic.vue'
import EGraphicsLayer from '@vue-mapp-kit/esri/lib/layers/EGraphicsLayer/EGraphicsLayer.vue'
import ESketch from '@vue-mapp-kit/esri/lib/widgets/ESketch/ESketch.vue'

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
