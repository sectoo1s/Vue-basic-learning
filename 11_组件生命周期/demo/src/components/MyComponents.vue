<template>
  <h3>11_组件生命周期</h3>
  <button @click="msg = '数据'">点击</button>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  beforeCreate() {
    console.log("组件创建之前");
  },
  created() {
    console.log("组件创建完成");
  },
  beforeMount() {
    console.log("组件渲染之前");
  },
  mounted() {
    console.log("组件渲染完成");
  },
  beforeUpdate() {
    console.log("组件更新之前");
  },
  updated() {
    console.log("组件更新完成");
  },
  beforeUnmount() {
    console.log("组件卸载之前");
  },
  unmounted() {
    console.log("组件卸载完成");
  },
};
</script>
<style></style>
