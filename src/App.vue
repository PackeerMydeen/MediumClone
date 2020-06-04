<template>
  <div class="app-wrapper">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view class="App-view"></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
:root,
html,
body {
  height: 100%;
}
.app-wrapper {
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
}
.ProseMirror-focused {
  outline: none;
}
code {
  background: olivedrab;
}
</style>
