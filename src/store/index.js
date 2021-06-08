import Vue from 'vue'
import Vuex from 'vuex'
import rootGetters from './getters'
import rootMutations from './mutations'
import rootActions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  state: {
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions
})
