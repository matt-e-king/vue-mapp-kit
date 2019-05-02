import { loadModules } from 'esri-loader'

const MODULE_LOOKUP = {
  'Graphic': 'esri/Graphic',
  'GraphicsLayer': 'esri/layers/GraphicsLayer',
  'Map': 'esri/Map',
  'MapView': 'esri/views/MapView',
  'SceneView': 'esri/views/SceneView',
  'BasemapToggle': 'esri/widgets/BasemapToggle'
}

export default {
  data() {
    return {

    }
  },

  methods: {
    loaderInit() {
      const modules = Object.keys(this.module)
      const requiresArray = modules.map(module => MODULE_LOOKUP[module])
      const options = {}

      return loadModules(requiresArray, options)
        .then((modules) => {
          return modules
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}