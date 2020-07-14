import store from '../store'
import Vue from '../main'

export default function handleWsMessage(data) {
  const message = JSON.parse(data.data)
  switch (message.type) {
    case 'userlist':
      store.commit('changeUserList', message.data)
      break
    case 'message':
      store.commit('addChatHistory', message.data)
      break
    case 'notice':
      Vue.$message({
        showClose: true,
        message: message.data,
        type: 'success',
      })
  }
}
