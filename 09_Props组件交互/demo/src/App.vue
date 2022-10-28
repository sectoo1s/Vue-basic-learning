<template>
  <MyComponents :title="title" :age="age" :names="names"></MyComponents>
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
  data() {
    return {
      title: "我是一个标题",
      age: 20,
      names: ["amy", "ace", "frank"],
    };
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
