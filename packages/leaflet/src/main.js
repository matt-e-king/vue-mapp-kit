import MappKitBus from './buses'

const createInstaller = () => (Vue) => {
  var bus = MappKitBus

  Object.defineProperty(Vue.prototype, '$mappKitBus', { //for "this.$bus"
    get() { return bus },
    set(evt) { //alt way to send an event (this.$bus=['event_name',arg1,arg2])
      if (typeof evt === 'string') evt = [evt]
      bus.$emit.apply(bus, evt)
    }
  })
}

const MappKitLeaflet = { install: createInstaller() }

export const Bus = MappKitBus
export { default as LCircle } from './vector/LCircle/LCircle'
export { default as LLayerGroup } from './other/LLayerGroup/LLayerGroup'
export { default as LFeatureGroup } from './other/LFeatureGroup/LFeatureGroup'
export { default as LGeoJsonCollection } from './other/LGeoJsonCollection/LGeoJsonCollection'
export { default as LGeoJson } from './other/LGeoJson/LGeoJson'
export { default as LMap } from './LMap/LMap'
export { default as LMarker } from './ui/LMarker/LMarker'
export { default as LPolygon } from './vector/LPolygon/LPolygon'
export { default as LPolyline } from './vector/LPolyline/LPolyline'
export { default as LRectangle } from './vector/LRectangle/LRectangle'
export { default as LTileLayer } from './raster/LTileLayer/LTileLayer'
export { default as LImageOverlay } from './raster/LImageOverlay/LImageOverlay'
export { default as LVideoOverlay } from './raster/LVideoOverlay/LVideoOverlay'
export { default as LControlLayers } from './control/Layers'
export { default as LControlAttribution } from './control/Attribution'
export { default as LControlScale } from './control/Scale'
export { default as LControlZoom } from './control/Zoom'
export default MappKitLeaflet
