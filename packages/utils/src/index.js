/**
 * 
 * @param {object} Vue instance of Vue
 * @param {object} components 
 */
export const registerComponents = (Vue, components) => {
  if (!Vue || !components) throw new Error('[registerComponents] missing params')

  Object.keys(components).forEach((key) => {
    const c = components[key]
    Vue.component(c.name, c)
  })
}
