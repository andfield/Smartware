import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import LandingPage from './views/LandingPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    }
  ]
})