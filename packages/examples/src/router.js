import { createRouter, createWebHistory } from 'vue-router'

// Esri
const BasicMap = () => import('@/pages/esri/BasicMap.vue')
const WebMapWithLegend = () => import('@/pages/esri/WebMapWithLegend.vue')
const GeoJsonLayer = () => import('@/pages/esri/GeoJsonLayer.vue')
const Graphics = () => import('@/pages/esri/Graphics.vue')
const Groupings = () => import('@/pages/esri/Groupings.vue')
const TileLayer = () => import('@/pages/esri/TileLayer.vue')
const ImageryLayer = () => import('@/pages/esri/ImageryLayer.vue')
const MapImageLayer = () => import('@/pages/esri/MapImageLayer.vue')
const MapImageLayerPortalItem = () => import('@/pages/esri/MapImageLayerPortalItem.vue')
const SceneView = () => import('@/pages/esri/SceneView.vue')
const SketchWidget = () => import('@/pages/esri/SketchWidget.vue')
const SketchViewModel = () => import('@/pages/esri/SketchViewModel.vue')

// Leaflet
const QuickStart = () => import('@/pages/leaflet/QuickStart.vue')
const CustomIcon = () => import('@/pages/leaflet/CustomIcon.vue')
const UsingGeoJson = () => import('@/pages/leaflet/UsingGeoJson.vue')
const CustomGeoJsonCollection = () => import('@/pages/leaflet/CustomGeoJsonCollection.vue')
const GroupsAndControls = () => import('@/pages/leaflet/GroupsAndControls.vue')
const WorkingWithEvents = () => import('@/pages/leaflet/WorkingWithEvents.vue')
const OtherVectorLayers = () => import('@/pages/leaflet/OtherVectorLayers.vue')
const WorkingWithPopups = () => import('@/pages/leaflet/WorkingWithPopups.vue')
const OtherControls = () => import('@/pages/leaflet/OtherControls.vue')

// Esri-Leaflet
const ClusteringPoints = () => import('@/pages/esri-leaflet/ClusteringPoints.vue')
const DynamicMapLayer = () => import('@/pages/esri-leaflet/DynamicMapLayer.vue')
const FeatureLayer = () => import('@/pages/esri-leaflet/FeatureLayer.vue')
const ImageMapLayer = () => import('@/pages/esri-leaflet/ImageMapLayer.vue')
const TiledMapLayer = () => import('@/pages/esri-leaflet/TiledMapLayer.vue')

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { 
      path: '/esri/basic-map',
      name: 'esri-basic-map',
      component: BasicMap
    },
    { 
      path: '/esri/webmap-with-legend',
      name: 'esri-webmap-with-legend',
      component: WebMapWithLegend
    },
    { 
      path: '/esri/geo-json-layer',
      name: 'esri-geo-json-layer',
      component: GeoJsonLayer
    },
    { 
      path: '/esri/graphics',
      name: 'esri-graphics',
      component: Graphics
    },
    { 
      path: '/esri/groupings',
      name: 'esri-groupings',
      component: Groupings
    },
    { 
      path: '/esri/tile-layer',
      name: 'esri-tile-layer',
      component: TileLayer
    },
    { 
      path: '/esri/imagery-layer',
      name: 'esri-imagery-layer',
      component: ImageryLayer
    },
    {
      path: '/esri/map-image-layer',
      name: 'esri-map-image-layer',
      component: MapImageLayer
    },
    {
      path: '/esri/map-image-layer-portal-item',
      name: 'esri-map-image-layer-portal-item',
      component: MapImageLayerPortalItem
    },
    {
      path: '/esri/scene-view',
      name: 'esri-scene-view',
      component: SceneView
    },
    { 
      path: '/esri/sketch-widget',
      name: 'esri-sketch-widget',
      component: SketchWidget
    },
    { 
      path: '/esri/sketch-view-model',
      name: 'esri-sketch-view-model',
      component: SketchViewModel
    },
    // LEAFLET
    { 
      path: '/quick-start',
      name: 'quick-start',
      component: QuickStart
    },
    { 
      path: '/custom-icon',
      name: 'custom-icon',
      component: CustomIcon
    },
    { 
      path: '/using-geo-json',
      name: 'using-geo-json',
      component: UsingGeoJson
    },
    { 
      path: '/custom-geo-json-collection',
      name: 'custom-geo-json-collection',
      component: CustomGeoJsonCollection
    },
    { 
      path: '/groups-and-controls',
      name: 'groups-and-controls',
      component: GroupsAndControls
    },
    { 
      path: '/working-with-events',
      name: 'working-with-events',
      component: WorkingWithEvents
    },
    { 
      path: '/other-vector-layers',
      name: 'other-vector-layers',
      component: OtherVectorLayers
    },
    { 
      path: '/working-with-popups',
      name: 'working-with-popups',
      component: WorkingWithPopups
    },
    { 
      path: '/other-controls',
      name: 'other-controls',
      component: OtherControls
    },
    // ESRI-LEAFLET
    { 
      path: '/esri-leaflet/clustering-points',
      name: 'esri-leaflet-clustering-points',
      component: ClusteringPoints
    },
    { 
      path: '/esri-leaflet/dynamic-map-layer',
      name: 'esri-leaflet-dynamic-map-layer',
      component: DynamicMapLayer
    },
    { 
      path: '/esri-leaflet/feature-layer',
      name: 'esri-leaflet-feature-layer',
      component: FeatureLayer
    },
    { 
      path: '/esri-leaflet/image-map-layer',
      name: 'esri-leaflet-image-map-layer',
      component: ImageMapLayer
    },
    { 
      path: '/esri-leaflet/tiled-map-layer',
      name: 'esri-leaflet-tiled-map-layer',
      component: TiledMapLayer
    }
  ]
})

