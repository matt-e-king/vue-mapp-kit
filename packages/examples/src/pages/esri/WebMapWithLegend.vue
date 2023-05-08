<template>
  <section
    id="map"
    class="WebMapWithLegend page__map-wrapper"
  >
    <EWebMap
      :properties="{
        portalItem: {
          id: '05e015c5f0314db9a487a9b46cb37eca'
        }
      }"
      key="map"
    >
      <EMapView
        :properties="{
          container: 'map'
        }"
      >
        <ELegend
          position="bottom-right"
        />
      </EMapView>
    </EWebMap>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap.vue'
import EWebMap from '@vue-mapp-kit/esri/lib/EWebMap/EWebMap.vue'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView.vue'
import ELegend from '@vue-mapp-kit/esri/lib/widgets/ELegend/ELegend.vue'

export default {
  name: 'WebMapWithLegend',

  components: {
    EMap,
    EWebMap,
    EMapView,
    ELegend
  }
}
</script>
