import Vue from 'vue'
import App from './App.vue'
// import MappKitEsri from '@vue-mapp-kit/esri'

// Vue.use(MappKitEsri);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
