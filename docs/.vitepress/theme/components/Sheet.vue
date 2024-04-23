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
    class="custom-sheet-container"
    :allowfullscreen="allowFullScreen"
    :mozallowfullscreen="allowFullScreen"
    :webkitallowfullscreen="allowFullScreen"
  ></iframe>
</template>

<style>
.custom-sheet-container {
  margin-top: 1rem;
  width: 100%;
  aspect-ratio: 3.74 / 3;
  border: none;
}
</style>
