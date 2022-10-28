<template>
  <router-view></router-view>
  <router-link to="/">这是首页</router-link>|
  <router-link to="/about">关于页面</router-link>
</template>

<script>
export default {
  name: "App",
};
</script>
