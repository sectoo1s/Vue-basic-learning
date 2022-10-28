<template>
  <div class="hello"></div>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <swiper-slide>
      <img src="../assets/1.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/2.jpg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/3.jpg" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  name: "HelloWorld",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
img{ width:100% }
<style scoped></style>
