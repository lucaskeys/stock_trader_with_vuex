import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes';
import store from './store/store'

Vue.filter('currency', (value) => {
  
})
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // routes: routes
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
