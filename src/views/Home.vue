<template>
  <div class="home">
		<Post
			v-for="post in posts"
			:key="post.id"
			:date="post.date"
			:text="post.text"
			:img="post.img"
		/>
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
};
</script>