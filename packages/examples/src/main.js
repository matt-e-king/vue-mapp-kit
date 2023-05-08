import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import VueMappKitEsri from '@vue-mapp-kit/esri'
import VueMappKitLeafet from '@vue-mapp-kit/leaflet'

const a = createApp(App)
a.use(VueMappKitEsri)
a.use(VueMappKitLeafet)
a.use(router)

a.mount('#app')
