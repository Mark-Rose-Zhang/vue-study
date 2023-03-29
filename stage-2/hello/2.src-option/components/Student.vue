<template>
  <div>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age + 1 }}</h2>
    <button @click="showName">点我弹出名字</button>
  </div>
</template>

<script>
// import { mixin } from "../mixin";
export default {
  name: "StudentInfo",
  data() {
    return {
      // name: "nancheng",
      // age: 18,
    };
  },
  // props: ["name", "age"],
  // props: {
  //   name: String,
  //   age: Number,
  // },
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      validator: function (value) {
        return value >= 0;
      },
    },
  },
  // mixins: [mixin],
};
</script>

<style>
</style>