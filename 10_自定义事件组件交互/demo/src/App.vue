<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <MyComponents @onEvent="getHandle"></MyComponents>
  <p>{{ msg }}</p>
</template>

<script>
import MyComponents from "./components/MyComponents.vue";
export default {
  name: "App",
  components: {
    MyComponents,
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    getHandle(data) {
      this.msg = data;
    },
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
