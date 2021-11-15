<template>
  <div class="wrapper">
    <div class="header">
      <div class="logo">
        <a href="/"><img src="../assets/logo.png" alt="PostIt" /></a>
      </div>
      <div class="search">
        <form method="POST" action="#">
          <input type="text" /><button>Search</button>
        </form>
      </div>
      <div class="user-control">
        <a id="account"
          ><img src="../assets/account.png" alt="Account Photo"
        /></a>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Header",
  props: {
  },
  components: {
    Navigation,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 10px;
  position: sticky;
  top: 0;

  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    .search {
      width: 40%;

      form > input {
        box-sizing: border-box;
        height: 35px;
        width: 75%;
        margin: 0;
        padding: 5px;
        border: 1px solid #e0e0e0;
      }
      form > button {
        box-sizing: border-box;
        height: 35px;
        width: 25%;
        margin: 0;
        padding: 5px;
        border: 1px solid #e0e0e0;
        cursor: pointer;
        background-color: #42b983;
        color: white;
        font-weight: 600;
      }
    }

    #account img,
    .logo img {
      height: 40px;
      width: auto;
    }
  }
}
</style>