export default router

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// const BasicMap = () => import('@/pages/esri/BasicMap')
// const WebMapWithLegend = () => import('@/pages/esri/WebMapWithLegend')
// const GeoJsonLayer = () => import('@/pages/esri/GeoJsonLayer')
// const Graphics = () => import('@/pages/esri/Graphics')
// const Groupings = () => import('@/pages/esri/Groupings')
// const TileLayer = () => import('@/pages/esri/TileLayer')
// const ImageryLayer = () => import('@/pages/esri/ImageryLayer')
// const MapImageLayer = () => import('@/pages/esri/MapImageLayer')
// const MapImageLayerPortalItem = () => import('@/pages/esri/MapImageLayerPortalItem')
// const SceneView = () => import('@/pages/esri/SceneView')
// const SketchWidget = () => import('@/pages/esri/SketchWidget')
// const SketchViewModel = () => import('@/pages/esri/SketchViewModel')

// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     { 
//       path: '/esri/basic-map',
//       name: 'esri-basic-map',
//       component: BasicMap
//     },
//     { 
//       path: '/esri/webmap-with-legend',
//       name: 'esri-webmap-with-legend',
//       component: WebMapWithLegend
//     },
//     { 
//       path: '/esri/geo-json-layer',
//       name: 'esri-geo-json-layer',
//       component: GeoJsonLayer
//     },
//     { 
//       path: '/esri/graphics',
//       name: 'esri-graphics',
//       component: Graphics
//     },
//     { 
//       path: '/esri/groupings',
//       name: 'esri-groupings',
//       component: Groupings
//     },
//     { 
//       path: '/esri/tile-layer',
//       name: 'esri-tile-layer',
//       component: TileLayer
//     },
//     { 
//       path: '/esri/imagery-layer',
//       name: 'esri-imagery-layer',
//       component: ImageryLayer
//     },
//     {
//       path: '/esri/map-image-layer',
//       name: 'esri-map-image-layer',
//       component: MapImageLayer
//     },
//     {
//       path: '/esri/map-image-layer-portal-item',
//       name: 'esri-map-image-layer-portal-item',
//       component: MapImageLayerPortalItem
//     },
//     {
//       path: '/esri/scene-view',
//       name: 'esri-scene-view',
//       component: SceneView
//     },
//     { 
//       path: '/esri/sketch-widget',
//       name: 'esri-sketch-widget',
//       component: SketchWidget
//     },
//     { 
//       path: '/esri/sketch-view-model',
//       name: 'esri-sketch-view-model',
//       component: SketchViewModel
//     }
//   ]
// })

// export default router
