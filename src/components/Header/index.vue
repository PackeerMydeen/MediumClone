<template>
  <div class="header-bar">
    <div class="headerbar-logo HeaderBar-logo--sm">M</div>
    <div class="header-blog-text">Medium</div>
    <Button class="normal" @click="createPost">Create</Button>
    <div class="HeaderBar-post"></div>
  </div>
</template>

<script>
import Button from "../Button";
export default {
  name: "Header",
  methods: {
    createPost() {
      this.$router.push("/upsert");
    }
  }
};
</script>

<style scoped lang='scss'>
.header-bar {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  .headerbar-logo {
    margin: 0;
    font-family: serif;
    font-size: 2.3rem;
    font-weight: bold;
  }
  .header-blog-text {
    font-family: serif;
    font-size: 2.3rem;
    font-weight: bold;
    width: 100%;
    justify-content: center;
  }
  .HeaderBar-logo--sm {
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    font-size: 2rem;
    padding: 0.3rem;
  }
}
</style>
