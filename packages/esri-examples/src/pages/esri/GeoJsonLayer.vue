<template>
  <section
    id="map"
    class="GeoJson page__map-wrapper"
  >
    <EMap
      :properties="{
        basemap: 'streets-vector'
      }"
    >
      <EMapView
        :properties="{
          container: 'map',
          zoom: 2,
          center: [-168, 46]
        }"
      >
        <EGeoJsonLayer :properties="getGeoJSONProps" />
      </EMapView>
    </EMap>

    <a
      href="https://developers.arcgis.com/javascript/latest/sample-code/sandbox/?sample=layers-geojson"
      target="_blank"
      rel="noopener"
      class="GeoJsonLayer__sandbox page__map-sandbox-link"
    >
      Esri Sandbox Example
    </a>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView'
import EGeoJsonLayer from '@vue-mapp-kit/esri/lib/layers/EGeoJsonLayer/EGeoJsonLayer'

const template = {
  title: 'Earthquake Info',
  content: 'Magnitude {mag} {type} hit {place} on {time}',
  fieldInfos: [
    {
      fieldName: 'time',
      format: {
        dateFormat: 'short-date-short-time'
      }
    }
  ]
}

const renderer = {
  type: 'simple',
  field: 'mag',
  symbol: {
    type: 'simple-marker',
    color: 'orange',
    outline: {
      color: 'white'
    }
  },
  visualVariables: [
    {
      type: 'size',
      field: 'mag',
      stops: [
        {
          value: 2.5,
          size: '4px'
        },
        {
          value: 8,
          size: '40px'
        }
      ]
    }
  ]
}

export default {
  name: 'GeoJsonLayer',

  components: {
    EMap,
    EMapView,
    EGeoJsonLayer
  },

  computed: {
    getGeoJSONProps() {
      return {
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
        copyright: 'USGS Earthquakes',
        popupTemplate: template,
        renderer: renderer,
        orderBy: {
          field: 'mag'
        }
      }
    }
  }
}
</script>

<style scoped>
  .GeoJsonLayer {
    position: relative;
  }

  .GeoJsonLayer__sandbox {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }
</style>
