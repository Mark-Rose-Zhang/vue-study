<template>
  <div>
    <Item>
      <h4>父组件替换子组件中的内容(默认插槽)</h4>
    </Item>
    <hr />
    <Item>
      <h4 slot="center">父组件替换子组件中的内容(具名插槽)</h4>
    </Item>
    <hr />
    <Item>
      <template slot="footer" slot-scope="itemData">
        <h4>父组件接收到子组件内容(作用域插槽){{ itemData }}</h4>
      </template>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "ItemList",
  components: {
    Item,
  },
};
</script>

<style>
</style>