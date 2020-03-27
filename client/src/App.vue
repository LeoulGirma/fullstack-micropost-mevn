<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <PostComponenet />
  </div>
</template>

<script>
import PostComponenet from "./components/PostComponenet";

export default {
  name: "App",
  components: {
    PostComponenet
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
