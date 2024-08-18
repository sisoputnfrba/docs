<script setup>
import PostCard from "./PostCard.vue";
import { data as posts } from '../loaders/posts.data.js'
import { data as members } from '../loaders/members.data.js'
</script>
<template>
  <div class="container mx-auto flex flex-wrap justify-center gap-x-4 gap-y-4">
    <template v-for="article in filteredPosts">
      <PostCard
        :title="article.title"
        :excerpt="article.excerpt"
        :date="article.date.text"
        :href="article.url"
        :category="article.category"
        :author="members.find((member) => member.github === article.author)"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Function,
      default: () => true
    }
  },
  computed: {
    filteredPosts() {
      return posts.filter(this.filter);
    }
  }
};
</script>
