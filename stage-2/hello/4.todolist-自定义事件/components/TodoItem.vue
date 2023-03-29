<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handlerCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handlerClear">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "checkTodo", "clearTodo"],
  methods: {
    handlerCheck(todoId) {
      // 通知 APP 修改对应的todo的done值
      this.checkTodo(todoId);
    },
    handlerClear() {
      if (confirm("你确定要删除吗?")) {
        this.clearTodo(this.todo.id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:hover button {
  display: block;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>