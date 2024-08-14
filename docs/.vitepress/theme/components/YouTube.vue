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
    <lite-youtube :videoid="v"></lite-youtube>
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
