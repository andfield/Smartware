import Vue from "vue";
import Vuex from "vuex";
import firebase, { functions } from "firebase";
import db from "@/main";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    custID: null,
    cartData: [],
    cartQuantity: 0,
    cartTotal: 0,

    customerData: {
      email: null,
      fName: null,
      lName: null,
      phNum: null
    },
    shippingInfo: {
      fName: null,
      lName: null,
      companyName: null,
      address: null,
      apt: null
    },
    orderData: {
      cartData: [],
      custID: null,
      shippingAddress: [], // array or string
      cost: null,
      date: null
    },
    defaultProducts: [],
    isAdmin: false
  },
  mutations: {
    setUserID(state, payload) {
      state.custID = payload;
    },
    setUserData(state, payload) {
      state.customerData.email = payload.email;
      state.customerData.fName = payload.fName;
      state.customerData.lName = payload.lName;
      state.customerData.phNum = payload.phNum;
      state.customerData.address = payload.address;
    },
    setCartData(state, payload) {
      state.cartData = payload;
    },
    setCartQuantity(state, payload) {
      state.cartQuantity = payload;
    },
    setCartTotal(state, payload) {
      state.cartTotal = payload;
    },
    setShippingInfo(state, payload) {
      state.shippingInfo.fName = payload.fName;
      state.shippingInfo.lName = payload.lName;
      state.shippingInfo.companyName = payload.companyName;
      state.shippingInfo.address = payload.address;
      state.shippingInfo.apt = payload.apt;
    },
    setOrderData(state, payload) {
      state.orderData.cartData = payload.cartData;
      state.orderData.custID = payload.custID;
      state.orderData.address = payload.address;
      state.orderData.cost = payload.cost;
      state.orderData.date = payload.date;
    },
    setDefaultProducts(state, payload) {
      state.defaultProducts = payload
    },
    setIsAdmin(state, status) {
      state.isAdmin = status
    }
  },
  actions: {
    // products({ commit, state }, { category }) {
    //   db.collection("ProductCategory")
    //     .doc("vQzSkBnxzbu1Tnqn4iv2")
    //     .collection(category);
    // },

    userSignup({ commit }, { email, password, custInfo }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection("customers").add(custInfo);
          router.push("/home");
        })
        .catch(error => {
          alert("Error: " + error);
        });
    },

    userLogin({ commit, state }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          if(firebase.auth().currentUser.uid == "sNBUtBuDEFbPkuZaTs3TQkCBKH12") {
            commit("setIsAdmin", true)
            router.push("/AdminDashboard")
          }
          else {
            router.push("/home");
          }
        })
        .catch(error => {
          alert("Error: Invalid Login");
        });
    },

    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          router.push("/");
        })
        .catch(() => {});
    },

    customerDetails({ commit, state }) {
      var user = firebase.auth().currentUser; //this currentUser is not realated to the state, it is apart Firebase/Firestore
      var userEmail = user.email;

      db.collection("customers")
        .where("email", "==", userEmail)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            //using a foreach loop even though there is just one, idk how to do just one
            commit("setUserData", doc.data());
            commit("setUserID", doc.id);
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },

    updateCustomer({ commit }, { newPhNum, newEmail, newPass, newAddress }) {
      var user = firebase.auth().currentUser; //this currentUser is not realated to the state, it is apart Firebase/Firestore
      var userEmail = user.email;
      var docID = null;
      var docRef = null;

      db.collection("customers")
        .where("email", "==", userEmail)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            //using a foreach loop even though there is just one, idk how to do just one
            docID = doc.id;
            docRef = db.collection("customers").doc(docID); //have to search by docID if the email is changing

            if (newPhNum != null) {
              //check if not null so it doesnt overwrite in DB with nothing
              docRef.update({
                phNum: newPhNum
              });
            } else {
              console.log("error updating phNum: " + newPhNum);
            }
            if (newEmail != null) {
              //checking each part individualy, probably a better way
              user.updateEmail(newEmail).then(() => {
                //update the authentication email first
                docRef.update({
                  email: newEmail
                });
              });
            } else {
              console.log("error updating email: " + newEmail);
            }
            if (newAddress != null) {
              //checking each part individualy, probably a better way
              docRef.update({
                address: newAddress
              });
            } else {
              console.log("error updating email: " + newEmail);
            }
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
      if (newPass != null) {
        user.updatePassword(newPass);
      } else {
        console.log("error updating password");
      }
      alert("Deatils have been updated");
    },

    updateCart({ commit, state }, { newProduct, quantity }) {
      var currentCart = state.cartData;
      var currentTotal = state.cartTotal;
      for (var i = 0; quantity > i; i++) {
        currentCart.push(newProduct);
        currentTotal += parseFloat(newProduct.stanPrice) // newProduct.stanPrice is a string need to change admin page
      }
      commit("setCartData", currentCart);
      commit("setCartQuantity", state.cartData.length);
      commit("setCartTotal", currentTotal);
    },

    clearCart({ commit, state }) {
      var currentCart = state.cartData;
      var quantity = currentCart.length;
      currentCart.splice(0, quantity); // using this makes the cart page update when you clear all
      commit("setCartData", currentCart);
      commit("setCartQuantity", 0);
      commit("setCartTotal", 0);
    },

    removeCartProduct({ commit, state }, { arrayPos }) {
      var currentCart = state.cartData;
      var price = currentCart[arrayPos].stanPrice;
      var currentTotal = state.cartTotal - price;
      currentCart.splice(arrayPos, 1);
      commit("setCartData", currentCart);
      commit("setCartQuantity", state.cartData.length);
      commit("setCartTotal", currentTotal);
    },

    shippingInfo({ commit }, { fName, lName, companyName, address, apt }) {
      var shippingData = [];
      shippingData = {
        fName: fName,
        lName: lName,
        companyName: companyName,
        address: address,
        apt: apt
      };

      commit("setShippingInfo", shippingData);
    },

    createOrder({ state }) {
      var orderData = [];
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var hour = date.getHours();
      var minute =
        (date.getMinutes() < 10 ? "0" : "") + date.getMinutes().toString(); // will lead with 0 if appropriate | may not need toString need to wait until time is right(x:00 - x:09)

      var orderDate =
        day + "/" + month + "/" + year + " " + hour + ":" + minute;

      orderData = {
        cartData: state.cartData,
        custID: state.custID,
        shippingAddress: state.shippingInfo,
        orderPrice: state.cartTotal,
        date: orderDate
      };
      console.log(orderData);
      db.collection("Orders").add(orderData);
    },
    defaultProductList({commit}){ //think this is obsolete
      var defaultProductList = []
      
      db.collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
        .collection("EFTPOS Machine")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.data())
            defaultProductList.push(doc.data());
          });
        })
        .catch(function(error) {
          console.log("error getting documents: ", error);
        });

        console.log(defaultProductList)

        commit("setDefaultProducts", defaultProductList)
    },

  },
  getters: {
    getCustomerDetails(state) {
      return state.customerData;
    },
    getCartDetails(state) {
      return state.cartData;
    },
    getCartQuantity(state) {
      return state.cartQuantity;
    },
    getCartTotal(state) {
      return state.cartTotal;
    },
    getShippingInfo(state) {
      return state.shippingInfo;
    },
    getCustID(state) {
      return state.custID;
    },
     getDefaultProducts(state) {
       return state.defaultProducts
     },
     getIsAdmin(state) {
      //  console.log(sate.isAdmin)
       return state.isAdmin
     }
  }
});
