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
      <div @mouseup="highlight">
        <editor-content :editor="editor" class="Input Input--content" />
      </div>
      <Tooltip :show="isShowToolTip" :tooltipPosition="tooltipPosition">
        <span @click="getOffset">Highlight</span>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "tiptap";
import { CodeBlock, Heading, Code, Bold, Blockquote } from "tiptap-extensions";

import { mapState } from "vuex";
import Button from "../../components/Button";
import User from "../../components/User";
import Tooltip from "../../components/Tooltip";
export default {
  name: "UpsertBlog",
  components: {
    User,
    EditorContent,
    Button,
    Tooltip
  },
  computed: {
    ...mapState({ posts: "posts" }),
    isDisableButton() {
      if (
        this.title &&
        this.title.length > 2 &&
        this.html !== null &&
        this.html.length > 10
      ) {
        return false;
      }
      return true;
    }
  },
  data() {
    return {
      title: "",
      editor: new Editor({
        extensions: [
          new CodeBlock(),
          new Heading({ levels: [1, 2, 3] }),
          new Bold(),
          new Code(),
          new Blockquote()
        ],
        content: null,
        onUpdate: ({ getJSON, getHTML }) => {
          this.html = getHTML();
        }
      }),
      html: null,
      json: null,
      isEdit: false,
      id: null,
      user: {
        first_name: "Packeer",
        last_name: "Mydeen"
      },
      created_date: new Date(),
      isShowToolTip: false,
      tooltipPosition: {},
      range: {}
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.isEdit = true;
      this.setInitialValues(this.$route.params.id);
    } else {
      this.setContent();
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    createPost() {
      let newObj = {
        user: this.user,
        created_date: this.created_date,
        title: this.title,
        description: this.html,
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
      this.html = post.description;
    },
    setContent(desc = null) {
      this.editor.setContent(desc);
      this.html = desc;
    },
    deletePost() {
      if (window.confirm("Are you sure want to delete?")) {
        this.$store.commit("deletePost", this.id);
        this.$router.push("/");
      }
    },
    replaceText(start, end, text) {
      this.html =
        this.html.substring(0, start + 3) +
        `<code>${text}</code>` +
        this.html.substring(end + 3);
      this.setContent(this.html);
    },
    getOffset() {
      let start = this.range.startOffset;
      let end = this.range.endOffset;
      this.replaceText(start, end, this.range.text);
    },

    highlight(e) {
      let selection = window.getSelection();
      if (selection) {
        let text = selection.toString();
        if (text.length > 0) {
          this.isShowToolTip = true;
        }
        let range = selection.getRangeAt(0);
        range = range.cloneRange();
        this.range = range;
        this.range["text"] = text;
        let start = range.startOffset;
        let end = range.endOffset;
        const rangeBounds = range.getBoundingClientRect();
        this.tooltipPosition = rangeBounds;
        if (rangeBounds.width === 0) {
          this.isShowToolTip = false;
          this.range = {};
        }
      }
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
