<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <textarea @mouseup="mouse" v-model="text_area" />
    <div v-html="highlight()"></div>
  </div>
</template>

<script>
export default {
  name: "s",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      text_area: "",
      el: []
    };
  },
  methods: {
    mouse(e) {
      console.log("s");
      let range = window.getSelection().getRangeAt(0);
      range = range.cloneRange();
      let start = document.activeElement.selectionStart;
      let end = document.activeElement.selectionEnd;
      if (start !== 0) {
        let obj = {
          word: window.getSelection().toString(),
          startIndex: start,
          endIndex: end
        };
        let elements = [...this.el];
        elements.push(obj);
        this.el = [...elements];
      }
      range.setStart(range.startContainer, 0); // hack for Safari
      const rangeBounds = range.getBoundingClientRect();
      console.log(window.getSelection().getRangeAt(0));
      console.log(`Selected text: ${window.getSelection().toString()}`);
      console.log(this.el);
    },

    highlight() {
      let a;
      if (this.el.length === 0) {
        return this.text_area;
      } else {
        this.el.forEach(item => {
          a = this.text_area.replace(new RegExp(item.word, "gi"), match => {
            console.log(match);
            return '<span class="highlightText">' + match + "</span>";
          });
        });
        console.log(a);
        return a;
        return this.text_area;
      }
    }
  },
  watch: {
    text_area() {}
  }
};
</script>

<style lang="scss">
.highlightText {
  background: yellow;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
