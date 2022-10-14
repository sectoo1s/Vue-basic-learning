<template>
  <div class="hello">
    <h3>{{ message }}</h3>  
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
    <div v-bind:id="dynamicId"></div>
    <div :id="dynamicId"></div>
    <p>{{ num + 10 }}</p>
    <p>{{ flag ? "孙猴子" : "傻猴子"}}</p>
  </div>
  <!-- 
    {{}}：
      模板能够动态显示数据，方便后期修改
      但是他属于js中的innerText不会渲染到dom树中

    v-html：
      属于innerHtml能够渲染到dom树中，可以解析网址

    v-bind:
      能够将属性动态化方便修改，可以简写成：

    {{}} 可以渲染表达式
   -->
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: "学习vue:模板语法",
      rawHtml: "<a href='http://www.itbaizhan.com'>百战</a>",
      dynamicId: 10001,
      num: 10,
      flag: false
    }
  }
}
</script>
