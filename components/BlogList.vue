<template>
  <nav>
    <!-- SOURCE: https://content.nuxt.com/components/content-list -->
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <ULink
          :to="article._path"
          active-class="text-primary"
          inactive-class="text-red-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
          {{ article.title }}
        </ULink>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </nav>
</template>