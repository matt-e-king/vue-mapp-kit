import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import MappKitEsri from '@vue-mapp-kit/esri'

// Vue.use(MappKitEsri);
Vue.config.productionTip = false

import esriConfig from "@arcgis/core/config.js";
console.log(esriConfig)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
