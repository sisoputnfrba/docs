<script setup>
import Posts from './Posts.vue';
import { data as posts } from '../loaders/posts.data.js'
</script>
<template>
<Posts :start="start" :count="count" :filter="filter" />
<div class="w-full pt-4">
  <div class="container flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
      <div class="-mx-2">
          <a v-for="i in pages"
            :href="`/blog/pages/${i}`"
            :class="`inline-flex items-center justify-center px-4 py-1 mx-2 !no-underline rounded-lg ${page === i ? 'bg-[--vp-c-gray-soft]' : ''}`"
          >
              {{ i }}
          </a>
      </div>
      <div class="text-gray-500 dark:text-gray-400">
          <span class="font-medium text-gray-700 dark:text-gray-100">{{ start + 1 }} - {{ end }}</span> de {{ totalCount }} posts
      </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1,
    },
    filter: {
      type: Function,
      default: () => true
    },
  },
  computed: {
    totalCount() {
      return posts.filter(this.filter).length
    },
    count() {
      return 5
    },
    totalPages() {
      return Math.ceil(this.totalCount / this.count)
    },
    pagesStart() {
      return Math.max(1, this.page - 2)
    },
    pages() {
      return Array.from({ length: Math.min(this.totalPages, 5) }, (_, index) => index + this.pagesStart)
    },
    start() {
      return (this.page - 1) * this.count
    },
    end() {
      return Math.min(this.totalCount, this.start + this.count)
    }
  }
};
</script>
