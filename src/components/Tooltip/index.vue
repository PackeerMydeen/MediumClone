<template>
  <div v-if="show" class="tooltip" :style="{ top:`${getTop}px`, left:`${getLeft}px` }">
    <slot>Tooltip title</slot>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: ["show", "tooltipPosition"],
  data() {
    return {};
  },
  computed: {
    getTop() {
      return this.tooltipPosition.top + 33 || 0;
    },
    getLeft() {
      return this.tooltipPosition.left - 30 || 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.tooltip {
  position: absolute;
  top: 256px;
  left: 414px;
  width: 6rem;
  padding: 0.2rem;
  background: black;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    display: block;
    position: absolute;
    border: solid 5px transparent;
    border-bottom-color: black;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, -10px, 0);
  }

  & * {
    overflow: auto;
  }
}
</style>