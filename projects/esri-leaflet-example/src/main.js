import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vueaflet from '@vue-mapp-kit/leaflet'
import EsriVueaflet from '@vue-mapp-kit/esri-leaflet'

Vue.use(Vueaflet, { store })
Vue.use(EsriVueaflet)
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
