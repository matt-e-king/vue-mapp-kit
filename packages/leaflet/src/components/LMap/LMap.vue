<template>
  <div :id="mapId" class="map">
    <slot
      v-if="booted"
      :map="module"
    />
  </div>
</template>

<script>
import constructorMixin from '@/mixins/constructorMixin'

// TODO: is there a better place for this?
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default {
  name: 'LMap',

  provide () {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getMap: this.getModule,
      mapId: this.mapId
    }
  },

  mixins: [constructorMixin],

  props: {
    mapId: {
      type: String,
      default: 'mainMap'
    },
  },

  data() {
    return {
      moduleName: 'map'
    }
  },

  computed: {
    rootArgument () { return [this.mapId] }
  },

  methods: {
    // overriding constructor addToHook
    addToHook() {},
    getModule() {
      return this.module
    },
    // changeBasemap () {
    //   const {
    //     properties: {
    //       basemap = ''
    //     } = {}
    //   } = this

    //   if (!basemap) {
    //     console.warn('No basemap in properties')

    //     return
    //   }

    //   this.getMap().basemap = basemap
    // }
  }
}
</script>

<style src="leaflet/dist/leaflet.css"></style>
<style>
  .map {
    position: relative;
    width:100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  }
</style>
