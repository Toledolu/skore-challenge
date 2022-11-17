<template>
  <input class="" v-on="inputListeners"
    :class="classes"
    :type="type"
    :placeholder="placeholder"
    :value="value"
  >
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    classes: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    value(value) {
      this.localValue = value;
    },
  },
  computed: {
    inputListeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value);
        },
      };
    },
  },
};
</script>