<template>
  <div class="hello">
    <p>{{ msg.title }}</p>
    <p>登录状态：{{ isLogin }}</p>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "HelloWorld",
  mounted() {
    api.getChengpin().then((res) => {
      console.log(res.data);
      this.msg = res.data.chengpinDetails[0];
    });
    api.getLogin().then((res) => {
      console.log(res.data);
      this.isLogin = res.data.success;
    });
  },
  data() {
    return {
      msg: "",
      isLogin: "",
    };
  },
};
</script>
