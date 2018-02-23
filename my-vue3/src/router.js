import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import Status from './views/Status.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '*',
      redirect: '/status',
      meta: {
          title: '高速ETC'
      }
    },
  ]
})
