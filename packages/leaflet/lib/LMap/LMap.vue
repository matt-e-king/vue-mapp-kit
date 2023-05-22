<template>
  <div
    :id="mapId"
    class="map"
    style="position: relative; width:100%; height: 100%;">
    <slot
      v-if="booted"
      :map="module"
    />
  </div>
</template>

<script>
import Leaflet from 'leaflet'
import constructorMixin from '../mixins/constructorMixin.js'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

// TODO: is there a better place for this?
delete Leaflet.Icon.Default.prototype._getIconUrl
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl
})

export default {
  name: 'LMap',

  provide () {
    return {
      // this will get injected into all children
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
    }
  }
}
</script>
