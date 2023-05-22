import Bus from './bus'

import LCircle from './vector/LCircle/LCircle.vue'
import LLayerGroup from './other/LLayerGroup/LLayerGroup.vue'
import LFeatureGroup from './other/LFeatureGroup/LFeatureGroup.vue'
import LGeoJsonCollection from './other/LGeoJsonCollection/LGeoJsonCollection.vue'
import LGeoJson from './other/LGeoJson/LGeoJson.vue'
import LMap from './LMap/LMap.vue'
import LMarker from './ui/LMarker/LMarker.vue'
import LPolygon from './vector/LPolygon/LPolygon.vue'
import LPolyline from './vector/LPolyline/LPolyline.vue'
import LRectangle from './vector/LRectangle/LRectangle.vue'
import LTileLayer from './raster/LTileLayer/LTileLayer.vue'
import LImageOverlay from './raster/LImageOverlay/LImageOverlay.vue'
import LVideoOverlay from './raster/LVideoOverlay/LVideoOverlay.vue'
import LControlLayers from './control/Layers.vue'
import LControlAttribution from './control/Attribution.vue'
import LControlScale from './control/Scale.vue'
import LControlZoom from './control/Zoom.vue'

export {
  LCircle,
  LLayerGroup,
  LFeatureGroup,
  LGeoJsonCollection,
  LGeoJson,
  LMap,
  LMarker,
  LPolygon,
  LPolyline,
  LRectangle,
  LTileLayer,
  LImageOverlay,
  LVideoOverlay,
  LControlLayers,
  LControlAttribution,
  LControlScale,
  LControlZoom,
  Bus
}

export default {
  install (app, options) {
    app.config.globalProperties.$mappKitBus = Bus
  }
}