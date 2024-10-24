import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    autoImport: false,
    options: {
      ripple: true,
      theme: {
        preset: Aura
      }
    }
  },
  css: [
    'primeicons/primeicons.css'
  ]
})
