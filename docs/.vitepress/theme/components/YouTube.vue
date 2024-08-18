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
  <lite-youtube :videoid="v"></lite-youtube>
</template>
