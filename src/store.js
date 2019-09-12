import Vue from "vue";
import Vuex from "vuex";
import firebase, { functions } from "firebase";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentuser: null,
    isAuthenticated: false,
    allCategories: [],
    cartTotal: 0.0,
    cartProducts: []
  },
  mutatuions: {
    setUser(state, payload) {
      state.currentuser = payload;
    },
    setIsAuthenticated(state, payload) {
      state.setIsAuthenticated = payload;
    },
    setAllCategories(state, payload) {},
    setCartTotal(state, payload) {},
    setCartProducts(state, payload) {}
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

    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          user => {
            commit("setUser", user);
            commit("setIsAuthenticated", true);
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
      return state.user !== null && state.user !== undefined;
    }
  }
});
