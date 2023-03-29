const actions= {
    /**
     * 
     * @param {*} context 上下文对象
     * @param {*} value  传入的数据参数
     */
    incrementOdd(context,value) {
        if (context.state.sum % 2) {
          context.commit('INCREMENT',value)
        }
    },
    incrementWait(context,value) {
        setTimeout(() => {
          context.commit('INCREMENT',value)
          }, 500);
    }
}

// commit() 提交的函数处理位置 devtools 交互的位置
const mutations=  {
    // 拿到 state 里面的数据
    INCREMENT(state,value) {
        state.sum += value
    },
    DECREMENT(state,value) {
        state.sum -= value
    }
}

// 存储数据的位置
const state = {
    sum: 1,
    msg: 'hah'
}


const getters = {
    bigNum() {
        return state.sum * 10
    }
}

export default {
    // ...
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}