<template>
  <lite-youtube :videoid="v"></lite-youtube>
</template>

<script>
export default {
  props: {
    v: {
      type: String,
      required: true,
    },
  },
}
</script>
