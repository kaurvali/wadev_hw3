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
		ResetLikes: function() {
			this.$store.commit("ResetLikes")
			//this.$store.state.posts.forEach(element => {
			//	element.likes = 0;
			//});
		},
	},
};
</script>