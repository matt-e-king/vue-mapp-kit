import Vue from 'vue';
import App from './App.vue';
import store from './store';
import MappKitLeaflet from '@vue-mapp-kit/leaflet';

Vue.use(MappKitLeaflet, { store });
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
