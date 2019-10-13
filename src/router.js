import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";
import store from "./store.js";

// Client Side Imports
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import LandingPage from "./views/LandingPage.vue";
import Product from "./views/Product.vue";
import CustomerAccount from "./views/CustomerAccount.vue";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import CartPage from "./views/CartPage";
import Support from "./views/Support";
import CheckoutSystem from "./views/CheckoutSystem";

//Admin Side Imports
import AddProduct from "./views/AdminSide/AddProduct";
import UpdateProduct from "./views/AdminSide/UpdateProduct";
import ProductManagement from "./views/AdminSide/ProductManagement";
import OrderManagement from "./views/AdminSide/OrderManagement";
import RequestManagement from "./views/AdminSide/RequestManagement";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/LandingPage"
    },
    {
      path: "/",
      redirect: "/LandingPage"
    },
    {
      path: "/LandingPage",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },

    {
      path: "/publicAbout",
      name: "publicAbout",
      component: About
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/Product",
      name: "Product",
      component: Product,
      meta: {
        requiresAuth: true
      },
      props(route) {
        return { myprop: route.query.myprop };
      }
    },
    {
      path: "/CustomerAccount",
      name: "CustomerAccount",
      component: CustomerAccount,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/CartPage",
      name: "CartPage",
      component: CartPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/Support",
      name: "Support",
      component: Support,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/CheckoutSystem",
      name: "CheckoutSystem",
      component: CheckoutSystem,
      meta: {
        requiresAuth: true
      }
    },


    //Admin side paths
    {
      path: "/AddProduct",
      name: "AddProduct",
      component: AddProduct,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsAdmin) {
          next();
        } else {
          console.log("Access Denied");
        }
      }
    },
    {
      path: "/UpdateProduct",
      name: "UpdateProduct",
      component: UpdateProduct,
      meta: {
        requiresAuth: true,
        adminAccess: true
      },

      props(route) {
        return { currentProduct: route.query.currentProduct };
      },
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsAdmin) {
          console.log("admin login test: " + store.getters.getIsAdmin);
          next();
        } else {
          console.log("Access Denied");
        }
      }
    },
    {
      path: "/ProductManagement",
      name: "ProductManagement",
      component: ProductManagement,
      meta: {
        requiresAuth: true,
        adminAccess: true
      },
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsAdmin) {
          next();
        } else {
          console.log("Access Denied");
        }
      }
    },
    {
      path: "/OrderManagement",
      name: "OrderManagement",
      component: OrderManagement,
      meta: {
        requiresAuth: true,
        adminAccess: true
      },
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsAdmin) {
          next();
        } else {
          console.log("Access Denied");
        }
      }
    },
    {
      path: "/RequestManagement",
      name: "RequestManagement",
      component: RequestManagement,
      meta: {
        requiresAuth: true,
        adminAccess: true
      },
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsAdmin) {
          next();
        } else {
          console.log("Access Denied");
        }
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("LandingPage");
  // if user is not logged in will redirect to landing page
  else if (!requiresAuth && currentUser) next("home");
  // if user is logged in will redirect to home
  else next();
});

export default router;
