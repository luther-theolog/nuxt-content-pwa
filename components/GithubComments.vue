<script setup lang="ts">
import Giscus from '@giscus/vue'

const appConfig = useAppConfig() as any

/*
sources:
https://giscus.app/
https://github.com/giscus/giscus-component/tree/main
https://www.freecodecamp.org/news/github-discussions-as-chat-system/
https://github.com/settings/installations/43603183
https://github.com/giscus/giscus-component/blob/main/vue/src/App.vue
input-position="bottom"
*/
</script>

<template>
  <Giscus
    :repo="appConfig.giscus.repo"
    :repo-id="appConfig.giscus.repoId"
    :category="appConfig.giscus.category"
    :category-id="appConfig.giscus.categoryId"
    :mapping="appConfig.giscus.mapping"
    strict="0"
    :reactions-enabled="appConfig.giscus.reactions"
    :emit-metadata="appConfig.giscus.emitMetadata"
    :inut-position="appConfig.giscus.inputPosition"
    :theme="appConfig.giscus.theme"
    :lang="appConfig.giscus.lang"
    crossorigin="anonymous"
    loading="lazy"
  />
</template>

<style scoped>
/* Inserted in MardownPost.vue - it was given the best style. */
</style>
