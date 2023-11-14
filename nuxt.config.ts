import { VitePWA } from 'vite-plugin-pwa'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui-edge',
    '@vite-pwa/nuxt'
  ],
  content: {},
  typescript: {
    shim: false,
    strict: false
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  pwa: { 
    manifest: false, // public/manifest.webmanifest
    strategies: 'generateSW',
    injectRegister: 'script',
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,json,svg,webp,ico}'],
      globIgnores: ['google*.html'],
      navigateFallbackDenylist: [/^\/.*\\?giscus=.*/, /^\/.*\\?api.*/],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => { return url.pathname.startsWith('/api') },
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: ({ url }) => { return url.pathname.startsWith('/api') },
          handler: 'NetworkOnly',
          method: 'POST',
          options: {
            backgroundSync: {
              name: 'backgroundsync',
              options: {
                maxRetentionTime: 24 * 60
              }
            }
          }
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module',
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 300 // per 5 min for testing only
    }
  }
})
