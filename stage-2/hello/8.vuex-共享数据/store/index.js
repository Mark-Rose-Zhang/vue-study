import Vue from 'vue';
import Vuex from 'vuex'
// 使用 Vuex 插件
Vue.use(Vuex);
import countOptions from './modules/count'
import personOptions from './modules/person'




export default new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
})