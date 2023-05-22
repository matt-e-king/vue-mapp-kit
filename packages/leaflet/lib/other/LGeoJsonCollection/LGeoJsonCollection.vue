<template>
  <div class="geo-json-collection">
    <template
      v-for="(data, index) in collection"
      :key="index"
    >
      <!-- the key attr is what allows this to work! -->
      <LGeoJson
        :data="data" 
        :options="getOptions(getGeometryType(data))"
        :events="['add']"
        @add="handleAddedToMap"
      />
    </template>
  </div>
</template>

<script>
// TODO: also support FeatureCollection.feature, not just array
/**
  LGeoJsonCollection.vue

  GeoJSON best practice is to only create an array of features with like geo types
  However if you happen to have an array of features with a mixed collection of geo types
  this component will separate them out and mount LGeoJsonLayer(s) respectively

  This works well for search results from an Esri REST endpoint that returns GeoJSON
*/
import LGeoJson from '../LGeoJson/LGeoJson.vue'

export default {
  name: 'LGeoJsonCollection',

  components: {
    LGeoJson
  },

  data() {
    return {
      geoJsonLayers: [] 
    }
  },

  props: {
    data: { 
      type: Array,
      default() { return [] }
    },
    // see this.getOptions
    // see src/components/Examples/VueafletGeoJsonCollection
    // these props are callback functions to provide options for each geoType that the parent can control
    pointOptions: Function,
    multipointOptions: Function,
    linestringOptions: Function,
    multilinestringOptions: Function,
    polygonOptions: Function,
    multipolygonOptions: Function
  },

  computed: {
    collection () {
      /** 
        this methods reduces the prop.feautres array into:
        {
          'Point': [GeoJSON collection array],
          'Polygon': [GeoJSON collection array],
          ...
        }
      */
      let innerCollection = this.data.reduce((outcome, feature) => {
        let geoType = feature.geometry.type

        outcome[geoType]
          ? outcome[geoType].push(feature)
          : outcome[geoType] = [feature]

        return outcome
      }, {})

      return Object.values(innerCollection) || []
    }
  },

  methods: {
    getGeometryType(features) {
      let innerType
      let index = 0

      do {
        let { 
          geometry: {
            type
          } = {}
        } = features[index]

        innerType = type
        index++
      } while(!innerType)

      return innerType
    },
    getOptions(type) {
      return this[`${type.toLowerCase()}Options`](type) || {}
    },
    handleAddedToMap(obj) {
      this.geoJsonLayers.push(obj.layer)

      if(this.geoJsonLayers.length === this.collection.length) {
        this.$emit('ready', this.geoJsonLayers)
      }
    }
  }
}
</script>
