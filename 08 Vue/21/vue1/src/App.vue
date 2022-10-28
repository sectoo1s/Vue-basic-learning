<template>
  <div id="app">
    <h1>这是App</h1>

    <button @click='btn'>按钮</button>

     <swiper :options="swiperOption">
      <swiper-slide>1</swiper-slide>
      <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
      <swiper-slide>4</swiper-slide>
      <swiper-slide>5</swiper-slide>
      <swiper-slide>6</swiper-slide>
    </swiper>
    <!--以下看需要添加-->
    <div class="swiper-scrollbar"></div> 
    <div class="swiper-button-next"></div> 
    <div class="swiper-button-prev"></div> 
    <div class="swiper-pagination"></div> 


    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import { Indicator } from 'mint-ui';

export default {
  name: 'App',
  components: {
    HelloWorld,
    swiper,
    swiperSlide
  },
  data(){
    return{
      swiperOption: {//swiper3
      autoplay: 3000,
      speed: 1000,
      }
    }
  },
  methods:{
    btn(){
      Indicator.open('加载中...');
      setTimeout(()=>{
        Indicator.close();
      },1000)
    }
  }
}
</script>

