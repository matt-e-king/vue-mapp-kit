import Vue from 'vue';
import App from './App.vue';
import store from './store';
import MappKitEsri from '@vue-mapp-kit/esri';

Vue.use(MappKitEsri);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
