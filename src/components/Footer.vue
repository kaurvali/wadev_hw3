<template>
  <div class="footer">
    <div class="logo">
      <a href="index.html"
        ><img src="../assets/logo.png" id="footer_img" alt="logo"
      /></a>
      <h3>postIt!</h3>
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
</style>
