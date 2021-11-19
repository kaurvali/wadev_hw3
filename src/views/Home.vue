<template>
  <div class="home">
    <Post
      v-for="post in posts"
      :key="post.id"
      :date="post.date"
      :text="post.text"
      :img="post.img"
      :likes="post.likes"
    />
    <button v-on:click="ResetLikes">Reset likes</button>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
export default {
  name: "Home",
  components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    ResetLikes: function () {
      this.$store.commit("ResetLikes");
    },
  },
};
</script>

<style scoped lang="scss">
button {
  background: black;
  color: white;
  border: none;
  height: 35px;
  width: 100px;
  font-size: 12pt;
  margin: 10px;
}

button:hover {
  color: black;
  background: white;
  border: 1px solid black;
}
</style>