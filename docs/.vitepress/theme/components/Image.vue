<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    containerColor: {
      type: String,
      required: false,
    },
    containerPadding: {
      type: String,
      required: false,
    },
    imageColor: {
      type: String,
      required: false,
    },
    imageWidth: {
      type: String,
      required: false,
    },
    zoomable: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
  computed: {
    containerStyle() {
      return `
        ${this.containerColor ? `background-color: ${this.containerColor};` : ''}
        ${this.containerPadding ? `padding: ${this.containerPadding};` : ''}
      `;
    },
    imageStyle() {
      return `
        ${this.imageColor ? `background-color: ${this.imageColor};` : ''}
        ${this.imageWidth ? `width: ${this.imageWidth};` : ''}
      `;
    },
  },
};
</script>

<template>
  <div class="custom-image-container" :style="containerStyle">
    <img :src="src" :style="imageStyle" :data-zoomable="zoomable"/>
  </div>
</template>

<style>
.custom-image-container {
  display: flex;
  justify-content: center;
}
</style>
