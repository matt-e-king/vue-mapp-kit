<template>
  <section id="loadModules" class="map-wrapper">
    <e-map
      :properties="{
        basemap
      }"
      key="loadModules"
    >
      <e-map-view
        :properties="{
          container: 'loadModules',
          zoom: 3,
          center: [-80, 35]
        }"
        @ready="handleReady"
      />
    </e-map>
  </section>
</template>

<script>
import { loadModules } from '@vue-mapp-kit/esri'

export default {
  name: 'LoadModules',

  data () {
    return {
      basemap: 'streets'
    }
  },

  methods: {
    handleReady (view) {
      loadModules(['esri/widgets/ScaleBar'])
        .then(result => {
          const ScaleBar = result[0]
          view.ui.add(new ScaleBar({
            view
          }))
        })
    }
  }
}
</script>
