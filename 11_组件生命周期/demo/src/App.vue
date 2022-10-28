<template>
  <MyComponents></MyComponents>
</template>

<script>
import MyComponents from "./components/MyComponents.vue";
export default {
  name: "App",
  components: {
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
