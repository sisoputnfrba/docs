<script setup>
import PostCard from "./PostCard.vue";
import { data as articles } from '../loaders/posts.data.js'
import { data as members } from '../loaders/members.data.js'
</script>
<template>
  <div class="container mx-auto flex flex-wrap justify-center gap-x-4 gap-y-4">
    <PostCard v-for="article in articles"
      :title="article.title"
      :excerpt="article.excerpt"
      :date="article.date.text"
      :href="article.url"
      :category="article.category"
      :author="members.find((member) => member.github === article.author)"
    />
  </div>
</template>
