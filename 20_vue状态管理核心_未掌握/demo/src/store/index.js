import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:10
  },
  getters: {
    getCounter(state) {
      return state.counter > 0 ? state.counter : "counter数据异常"
    }
  },
  mutations: {
    addCounter(state) {
      state.counter++;
    },
    addCounters(state,n) {
      state.counter += n
    }
  },
  actions: {
  },
  modules: {
  }
})
