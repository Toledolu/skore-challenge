<template>
  <label class="" :class="classes">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: {
    classes: {
      type: String,
      default: ''
    }
  }
};
</script>