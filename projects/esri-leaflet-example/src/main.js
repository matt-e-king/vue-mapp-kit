import Vue from 'vue';
import App from './App.vue';
import MappKitLeaflet from '@vue-mapp-kit/leaflet'
import MappKitEsriLeaflet from '@vue-mapp-kit/esri-leaflet'

Vue.use(MappKitLeaflet)
Vue.use(MappKitEsriLeaflet)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
