<template>
  <div class="todo-footer" v-show="isShow">
    <label>
      <input type="checkbox" v-model="finish" />
    </label>
    <span>
      <span>已完成{{ doneLen }}</span> / 全部{{ todoLen }}
    </span>
    <button class="btn btn-danger" @click="handlerClear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos", "clearDone", "checkAll"],
  computed: {
    isShow() {
      return this.todoLen;
    },
    todoLen() {
      return this.todos.length;
    },
    doneLen() {
      return this.todos.reduce((prev, cur) => prev + (cur.done ? 1 : 0), 0);
    },
    finish: {
      get() {
        return this.todoLen && this.doneLen === this.todoLen;
      },
      set(value) {
        this.checkAll(value);
      },
    },
  },
  methods: {
    handlerClear() {
      if (confirm("你确定要删除所有完成的项目吗?")) this.clearDone();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>