import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false
Vue.use(firestorePlugin)

var config = {
  apiKey: "AIzaSyBpyAw6R0OYtsBZEXk-yCM7awcP9VvL2S8",
  authDomain: "smartware-website-project.firebaseapp.com",
  databaseURL: "https://smartware-website-project.firebaseio.com",
  projectId: "smartware-website-project",
  storageBucket: "smartware-website-project.appspot.com",
  messagingSenderId: "218476766597",
  appId: "1:218476766597:web:f1f617802dd2a710"
};

firebase.initializeApp(config);
const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });  this isnt needed anymore

export default db;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
