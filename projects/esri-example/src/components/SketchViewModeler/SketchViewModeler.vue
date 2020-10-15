<template>
  <section id="sketchViewModeler" class="map-wrapper">
    <div class="controls">
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
    <e-map
      :properties="{
        basemap: 'streets'
      }"
    >
      <!-- the default slot of e-map spits out the map object -->
        <e-map-view
          :properties="{
            container: 'sketchViewModeler',
            zoom: 3,
            center: [-80, 35]
          }"
        >
          <e-graphics-layer>
            <e-sketch-view-model
              :events="['create']"
              @create="handleSketchAdd"
              @ready="handleSketchReady"
            />
          </e-graphics-layer>
        </e-map-view>
    </e-map>
  </section>
</template>

<script>
export default {
  name: 'SketchViewModeler',

  mounted () {
    // not setting on data prop to avoid observable
    this.sketchModel = null
  },

  methods: {
    handleSketch (shape) {
      this.sketchModel.create(shape, { mode: 'click' })
    },
    handleSketchReady (sketch) {
      // not defined in data to make is non-observable
      this.sketchModel = sketch
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

<style>
.controls {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.controls button {
  background-color: teal;
  color: white;
  padding: 5px 15px;
  border-radius: 3px;
  display: block;
  min-width: 150px;
  margin-bottom: 5px;
  border: none;
}
</style>
