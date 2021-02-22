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
  'BasemapToggle': 'esri/widgets/BasemapToggle',
  'Sketch': 'esri/widgets/Sketch',
  'SketchViewModel': 'esri/widgets/Sketch/SketchViewModel',
  'Draw': 'esri/views/draw/Draw'
}

/**
 * 
 * @param {Array || string} m 
 */
export const getModules = async (m) => {
  const modules = Array.isArray(m) ? m : [m]
  const requiresArray = modules.map(module => MODULE_LOOKUP[module] || module)

  try {
    const response = await loadModules(requiresArray, { css: true })

    return response
  } catch(error) {
    console.error(error)
  }
}