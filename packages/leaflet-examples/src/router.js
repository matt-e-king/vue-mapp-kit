import Vue from 'vue'
import VueRouter from 'vue-router'

const QuickStart = () => import('@/pages/QuickStart')
const CustomIcon = () => import('@/pages/CustomIcon')
const UsingGeoJson = () => import('@/pages/UsingGeoJson')
const CustomGeoJsonCollection = () => import('@/pages/CustomGeoJsonCollection')
const GroupsAndControls = () => import('@/pages/GroupsAndControls')
const WorkingWithEvents = () => import('@/pages/WorkingWithEvents')
const OtherVectorLayers = () => import('@/pages/OtherVectorLayers')
const WorkingWithPopups = () => import('@/pages/WorkingWithPopups')
const OtherControls = () => import('@/pages/OtherControls')

const ClusteringPoints = () => import('@/pages/esri-leaflet/ClusteringPoints')
const DynamicMapLayer = () => import('@/pages/esri-leaflet/DynamicMapLayer')
const FeatureLayer = () => import('@/pages/esri-leaflet/FeatureLayer')
const ImageMapLayer = () => import('@/pages/esri-leaflet/ImageMapLayer')
const TiledMapLayer = () => import('@/pages/esri-leaflet/TiledMapLayer')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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