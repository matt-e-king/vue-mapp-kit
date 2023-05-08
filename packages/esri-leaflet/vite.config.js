// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // these are Vite scecific plugins, not Vue plugins
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'VueMappKitEsriLeaflet',
      // the proper extensions will be added
      fileName: 'vue-mapp-kit-esri-leaflet',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        'leaflet',
        'esri-leaflet',
        'esri-leaflet-cluster',
        'leaflet.markercluster',
        '@vue-mapp-kit/leaflet'
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
