import path from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // exclude: ['leaflet.gridlayer.googlemutant'],
  },
  resolve: {
    alias: {
      'enketo/file-manager': path.resolve(__dirname, 'src/enketo-overridden-file-manager.ts'),
      'enketo/config': path.resolve(__dirname, 'src/enketo-overridden-config.ts'),
      'leaflet.gridlayer.googlemutant': path.resolve(
        __dirname,
        'node_modules/leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant.js'
      ),
      // 'leaflet.gridlayer.googlemutant': '/@empty-module',
    },
  },
  define: {
    'process.env': {}, // for some older packages that expect it
  }
})