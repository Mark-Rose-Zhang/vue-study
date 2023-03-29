import {mixin} from './mixin';
export default{
    install(Vue,...arg) {
        Vue.mixin(mixin)
    }
}