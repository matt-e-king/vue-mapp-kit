import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MappKitLeafet from '@vue-mapp-kit/leaflet'

Vue.use(MappKitLeafet)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
