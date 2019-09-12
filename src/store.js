import Vue from "vue";
import Vuex from "vuex";
import firebase, { functions } from "firebase";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentuser: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, payload) {
      state.currentuser = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
  }
  },
  actions: {
    userSignup({ commit }, { email, password, custData }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          firebase
            .firestore()
            .collection("customers")
            .add(custData);
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
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated 
      //state.user !== null && state.user !== undefined;
    }
  }
});
