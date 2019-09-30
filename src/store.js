import Vue from "vue";
import Vuex from "vuex";
import firebase, { functions } from "firebase";
import db from "@/main"
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentuser: null,
    isAuthenticated: true,
    customerData: {
      email: null,
      fName: null,
      lName: null,
      phNum: null
    },
    cartData: [],
    cartQuantity: null,
  },
  mutations: {
    setUser(state, payload) {
      state.currentuser = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
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
    }
  },
  actions: {
    userSignup({ commit }, { email, password, custInfo }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          // commit("setIsAuthenticated", true);
          console.log(isAuthenticated())
          console.log(custInfo)
          db.collection("customers").add(custInfo);
          router.push("/home");
        })
        .catch(() => {
          commit("setUser", null);
          // commit("setIsAuthenticated", false);
          router.push("/");
        });
    },

    userLogin({ commit, state }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          user => {
            commit("setUser", user);
            commit('setIsAuthenticated' , true);
            console.log("userLogin - Authentication state: " + state.isAuthenticated);
            router.push("/home");
          }
        )
        .catch(() => {
          console.log("userLogin error")
          commit("setUser", null);
          // commit("setIsAuthenticated", false);
        });
    },

    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          // commit("setIsAuthenticated", false);
        });
    },

    customerDetails({ commit, state }) { // i think this is redundant now, can probably just delete, will check later
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

    cartDetails(){
      //todo ???? probably dont need this
    },

    updateCart({ commit, state }, { newProduct, quantity }){
      var currentCart = state.cartData
      for(var i=quantity; i>0; i--){
        currentCart.push(newProduct)
        console.log("loop counter: " + i)
      }
      commit("setCartData", currentCart)
      commit("setCartQuantity", state.cartData.length)
      console.log("cart quantity: " + state.cartQuantity)
      console.log("cart data in [0]: " + state.cartData[0].name)
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated 
      //state.user !== null && state.user !== undefined;
    },
    getCustomerDetails(state) {
      return state.customerData
    },
    getCartDetails(state){
      return state.cartData
    },
    getCartQuantity(state){
      return state.cartQuantity
    }
  }
});