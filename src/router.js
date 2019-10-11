import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";
import store from "./store.js"

// Client Side Imports
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import LandingPage from "./views/LandingPage.vue";
import TandC from "./views/TandC.vue";
import Product from "./views/Product.vue";
import Category from "./views/Category.vue";
import CustomerAccount from "./views/CustomerAccount.vue";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import CartPage from "./views/CartPage";
import Support from "./views/Support";
import ShippingInfo from "./views/Checkout/ShippingInfo";
import PaymentInfo from "./views/Checkout/PaymentInfo";
import FinaliseOrder from "./views/Checkout/FinaliseOrder";

//Admin Side Imports
import AdminDashboard from "./views/AdminSide/AdminDashboard";
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
      path: "/T&C",
      name: "TandC",
      component: TandC,
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
      path: "/Category",
      name: "Category",
      component: Category,
      meta: {
        requiresAuth: true
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
      path: "/Checkout/ShippingInfo",
      name: "ShippingInfo",
      component: ShippingInfo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/Checkout/PaymentInfo",
      name: "PaymentInfo",
      component: PaymentInfo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/Checkout/FinaliseOrder",
      name: "FinaliseOrder",
      component: FinaliseOrder,
      meta: {
        requiresAuth: true
      }
    },

    //Admin side paths
    {
      path: "/AdminDashboard",
      name: "AdminDashboard",
      component: AdminDashboard,
      meta: {
        requiresAuth: true,
      },
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsAdmin) { //checks if suer is using admin login
          next();
        } 
        else {
          console.log("Access Denied")
        }
      }
    },
    {
      path: "/AddProduct",
      name: "AddProduct",
      component: AddProduct,
      meta: {
        requiresAuth: true,
      },
      beforeEnter: (to, from, next) => {
        if (store.getters.getIsAdmin) {
          next();
        } 
        else {
          console.log("Access Denied")
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
          console.log("admin login test: " + store.getters.getIsAdmin)
          next();
        } 
        else {
          console.log("Access Denied")
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
        } 
        else {
          console.log("Access Denied")
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
        } 
        else {
          console.log("Access Denied")
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
        } 
        else {
          console.log("Access Denied")
        }
      }
    },
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
