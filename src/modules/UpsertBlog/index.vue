<template>
  <div class="Post-body">
    <div class="first-row">
      <user v-if="isEdit" :user="user" :post-date="created_date"></user>
      <div class="publish-button">
        <Button
          class="normal"
          @click="createPost"
          :disabled="isDisableButton"
        >{{isEdit?'Update':'Publish'}}</Button>
        <div class="del-btn" v-if="isEdit">
          <Button class="danger" @click="deletePost" :disabled="!isEdit">Delete</Button>
        </div>
      </div>
    </div>
    <div class="Post-edit">
      <input
        type="text"
        class="Input Input--title"
        placeholder="Title"
        v-model="title"
        autofocus="true"
      />
      <medium-editor
        :text="content"
        custom-tag="h2"
        :content="content"
        :options="options"
        v-on:edit="applyTextEdit"
      />
    </div>
  </div>
</template>

<script>
import editor from "vue2-medium-editor";

import { mapState } from "vuex";
import Button from "../../components/Button";
import User from "../../components/User";
import Tooltip from "../../components/Tooltip";

export default {
  name: "UpsertBlog",
  components: {
    User,
    Button,
    Tooltip,
    "medium-editor": editor
  },
  computed: {
    ...mapState({ posts: "posts" }),
    isDisableButton() {
      if (
        this.title &&
        this.title.length > 2 &&
        this.content !== null &&
        this.content.length > 10
      ) {
        return false;
      }
      return true;
    }
  },
  data() {
    return {
      options: {
        placeholder: {
          text: "Type your story",
          hideOnClick: true
        },
        toolbar: {
          buttons: [
            "bold",
            "italic",
            "quote",
            {
              name: "h2",
              action: "append-h3",
              aria: "header type 2",
              tagNames: ["h3"],
              contentDefault: "<b>H2</b>",
              classList: ["custom-class-h2"]
            }
          ]
        }
      },
      content: "",
      title: "",
      isEdit: false,
      id: null,
      user: {
        first_name: "Packeer",
        last_name: "Mydeen"
      },
      created_date: new Date()
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.isEdit = true;
      this.setInitialValues(this.$route.params.id);
    } else {
      this.setContent();
      this.clearValues();
    }
  },

  methods: {
    applyTextEdit(e) {
      this.content = e.event.target.innerHTML;
    },
    createPost() {
      let newObj = {
        user: this.user,
        created_date: this.created_date,
        title: this.title,
        description: this.content,
        id: this.id
      };
      this.$store.commit(!this.isEdit ? "createBlog" : "updateBlog", newObj);
      this.$router.push("/");
    },
    setInitialValues(id) {
      let post = this.posts.filter(el => el.id === Number(id))[0];
      this.title = post.title;
      this.setContent(post.description);
      this.user = post.user;
      this.created_date = post.created_date;
      this.id = post.id;
    },
    setContent(desc = null) {
      this.content = desc;
    },
    deletePost() {
      if (window.confirm("Are you sure want to delete?")) {
        this.$store.commit("deletePost", this.id);
        this.$router.push("/");
      }
    },
    clearValues() {
      this.title = "";
      this.setContent();
    }
  }
};
</script>

<style scoped lang='scss'>
.Post-body {
  max-width: 700px;
  margin: 0 auto;
  .publish-button {
    display: flex;
    margin-left: auto;
  }
  .del-btn {
    margin-left: 0.5rem;
  }
}

.Input {
  border: 0;
  padding: 0;
  width: 100%;
  outline: 0;
}

.Input--title {
  font-size: 2.4rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: 600;
  margin-top: 20px;
}

.Input--content {
  font-family: serif;
  font-size: 1.4rem;
  line-height: 1.5;
  height: 70vh;
  margin-top: 20px;
  resize: none;
}
.first-row {
  display: flex;
  align-items: center;
}
</style>
