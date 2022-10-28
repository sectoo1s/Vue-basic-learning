<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <MyComponents></MyComponents>
  <my-components></my-components>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyComponents from "./components/MyComponents.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    MyComponents,
  },
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
