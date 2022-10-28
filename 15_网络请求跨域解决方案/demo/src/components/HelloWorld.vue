<template>
  <div class="hello"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  mounted() {
    axios.get("/api/FingerUnion/list.php").then((res) => {
      console.log(res.data);
    });
  },
};
</script>
