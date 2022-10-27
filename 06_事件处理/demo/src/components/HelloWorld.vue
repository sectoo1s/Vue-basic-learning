<template>
  <div class="hello">
    <h3>06_事件处理</h3>
    <button v-on:click="counter += 1">点击:{{ counter }}</button>
    <button v-on:click="clickHandle">哈哈哈按钮</button>
    <button v-on:click="withdrawHandle">撤回按钮</button>
    <p>{{ message }}</p>
    <button @click="say('hi')">say hi</button>
    <button @click="say('what')">say what</button>
    <ul>
      <li v-for="(name, index) in names" :key="index" @click="printName(name)">
        {{ name }}
      </li>
    </ul>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      counter: 1,
      message: "你是个好人",
      names: ["ace", "amy", "hx", "frank"],
    };
  },
  methods: {
    clickHandle() {
      alert("哈哈哈");
    },
    withdrawHandle(event) {
      console.log(event);
      this.message = "消息被撤回了";
      event.target.innerHTML = "点击之后";
    },
    say(data) {
      console.log(data);
    },
    printName(name) {
      console.log(name);
    },
  },
};
</script>
<style scoped></style>
