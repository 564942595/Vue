import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  count:1,
  list:[]
}
const mutations={
  add(a,c){
    state.count+=c;
  },
  reduce(a,c){
    state.count-=c;
  },
  setVuexList(state,data){
    state.list=data;
  }
}
const getters={
  computedCount:(state)=>{
   return state.count*10;
  }
}
const store=new Vuex.Store({
  state,
  mutations,
  getters
})
export default store
