<template>
  <section
    id="map"
    class="SketchViewModel page__map-wrapper"
  >
    <div class="SketchViewModel__controls">
      <button @click="handleSketch('point')">
        Point
      </button>
      <button @click="handleSketch('multipoint')">
        Multipoint
      </button>
      <button @click="handleSketch('polyline')">
        Polyline
      </button>
      <button @click="handleSketch('polygon')">
        Polygon
      </button>
      <button @click="handleSketch('rectangle')">
        Rectangle
      </button>
      <button @click="handleSketch('circle')">
        Circle
      </button>
    </div>
    <EMap
      :properties="{
        basemap: 'streets-vector'
      }"
    >
      <!-- the default slot of e-map spits out the map object -->
        <EMapView
          :properties="{
            container: 'map',
            zoom: 3,
            center: [-80, 35]
          }"
        >
          <EGraphicsLayer>
            <ESketchViewModel
              :events="['create']"
              :tool="tool"
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
import EGraphicsLayer from '@vue-mapp-kit/esri/lib/layers/EGraphicsLayer/EGraphicsLayer'
import ESketchViewModel from '@vue-mapp-kit/esri/lib/widgets/ESketchViewModel/ESketchViewModel'

export default {
  name: 'SketchViewModel',

  components: {
    EMap,
    EMapView,
    EGraphicsLayer,
    ESketchViewModel
  },

  data () {
    return {
      tool: ''
    }
  },

  methods: {
    handleSketch (shape) {
      this.tool = shape
    },
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

<style lang="sass">
  .SketchViewModel__controls
    position: absolute
    bottom: 10px
    left: 10px

  .SketchViewModel__controls button
    background-color: teal
    color: white
    padding: 5px 15px
    border-radius: 3px
    display: block
    min-width: 150px
    margin-bottom: 5px
    border: none

    &:hover
      cursor: pointer
</style>
