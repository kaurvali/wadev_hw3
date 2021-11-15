<template>
  <div class="post">
    <div class="header">
      <a>
        <img class="account" src="../assets/account.png" alt="Account Photo" />
      </a>
      <p>{{ date }}</p>
    </div>

    <div v-if="img" class="content">
      <img :src="img" alt="an image" />
    </div>

    <div class="desc">
      <p>{{ text }}</p>
    </div>

    <div class="footer">
      <button>Like</button>
      <p>x people like this!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    date: { required: true },
    text: { required: true },
    img: { required: false },
  },
};
</script>

<style scoped lang="scss">
.post {
  text-align: left;
  margin: 10px auto;
  width: 90%;
  height: fit-content;
  box-shadow: 0px 0px 9px gray;

  .content img {
    width: 100%;
    height: auto;
  }

  .header img {
    margin-top: 6px;
    margin-left: 6px;
    height: 48px;
    width: auto;
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;

    p{
      padding-left: 5px;
      font-size: 14pt;
    }

    button {
      background: black;
      color: white;
      border: none;
      height: 40px;
      width: 60px;
      font-size: 1.3em;
      margin: 10px;
    }

    button:hover {
      color: black;
      background: white;
      border: 1px solid black;
    }
  }

  .header p {
    float: right;
    color: gray;
    margin-right: 6px;
    padding: 7px;
  }

  .desc p {
    font-size: 1.5em;
    font-weight: 600;
    margin: 15px 10px;
  }
}
</style>