<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="blog-list">
      <ListCard :post="post" @goToEdit="goToEdit" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ListCard from "../../components/ListCard";
export default {
  name: "BlogList",
  components: {
    ListCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      posts: "posts"
    })
  },
  methods: {
    goToEdit(id) {
      this.$router.push(`/upsert/${id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-list {
  margin-bottom: 1rem;
}
</style>