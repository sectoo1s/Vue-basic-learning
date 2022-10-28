<template>
  <div class="hello">
    <h1>这是hello</h1>

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

    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      swiperOption: {//swiper3
      autoplay: 3000,
      speed: 1000,
      }
    }
  }
}
</script>
