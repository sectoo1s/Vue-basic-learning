<template>
  <div class="hello"></div>
  <p>标准写法:{{ chengpin.title }}</p>
  <p>简便写法:{{ jianbian.title }}</p>
</template>

<script>
// import axios from "axios";
import qs from "qs";
export default {
  name: "HelloWorld",
  data() {
    return {
      chengpin: {},
      jianbian: {},
    };
  },
  mounted() {
    this.$axios({
      method: "get",
      url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
    }).then((res) => {
      console.log(res.data);
      this.chengpin = res.data.chengpinDetails[0];
    });
    this.$axios({
      method: "POST",
      url: "http://iwenwiki.com/api/blueberrypai/login.php",
      data: qs.stringify({
        user_id: "iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw",
      }),
    }).then((res) => {
      console.log(res.data);
    });
    // 简便写法
    this.$axios
      .get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
      .then((res) => {
        console.log(res.data);
        this.jianbian = res.data.chengpinDetails[0];
      });
    this.$axios
      .post(
        "http://iwenwiki.com/api/blueberrypai/login.php",
        qs.stringify({
          user_id: "iwen@qq.com",
          password: "iwen123",
          verification_code: "crfvw",
        })
      )
      .then((res) => {
        console.log(res.data);
      });
  },
};
</script>
