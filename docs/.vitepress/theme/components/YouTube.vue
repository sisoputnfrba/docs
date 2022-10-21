<script lang="ts">
const props = {
  v: {
    type: String,
    required: true,
  },
};

export default { props };
</script>

<template>
  <div class="youtube-container">
    <iframe
      :src="`https://www.youtube.com/embed/${v}`"
      title="YouTube video player"
      class="youtube"
      frameborder="0"
      allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture
        "
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<style>
.youtube-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}

.youtube {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
