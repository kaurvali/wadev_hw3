<template>
  <div class="footer">
    <div class="logo">
      <a href="/"
        ><img src="../assets/logo.png" id="footer_img" alt="logo"
      /></a>
      <h3>postIt!</h3>
    </div>
    <div class="center">
      <h2>Making the world a better place!</h2>
    </div>
    <div class="footer-nav">
      <router-link to="/about">About Us</router-link> |
      <router-link to="/contact-us">Contact Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.footer {
  background-color: white;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  .logo {
    img {
      height: 40px;
      width: auto;
    }
  }
}
a {
  color: #42b983;
  text-decoration: none;

  &.router-exact-link-active {
    color: black;
  }
}
a:hover {
  color: black;
}
</style>
