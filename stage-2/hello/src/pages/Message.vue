<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- <router-link to="/home/message/detail">{{ msg.title }}</router-link> -->
        <!-- query的两种写法 -->
        <!-- <router-link
          :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`"
          >{{ msg.title }}</router-link
        > -->
        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: msg.id,
              title: msg.title,
            },
          }"
          >{{ msg.title }}</router-link> -->
        <router-link
          :to="{
            name: 'detail',
            params: {
              id: msg.id,
              title: msg.title,
            },
          }"
          >{{ msg.title }}</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter", to.path, from.path);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", from.path, to.path);
    next();
  },
};
</script>

<style>
</style>