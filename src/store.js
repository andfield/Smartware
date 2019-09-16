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
      console.log("mutation payload: " + payload)
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
          console.log(doc.id, " => ", doc.data())
          commit("setUserData", doc.data())
          console.log("progress" + state.customerData.email)
        })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error)
      })
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