<template>
  <h3>prop传递数据</h3>
  <p>title:{{ title }}</p>
  <p>age: {{ age }}</p>
  <ul>
    <li v-for="(item, index) in names" key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "MyComponents",
  props: {
    title: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: "",
    },
    names: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style>
h3 {
  color: red;
}
</style>
