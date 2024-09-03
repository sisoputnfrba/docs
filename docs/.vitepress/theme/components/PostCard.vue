<template>
  <div class="max-w-2xl px-8 py-4 bg-[--vp-c-gray-soft] rounded-lg shadow-md">
      <div class="flex items-center justify-between">
          <span class="text-sm font-light !no-underline text-[--vp-v-text-1]">{{ date }}</span>
          <a :href="`/blog/categories/${category}`" class="px-3 py-1 text-sm font-semibold !no-underline !text-slate-100 !transition-colors !duration-300 transform bg-[--vp-button-brand-bg] rounded cursor-pointer hover:bg-[--vp-button-brand-hover-bg]" tabindex="0" role="button">{{ category }}</a>
      </div>

      <div class="mt-2">
          <a :href="href" class="text-xl font-semibold text-[--vp-c-indigo-1] !no-underline transition-colors duration-200 hover:text-[--vp-c-indigo-2]" tabindex="0" role="link">{{ title }}</a>
          <p class="mt-2 text-[--vp-c-text-1]">{{ excerpt }}</p>
      </div>

      <div class="flex items-center justify-between mt-4">
          <a :href="href" class="text-blue-600 dark:text-blue-400 !no-underline hover:underline" tabindex="0" role="link">Leer más</a>

          <div class="flex items-center">
              <img class="object-cover w-10 h-10 mx-4 rounded-full sm:block" :src="`https://www.github.com/${author.github}.png`" alt="avatar">
              <p class="font-semibold !text-[--vp-c-text-1]" tabindex="0" role="link">{{ author.name }}</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>
