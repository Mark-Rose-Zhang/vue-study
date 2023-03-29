const actions= {
    /**
     * 
     * @param {*} context 上下文对象
     * @param {*} value  传入的数据参数
     */
    addPersonWang(context,value){
        if(value.name.indexOf('王') === 0){
            context.commit('ADD_PERSON',value)
        }else{
            alert('添加的人必须姓王！')
        }
    },
}

// commit() 提交的函数处理位置 devtools 交互的位置
const mutations=  {
    // 拿到 state 里面的数据
    ADD_PERSON(state,value) {
        state.personList.unshift(value)
    }
}

// 存储数据的位置
const state = {
    personList: [
        {
            id: 0,
            name: '张三'
        }
    ]
}


const getters = {
    personLen(state) {
        return state.personList.length;
    }
}

export default {
    // ...
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}