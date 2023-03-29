<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>ref 属性: 获取元素/子组件信息</h1>
    <School ref="sch"></School>
    <Student name="nancheng" :age="18"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  mounted() {
    console.log(this.$refs.sch);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
