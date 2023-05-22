import MappKitBus from './bus'
import EMap from './EMap/EMap.vue'
import EWebMap from './EWebMap/EWebMap.vue'
import EFeatureLayer from './layers/EFeatureLayer/EFeatureLayer.vue'
import EGeoJsonLayer from './layers/EGeoJsonLayer/EGeoJsonLayer.vue'
import EGraphicsLayer from './layers/EGraphicsLayer/EGraphicsLayer.vue'
import EGroupLayer from './layers/EGroupLayer/EGroupLayer.vue'
import EImageryLayer from './layers/EImageryLayer/EImageryLayer.vue'
import EImageryTileLayer from './layers/EImageryTileLayer/EImageryTileLayer.vue'
import EMapImageLayer from './layers/EMapImageLayer/EMapImageLayer.vue'
import ETileLayer from './layers/ETileLayer/ETileLayer.vue'
import EWfsLayer from './layers/EWfsLayer/EWfsLayer.vue'
import EWmsLayer from './layers/EWmsLayer/EWmsLayer.vue'
import EMapView from './views/EMapView/EMapView.vue'
import ESceneView from './views/ESceneView/ESceneView.vue'
import EBasemapToggle from './widgets/EBasemapToggle/EBasemapToggle.vue'
import ELayerList from './widgets/ELayerList/ELayerList.vue'
import ELegend from './widgets/ELegend/ELegend.vue'
import EScaleBar from './widgets/EScaleBar/EScaleBar.vue'
import ESketch from './widgets/ESketch/ESketch.vue'
import ESketchViewModel from './widgets/ESketchViewModel/ESketchViewModel.vue'
import EGraphic from './EGraphic/EGraphic.vue'

export {
  EMap,
  EWebMap,
  EFeatureLayer,
  EGeoJsonLayer,
  EGraphicsLayer,
  EGroupLayer,
  EImageryLayer,
  EImageryTileLayer,
  EMapImageLayer,
  ETileLayer,
  EWfsLayer,
  EWmsLayer,
  EMapView,
  ESceneView,
  ELayerList,
  ELegend,
  EScaleBar,
  ESketch,
  ESketchViewModel,
  EBasemapToggle,
  EGraphic
}

export default {
  install (app, options) {
    app.config.globalProperties.$mappKitBus = MappKitBus
  }
}