<template>
  <div class="post">
    <div class="header">
      <a href="#"
        ><img class="account" src="../assets/account.png" alt="Account Photo"
      /></a>
      <p>{{ date }}</p>
    </div>

    <div v-if="img" class="content">
      <img :src="img" alt="post-img" />
    </div>

    <div class="desc">
      <p>{{ text }}</p>
    </div>

    <div class="footer">
      <input
        type="image"
        src="../assets/like.jpg"
        name="Like Button"
        alt="Like Button"
      />
    </div>
  </div>
</template>

<script>
export default {
	name: "Home",
	props: {
		"date": {required: true},
		"text": {required: true},
		"img": {required: false},
	},
};
</script>