<template>
  <div class="iframe-container">
    <iframe
      :src="`https://www.youtube.com/embed/${v}`"
      title="YouTube video player"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture
      "
      allowfullscreen>
    </iframe>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    v: { type: String, required: true }
  }
}
</script>
