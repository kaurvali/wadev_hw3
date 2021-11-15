<template>
  <div id="app">
    <Header />
    <div id="main">
      <div class="center-area">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  #main {
    padding-top: 25px;
    padding-bottom: 25px;
    background: #42b983;
    min-height: calc(100vh - 250px);

    .center-area {
      background: white;
      width: 60%;
      padding: 20px;
      margin: auto;
      min-height: calc(100vh - 280px);
    }
  }
}
</style>
