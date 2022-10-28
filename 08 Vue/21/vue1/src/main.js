import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入swiper插件[全局引入]
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


new Vue({
  render: h => h(App),
}).$mount('#app')
