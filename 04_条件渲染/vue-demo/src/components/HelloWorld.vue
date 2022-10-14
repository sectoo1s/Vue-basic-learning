<template>
  <div class="hello">
    <p v-if="flag">我是孙猴子</p>
    <p v-else>你是傻猴子</p>
    <p  v-show="flag">你真的是那只孙猴子吗？</p>
    <div v-if="flag">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
  </div>

</template>
  <!-- 
    v-if/v-else:
      用flag来给一个判断指令，可以对块进行控制
    
    v-show/v-if的区别：
      v-if在dom结构中看不到，会将元素删除掉
      v-show 用css控制，display none block的切换
      
      v-if有较高的切换开销
      v-show you较高的渲染开销

   -->

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      flag: true
    }
  }
}
</script>
