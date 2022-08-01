<template>
  <section id="sketchWidget" class="map-wrapper">
    <e-map
      :properties="{
        basemap: 'streets-vector'
      }"
    >
      <!-- the default slot of e-map spits out the map object -->
        <e-map-view
          :properties="{
            container: 'sketchWidget',
            zoom: 3,
            center: [-80, 35]
          }"
        >
          <e-graphics-layer>
            <e-sketch
              :events="['create']"
              @create="handleSketchAdd"
            />
          </e-graphics-layer>
        </e-map-view>
    </e-map>
  </section>
</template>

<script>
export default {
  name: 'SketchWidget',

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
