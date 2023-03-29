<template>
  <div>
    <slot></slot><br /><br />
    <slot name="center"></slot><br /><br />
    <slot name="footer" :msg="msg" :itemInfo="itemInfo"></slot><br /><br />
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      msg: "你好啊,父组件",
      itemInfo: "旅行",
    };
  },
};
</script>

<style>
</style>