<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    start: {
      type: Boolean,
      required: false,
      default: false,
    },
    loop: {
      type: Boolean,
      required: false,
      default: false,
    },
    delayms: {
      type: Number,
      required: false,
      default: 1000,
    },
    allowFullScreen: {
      type: Boolean,
      required: false,
      default: true,
    },
  }
}
</script>

<template>
  <iframe
    :src="`https://docs.google.com/presentation/d/e/${id}/embed?start=${start}&loop=${loop}&delayms=${delayms}`"
    class="mt-4 w-full border-none"
    style="aspect-ratio: 3.74 / 3;"
    :allowfullscreen="allowFullScreen"
    :mozallowfullscreen="allowFullScreen"
    :webkitallowfullscreen="allowFullScreen"
  ></iframe>
</template>
