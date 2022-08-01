<template>
  <section id="imageryMap" class="map-wrapper">
    <e-map
      :properties="{
        basemap
      }"
      key="imageryMap"
    >
      <e-map-view
        :properties="{
          container: 'imageryMap',
          zoom: 3,
          center: [-80, 35]
        }"
        :events="['click']"
        @click="handleClick"
      >
        <e-imagery-layer
          :properties="{
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/ScientificData/SeaTemperature/ImageServer'
          }"
        />
      </e-map-view>
    </e-map>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ImageryMap',

  data () {
    return {
      basemap: 'streets-vector'
    }
  },

  methods: {
    handleClick ({ event, source: view }) {
      const {
        mapPoint: {
          latitude,
          longitude
        } = {}
      } = event

      axios.get('https://sampleserver6.arcgisonline.com/arcgis/rest/services/ScientificData/SeaTemperature/ImageServer/identify', {
        params: {
          f: 'json',
          // maxItemCount: 1,
          geometryType: 'esriGeometryPoint',
          geometry: {
            x: longitude,
            y: latitude
          }
        }
      })
        .then(result => { console.log(result) })
      // view.hitTest(event)
      //   .then(({ results }) => {
      //     console.log(event)
      //     console.log(results)
      //   })
      //   .catch(e => console.error(e))
    },
  }
}
</script>
