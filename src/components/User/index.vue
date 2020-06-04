<template>
  <div class="User">
    <div class="User-item">
      <div class="User-avatar" />
    </div>
    <div class="User-item">
      <div class="User-name" v-text="`${user.first_name} ${user.last_name}`"></div>
      <div class="User-date" v-text="formatDate(postDate)"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object,
      required: true
    },
    postDate: {
      type: String,
      required: true
    }
  },

  data: () => ({}),

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.User-avatar {
  background-image: url("../../assets/avatar.png");
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.User--lg .User-avatar {
  width: 60px;
  height: 60px;
}

.User-item {
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
  font-size: 0.9rem;
}

.User-name {
  margin-top: 2px;
}

.User--lg .User-name {
  margin-top: 6px;
}

.User-date {
  margin-top: 2px;
  color: #bbb;
  font-size: 0.8rem;
}
</style>
