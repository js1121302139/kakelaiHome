import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  windowWidth: 0
}

const actions = {
  setWindowWidth ({commit}) {
    commit('setWindowWidth')
  }
}

const getters = {
  getWindowWidth: state => state.windowWidth
}
const mutations = {
  setWindowWidth (state, width) {
    console.log(state, width)
    state.windowWidth += width
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
