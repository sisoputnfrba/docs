<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  }
}
</script>
<template>
  <a :href="href">{{ text }} <span v-if="href.startsWith('http')">↗️</span></a>
</template>
