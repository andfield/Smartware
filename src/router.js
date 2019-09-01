import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import LandingPage from './views/LandingPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/Home',
      name: 'home',
      component: Home
=======
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LandingPage
>>>>>>> 741ec0af27fe19ea89a5524636bc44636482f5aa
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
<<<<<<< HEAD
      path: '/',
      name: 'landingpage',
      component: LandingPage
=======
      path: '/home',
      name: 'home',
      component: Home
>>>>>>> 741ec0af27fe19ea89a5524636bc44636482f5aa
    }
  ]
})