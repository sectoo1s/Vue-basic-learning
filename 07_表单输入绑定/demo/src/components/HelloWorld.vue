<template>
  <div class="hello">
    <h3>07_表单数据绑定</h3>
    <input type="text" v-model.lazy="username" />
    <input type="text" v-model.trim="password" />
    <p>{{ username }},{{ password }}</p>
    <button @click="getUserInfo">获取用户名和密码</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    getUserInfo() {
      console.log(this.username);
      console.log(this.password);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
