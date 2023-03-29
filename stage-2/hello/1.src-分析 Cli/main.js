// 引入 Vue.js
import Vue from 'vue'
// 引入 App 组件,它是所有组件的父组件
import App from './App.vue'

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 创建 Vue 实例
new Vue({
  render: h => h(App), // 模板渲染器
}).$mount('#app')
