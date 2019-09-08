import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Home from './views/Home.vue'
import About from './views/About.vue'
import LandingPage from './views/LandingPage.vue'
import TandC from './views/TandC.vue'
import Product from './views/Product.vue'
import Category from './views/Category.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
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
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/T&C',
      name: 'TandC',
      component: TandC,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Product' ,
      name: 'Product',
      component: Product,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Category' ,
      name: 'Category',
      component: Category,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth= to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login'); // if user is not logged in will redirect to landing page
  else if (!requiresAuth && currentUser) next('home'); // if user is logged in will redirect to home
  else next();
});

export default router;