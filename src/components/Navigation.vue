<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About Us</router-link> |
    <router-link to="/contact-us">Contact Us</router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {},
};
</script>

<style scoped lang="scss">
.nav {
  padding-top: 10px;
  a {
    color: #42b983;
    text-decoration: none;

    &.router-link-exact-active {
      color: black;
    }
  }
  a:hover {
    color: black;
  }
}
</style>
