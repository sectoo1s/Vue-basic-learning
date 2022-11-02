<template>
  <div class="home"></div>
  <h1>This is home page</h1>
  <p>counter = {{ $store.getters.getCounter }}</p>
  <p>{{ getCounter }}</p>
  <button @click="addClickHandle">增加</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  computed: {
    ...mapGetters(["getCounter"]),
  },
  methods: {
    // addClickHandle() {
    //   this.$store.commit("addCounter");
    // },
    addClickHandle() {
      this.$store.commit("addCounters", 30);
    },
  },
};
</script>
