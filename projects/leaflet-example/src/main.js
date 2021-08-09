import Vue from 'vue';
import App from './App.vue';
import MappKitLeaflet from '@vue-mapp-kit/leaflet';

Vue.use(MappKitLeaflet);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
