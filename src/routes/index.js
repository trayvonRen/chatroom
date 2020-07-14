import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import Chatroom from '../pages/chatroom/Chatroom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Chatroom',
      name: 'Chatroom',
      component: Chatroom,
    },
  ],
})
