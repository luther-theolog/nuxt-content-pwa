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
      globPatterns: ['**/*.{js,css,html,json,svg,png,webmanifest}'],
      globIgnores: ['google*.html'],
      navigateFallbackDenylist: [/^\/.*\\?giscus=.*/, /^\/.*\\?api.*/],
      runtimeCaching: [
        {
          urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.match(/^\/.*(avatar|favicon).*/i),
          handler: 'NetworkFirst' as const,
          options: { cacheName: 'homepage' }
        }, // Every article have to be visited before it is cached
        {
          urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.match(/^\/(api|article)\/.*/i),
          handler: 'NetworkFirst' as const,
          options: { cacheName: 'articles' }
        } // when this is cached - the frontpage is working offline
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
