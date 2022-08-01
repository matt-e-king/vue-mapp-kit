import Vue from 'vue'
import VueRouter from 'vue-router'

const EsriHome = { template: '<div>test</div>' }
import BasicMap from '@/pages/esri/BasicMap'
import WebMapWithLegend from '@/pages/esri/WebMapWithLegend'
import GeoJsonLayer from '@/pages/esri/GeoJsonLayer'
import Graphics from '@/pages/esri/Graphics'
import Groupings from '@/pages/esri/Groupings'
import TileLayer from '@/pages/esri/TileLayer'
import ImageryLayer from '@/pages/esri/ImageryLayer'
import MapImageLayer from '@/pages/esri/MapImageLayer'
import MapImageLayerPortalItem from '@/pages/esri/MapImageLayerPortalItem'
import SceneView from '@/pages/esri/SceneView'
import SketchWidget from '@/pages/esri/SketchWidget'
import SketchViewModel from '@/pages/esri/SketchViewModel'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/esri/webmap-with-legend',
      name: 'esri-webmap-with-legend',
      component: WebMapWithLegend
    },
    { 
      path: '/esri/basic-map',
      name: 'esri-basic-map',
      component: BasicMap
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