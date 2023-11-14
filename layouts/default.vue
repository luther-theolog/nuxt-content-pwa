<script setup lang="ts">
// import VitePwaManifest from 'vite-plugin-pwa'

useHead({
  link: [
    { rel: 'icon', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: 'img/svg/apple-icon.svg' },
    { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' }
  ],
  noscript: [{ children: 'JavaScript is required in this app.' }],
  meta: [ { name: 'theme-color', content: '#f9fafb' } ]
})
</script>

<template>
  <div id="default_layout">
    <!-- <VitePwaManifest /> -->
    <!-- https://nuxt.com/docs/api/components/nuxt-loading-indicator -->
    <NuxtLoadingIndicator />
    <header class="flex justify-center">
      <NavHeader />
    </header>
    <main class="relative mt-10 mx-20">
      <slot />
    </main>
    <footer class="flex justify-center mt-10">
      <BottomLine />
    </footer>
  </div>
</template>

<style lang="css">
</style>
