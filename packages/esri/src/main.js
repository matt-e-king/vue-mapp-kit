import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { registerComponents } from '@vue-mapp-kit/utils'
import * as components from './components'

// load esri styles for version 4.x using loadCss
import { loadCss } from 'esri-loader'
loadCss('https://js.arcgis.com/4.10/esri/css/main.css')

Vue.config.productionTip = false

registerComponents(Vue, components)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
