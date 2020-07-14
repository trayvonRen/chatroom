import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    ws: '',
    userlist: [],
    chatHistory: [],
  },
  mutations: {
    initWs(state, ws) {
      state.ws = ws
      state.isLogin = true
    },
    changeUserList(state, userlist) {
      state.userlist = userlist
    },
    addChatHistory(state, message) {
      state.chatHistory.unshift(message)
    },
  },
})
