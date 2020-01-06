import Vue from 'vue';
import App from './App.vue';
import store from './store';
import MappKitLeaflet from '@vue-mapp-kit/leaflet'
import MappKitEsriLeaflet from '@vue-mapp-kit/esri-leaflet'

Vue.use(MappKitLeaflet, { store })
Vue.use(MappKitEsriLeaflet)
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
