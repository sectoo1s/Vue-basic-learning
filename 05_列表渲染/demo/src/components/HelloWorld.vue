<template>
  <div class="hello">
    <h3>05_列表渲染</h3>
    <ul>
      <!-- key是索引，能够判断数据有没有新增，要不要重新渲染 -->
      <li v-for="(item, index) in newList" :key="item.index">{{ item }}</li>
      <li v-for="item in newList" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      newList: [
        {
          id: 1001,
          title: "今日新闻1",
        },
        {
          id: 1002,
          title: "今日新闻2",
        },
        {
          id: 1003,
          title: "今日新闻3",
        },
        {
          id: 1004,
          title: "今日新闻4",
        },
      ],
    };
  },
};
</script>

<style></style>
