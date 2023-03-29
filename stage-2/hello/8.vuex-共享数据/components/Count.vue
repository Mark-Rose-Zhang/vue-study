<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h2>当前求和(扩大十倍)为：{{ bigNum }}</h2>
    <h2>当前personList数组长度为：{{ personLen }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等-等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    // 利用vuex提供的函数获取内部数据
    ...mapState("countAbout", ["sum", "msg"]),
    ...mapGetters("countAbout", ["bigNum"]),
    ...mapGetters("personAbout", ["personLen"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("INCREMENT", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n);
    // },

    // 生成对应的 method ---> 注意参数问题
    ...mapMutations("countAbout", {
      increment: "INCREMENT",
      decrement: "DECREMENT",
    }),
    incrementOdd() {
      this.$store.dispatch("countAbout/incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("countAbout/incrementWait", this.n);
    },
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
