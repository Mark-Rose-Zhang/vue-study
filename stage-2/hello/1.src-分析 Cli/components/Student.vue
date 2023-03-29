<template>
  <div>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "nancheng",
      age: 18,
    };
  },
};
</script>

<style>
</style>