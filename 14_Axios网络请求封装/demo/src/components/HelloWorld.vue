<template>
  <div class="hello"></div>
</template>

<script>
import api from "../api";

export default {
  name: "HelloWorld",
  mounted() {
    api.getChengpin().then((res) => {
      console.log(res.data);
    });
  },
};
</script>
