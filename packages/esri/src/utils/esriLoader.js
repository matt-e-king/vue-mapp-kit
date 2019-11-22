import { loadModules } from 'esri-loader'

export const MODULE_LOOKUP = {
  'GeoJSONLayer': 'esri/layers/GeoJSONLayer',
  'FeatureLayer': 'esri/layers/FeatureLayer',
  'GroupLayer': 'esri/layers/GroupLayer',
  'Graphic': 'esri/Graphic',
  'GraphicsLayer': 'esri/layers/GraphicsLayer',
  'Layer': 'esri/layers/Layer',
  'LayerList': 'esri/widgets/LayerList',
  'Map': 'esri/Map',
  'MapView': 'esri/views/MapView',
  'SceneView': 'esri/views/SceneView',
  'BasemapToggle': 'esri/widgets/BasemapToggle'
}

/**
 * 
 * @param {Array || string} m 
 */
export const getModules = async (m) => {
  const modules = Array.isArray(modules) ? m : [m]
  const requiresArray = modules.map(module => MODULE_LOOKUP[module])

  try {
    const response = await loadModules(requiresArray)

    return response
  } catch(error) {
    console.error(error)
  }
}