<template>
  <div class="post" @click="editPost(post.id)">
    <div class="Post-body">
      <i v-if="!post">No Posts</i>
      <template v-if="post">
        <user :user="post.user" :post-date="post.created_date" type="lg"></user>
        <h1 class="Post-title">{{post.title}}</h1>
        <div class="Post-content" v-html="post.description"></div>
      </template>
    </div>
  </div>
</template>

<script>
import User from "../User";

export default {
  name: "Post",
  props: ["post"],
  components: {
    User
  },
  mounted() {
    console.log(this.post);
  },
  methods: {
    editPost(id) {
      this.$emit("goToEdit", id);
    }
  }
};
</script>

<style lang='scss'>
.post {
  border: 1px solid #e4e4e4;
  padding: 1rem;
  cursor: pointer;
  .Post-body {
    max-width: 700px;
    margin: 0 auto;
  }
  .Post-title {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  .Post-content {
    font-family: serif;
    font-size: 1.4rem;
    line-height: 1.5;
  }
}
</style>
