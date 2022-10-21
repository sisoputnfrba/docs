<template>
  <div
    class="code-block"
    :class="{ 'active': active }"
    :aria-selected="active"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CodeGroupItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>
