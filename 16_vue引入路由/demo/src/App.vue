<template>
  <router-view></router-view>
  <router-link to="/">首页</router-link>|
  <router-link to="/about">关于</router-link>
</template>

<script>
export default {
  name: "App",
};
</script>
