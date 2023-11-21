<script setup lang="ts">
const items = [
  [{
    label: 'Nuxt Content',
    to: '/',
    icon: 'i-heroicons-book-open'
  }], [{
    label: 'About',
    to: '/about',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Privacy',
    to: '/privacy.txt',
    target: '_blank',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Blog',
    to: '/blog',
    icon: 'i-heroicons-signal'
  }], [{
    label: '',
    slot: 'blog',
    disabled: true
  }]
]
</script>

<template>
  <div class="flex justify-center">
    <NavContent />
    <UDropdown :items="items" mode="hover" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
      <UButton color="white" label="Menu" trailing-icon="i-heroicons-chevron-down-20-solid" />

      <template #blog="{ item }">
        <ULink
          to="/blog"
          active-class="text-primary"
          inactive-class="text-red-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ item.label }}
        </ULink>
      </template>

      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>

        <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
      </template>

    </UDropdown>
  </div>
</template>