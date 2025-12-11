import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/partials/globals" as *;
        @use "@/assets/styles/partials/mixins" as *;
        @use "@/assets/styles/partials/typography" as *;
        @use "@/assets/styles/partials/variables" as *;`
      }
    }
  }
})
