<template>
  <button class="normal" :class="type" :disabled="disabled" @click="callback($event)">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["type", "disabled"],
  methods: {
    callback: function(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
  }
  &.danger {
    background-color: #ff4949;
    color: #fff;
  }
  &.success {
    background-color: #13ce66;
    color: #fff;
  }
  &.info {
    background-color: #50bfff;
    color: #fff;
  }
}
</style>