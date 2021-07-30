<template>
  <section id="basicMap" class="map-wrapper">
    <e-map
      :properties="{
        basemap
      }"
      key="basicMap"
    >
      <e-map-view
        :properties="{
          container: 'basicMap',
          zoom: 3,
          center: [-80, 35]
        }"
      >
        <e-scale-bar />
        <e-basemap-toggle 
          :properties="{ nextBasemap: 'hybrid' }"
          position="bottom-right"
        />
      </e-map-view>
    </e-map>

    <button @click="toggleBasemap">Custom toggle basemap</button>
  </section>
</template>

<script>
export default {
  name: 'BasicMap',

  data () {
    return {
      basemap: 'streets'
    }
  },

  methods: {
    toggleBasemap () {
      this.basemap = this.basemap === 'streets' ? 'gray' : 'streets'
    }
  }
}
</script>
