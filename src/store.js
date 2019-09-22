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
    }
      
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
    }
  },
  actions: {
    userSignup({ commit }, { email, password, custInfo }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          console.log(custInfo)
          db.collection("customers").add(custInfo);
          router.push("/home");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
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
            console.log(state.isAuthenticated);
            router.push("/home");
          }
        )
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
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
          commit("setIsAuthenticated", false);
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

    updateCustomer({ commit }, { newPhNum, newEmail, }) {
      var user = firebase.auth().currentUser //this currentUser is not realated to the state, it is apart Firebase/Firestore
      var userEmail = user.email
      var docID = null
      var docRef = null

      db.collection("customers").where("email", "==", userEmail).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){            //using a foreach loop even though there is just one, idk how to do just one
          docID = doc.id
          docRef = db.collection("customers").doc(docID) //have to search by docID if the email is changing
          docRef.update({
            phNum: newPhNum,
            email: newEmail,
          })
        })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error)
      })

      user.updateEmail(newEmail) //updates the authenticated email
      // alert('Details have been updated')
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated 
      //state.user !== null && state.user !== undefined;
    },
    getCustomerDetails(state) {
      return state.customerData
    }
  }
});