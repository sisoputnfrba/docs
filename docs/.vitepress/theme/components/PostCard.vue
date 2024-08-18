<template>
  <div
    class="max-w-2xl px-8 py-4 bg-[--vp-c-gray-soft] rounded-lg shadow-md"
  >
    <div class="flex items-center justify-between">
      <span class="text-sm font-light">
        {{ date }}
      </span>
      <a
        :href="`/blog/categories/${category}`"
        class="px-3 py-1 text-sm font-bold !no-underline transition-colors duration-300 transform !text-[--vp-c-white] bg-[--vp-c-brand-2] rounded cursor-pointer hover:bg-[--vp-c-brand-3]"
        tabindex="0"
        role="button"
      >
        {{ category }}
      </a>
    </div>

    <div class="mt-2">
      <a
        :href="href"
        class="text-xl font-bold !no-underline"
        tabindex="0"
        role="link"
      >
        {{ title }}
      </a>
      <p class="mt-2">
        {{ excerpt }}
      </p>
    </div>

    <div class="flex items-center justify-between mt-4">
      <a
        :href="href"
        class="!no-underline"
        tabindex="0"
        role="link"
      >Leer más</a>

      <div class="flex items-center">
        <img
          class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
          :src="`https://www.github.com/${author.github}.png`"
          alt="avatar"
        />
        <div
          class="font-bold"
          tabindex="0"
          role="link"
        >{{ author.name }}</div>
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
