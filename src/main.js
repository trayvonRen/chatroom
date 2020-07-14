import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.isLogin) next({ name: 'Login' })
  else next()
})

export default new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
