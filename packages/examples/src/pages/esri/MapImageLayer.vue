<template>
  <section
    id="map"
    class="MapImageLayer page__map-wrapper"
  >
    <EMap
      :properties="{
        basemap
      }"
      key="map"
    >
      <EMapView
        :properties="{
          container: 'map',
          zoom: 3,
          center: [-99, 39]
        }"
      >
        <EMapImageLayer
          :properties="mapImageProps"
        />
      </EMapView>
    </EMap>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView'
import EMapImageLayer from '@vue-mapp-kit/esri/lib/layers/EMapImageLayer/EMapImageLayer'

const renderer = {
  type: 'simple', // autocasts as new SimpleRenderer()
  symbol: {
    type: 'simple-line', // autocasts as new SimpleLineSymbol()
    color: [255, 255, 255, 0.5],
    width: 0.75,
    style: 'long-dash-dot-dot'
  }
}

export default {
  name: 'MapImageLayer',

  components: {
    EMap,
    EMapView,
    EMapImageLayer
  },

  data () {
    return {
      basemap: 'dark-gray-vector',
      mapImageProps: {
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer',
        sublayers: [
          {
            id: 2,
            visible: true
          },
          {
            id: 4,
            visible: false,
            title: 'Railroads',
            renderer: renderer,
            source: {
              // indicates the source of the sublayer is a dynamic data layer
              type: 'data-layer',
              // this object defines the data source of the layer
              // in this case it's a feature class table from a file geodatabase
              dataSource: {
                type: 'table',
                // workspace name
                workspaceId: 'MyDatabaseWorkspaceIDSSR2',
                // table name
                dataSourceName: 'ss6.gdb.Railroads'
              }
            }
          },
          {
            id: 1,
            visible: true
          },
          {
            id: 0,
            visible: true
          }
        ]
      }
    }
  }
}
</script>
