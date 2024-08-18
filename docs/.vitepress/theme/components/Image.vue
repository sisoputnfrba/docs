<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    containerClass: {
      type: String,
      required: false,
    },
    imageClass: {
      type: String,
      required: false,
    },
    zoomable: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
};
</script>

<template>
  <div :class="`flex justify-center ${containerClass ?? ''}`">
    <img :src="src" :class="`${imageClass ?? ''}`" :data-zoomable="zoomable"/>
  </div>
</template>
