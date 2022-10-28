<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/" tag='div'>首页</router-link>
      <router-link to="/list" tag='div'>分类</router-link>
      <router-link to="/cart" tag='div'>购物车</router-link>
      <router-link to="/my" tag='div'>我的</router-link>

      <router-link :to='{path:"/my"}'>新的path我的</router-link>
      <router-link :to='{name:"Cart"}'>新的name购物车</router-link>

      <router-link :to='{name:"List",query:{a:1}}'>新的query分类</router-link>

      <router-link to='/list1'>list1</router-link>

      <button @click='goList'>按钮</button>


    </div>
  </div>
</template>

<script type="text/javascript">
export default{
  methods:{
    goList(){
      this.$router.push({
        path:'/list',
        query:{
          type:'selectList'
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  margin:20px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
