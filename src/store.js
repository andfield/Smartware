import Vue from "vue";
import Vuex from "vuex";
import firebase, { functions } from "firebase";
import db from "@/main"
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customerData: {
      email: null,
      fName: null,
      lName: null,
      phNum: null
    },
    cartData: [],
    cartQuantity: 0,
    cartTotal: 0,
  },
  mutations: {
    setUser(state, payload) {
      state.currentuser = payload;
    },
    setUserData(state, payload) {
      state.customerData.email = payload.email
      state.customerData.fName = payload.fName
      state.customerData.lName = payload.lName
      state.customerData.phNum = payload.phNum
      state.customerData.address = payload.address
    },
    setCartData(state, payload){
      state.cartData = payload
    },
    setCartQuantity(state, payload){
      state.cartQuantity = payload
    },
    setCartTotal(state, payload){
      state.cartTotal = payload
    },
  },
  actions: {
    userSignup({ commit }, { email, password, custInfo }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection("customers").add(custInfo);
          router.push("/home");
        })
        .catch((error) => {
          alert("Error: " + error)
        });
    },

    userLogin({ commit, state }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            router.push("/home");
          }
        )
        .catch((error) => {
          alert("Error: Invalid Login")
        });
    },

    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          router.push("/");
        })
        .catch(() => {
        });
    },

    customerDetails({ commit, state }) {
      var user = firebase.auth().currentUser //this currentUser is not realated to the state, it is apart Firebase/Firestore
      var userEmail = user.email

      db.collection("customers").where("email", "==", userEmail).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){            //using a foreach loop even though there is just one, idk how to do just one
          commit("setUserData", doc.data())
        })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error)
      })
    },

    updateCustomer({ commit }, { newPhNum, newEmail, newPass, newAddress }) {
      var user = firebase.auth().currentUser //this currentUser is not realated to the state, it is apart Firebase/Firestore
      var userEmail = user.email
      var docID = null
      var docRef = null

      db.collection("customers").where("email", "==", userEmail).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){            //using a foreach loop even though there is just one, idk how to do just one
          docID = doc.id
          docRef = db.collection("customers").doc(docID) //have to search by docID if the email is changing
          
          if(newPhNum != null){ //check if not null so it doesnt overwrite in DB with nothing
            docRef.update({
              phNum: newPhNum
            })
          }
          else{
            console.log("error updating phNum: " + newPhNum)
          }
          if(newEmail != null){ //checking each part individualy, probably a better way
            user.updateEmail(newEmail).then(() => { //update the authentication email first
              docRef.update({
                email: newEmail
              })
            }) 
            
          }
          else{
            console.log("error updating email: " + newEmail)
          }
          if(newAddress != null){ //checking each part individualy, probably a better way
            docRef.update({
              address: newAddress
            })
          }
          else{
            console.log("error updating email: " + newEmail)
          }

        })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error)
      })
      if(newPass != null){
        user.updatePassword(newPass)
      }
      else{
        console.log("error updating password")
      }
      alert("Deatils have been updated")
    },

    updateCart({ commit, state }, { newProduct, quantity }){
      var currentCart = state.cartData
      var currentTotal = state.cartTotal
      for(var i=0; quantity>i; i++){
        currentCart.push(newProduct)
        currentTotal += newProduct.stanPrice
      }
      commit("setCartData", currentCart)
      commit("setCartQuantity", state.cartData.length)
      commit("setCartTotal", currentTotal)
    },

    clearCart({commit, state}){
      var currentCart = state.cartData
      var quantity = currentCart.length
      currentCart.splice(0, quantity) // using this makes the cart page update when you clear all
      commit("setCartData" , currentCart)
      commit("setCartQuantity", 0)
      commit("setCartTotal", 0)
    },

    removeCartProduct({commit, state}, {arrayPos}){
      var currentCart = state.cartData
      var price = currentCart[arrayPos].stanPrice
      var currentTotal = state.cartTotal - price
      currentCart.splice(arrayPos, 1)
      commit("setCartData", currentCart)
      commit("setCartQuantity", state.cartData.length)
      commit("setCartTotal", currentTotal)
    }
  },
  getters: {
    getCustomerDetails(state) {
      return state.customerData
    },
    getCartDetails(state){
      return state.cartData
    },
    getCartQuantity(state){
      return state.cartQuantity
    },
    getCartTotal(state){
      return state.cartTotal
    },
  }
});