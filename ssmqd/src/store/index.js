import Vue from 'vue'
import Vuex from 'vuex'

//将vuex引入到vue中
Vue.use(Vuex)



import state from '@/store/state'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store

