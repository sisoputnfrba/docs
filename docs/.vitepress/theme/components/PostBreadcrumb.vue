<script setup>
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData();
const route = useRoute();

const category = route.path.startsWith('/blog/posts/') ?
    route.path.substring('/blog/posts/'.length, route.path.lastIndexOf('/'))
  : route.path.startsWith('/blog/categories/') ?
    route.path.substring('/blog/categories/'.length)
  : null;

</script>
<template>
  <div>
    <div class="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
        <a href="/" class="font-semibold text-[--vp-code-link-color] !no-underline transition-colors duration-300 transform hover:text-[--vp-code-link-hover-color]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </a>

        <span class="mx-5 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span>

        <a href="/blog" class="font-semibold text-[--vp-code-link-color] !no-underline transition-colors duration-300 transform hover:text-[--vp-code-link-hover-color]">
            Blog
        </a>

        <template v-if="Boolean(category)">
        <span class="mx-5 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span>

        <a :href="`/blog/categories/${category}`" class="font-semibold text-[--vp-code-link-color] !no-underline transition-colors duration-300 transform hover:text-[--vp-code-link-hover-color]">
            {{ category }}
        </a>
        </template>

        <template v-if="Boolean(frontmatter.title)">
        <span class="mx-5 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span>

        <a :href="route.path" class="font-semibold text-[--vp-code-link-color] !no-underline transition-colors duration-300 transform hover:text-[--vp-code-link-hover-color]">
            {{ frontmatter.title }}
        </a>
        </template>
    </div>
</div>
</template>
