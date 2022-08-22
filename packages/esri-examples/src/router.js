import Vue from 'vue'
import VueRouter from 'vue-router'

const BasicMap = () => import('@/pages/esri/BasicMap')
const WebMapWithLegend = () => import('@/pages/esri/WebMapWithLegend')
const GeoJsonLayer = () => import('@/pages/esri/GeoJsonLayer')
const Graphics = () => import('@/pages/esri/Graphics')
const Groupings = () => import('@/pages/esri/Groupings')
const TileLayer = () => import('@/pages/esri/TileLayer')
const ImageryLayer = () => import('@/pages/esri/ImageryLayer')
const MapImageLayer = () => import('@/pages/esri/MapImageLayer')
const MapImageLayerPortalItem = () => import('@/pages/esri/MapImageLayerPortalItem')
const SceneView = () => import('@/pages/esri/SceneView')
const SketchWidget = () => import('@/pages/esri/SketchWidget')
const SketchViewModel = () => import('@/pages/esri/SketchViewModel')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
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
    }
  ]
})

export default router