<template>
  <div>
    <ul>
      <!-- 利用 query 传递参数 -->
      <!-- <li>id: {{ $route.query.id }}</li>
      <li>title: {{ $route.query.title }}</li> -->

      <!-- 利用 params 传递参数 配合路径 detail/:id/:title -->
      <li>id: {{ id }}</li>
      <li>title: {{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
};
</script>

<style>
</style>