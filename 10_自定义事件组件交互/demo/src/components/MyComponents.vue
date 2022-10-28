<template>
  <h3>10_自定义事件组件交互</h3>
  <button @click="sendHandle">数据</button>
</template>

<script>
export default {
  name: "MyComponents",
  data() {
    return {
      msg: "我是MyComponents数据",
    };
  },
  methods: {
    sendHandle() {
      this.$emit("onEvent", this.msg);
    },
  },
};
</script>

<style>
h3 {
  color: red;
}
</style>
