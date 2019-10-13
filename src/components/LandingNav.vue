<template>
  <span>
    <v-navigation-drawer app v-model="drawer" dark disable-resize-watcher>
      <v-list v-if="!isAuthenticated">
        <v-list-item-content v-for="(item, index) in items" :key="index">
          <v-btn block :to="item.route">{{item.title}}</v-btn>
        </v-list-item-content>
      </v-list>
      <v-list v-if="isAuthenticated">
        <v-list-item-content>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" text>
                Support
                <v-icon right>contact_support</v-icon>
              </v-btn>
            </template>

            <v-list dark>
              <v-list-item>
                <v-list-item-title>Book appointments</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Rent products</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Option 3</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn block>
            <span>Cart</span>
            <v-badge>
              <template v-slot:badge>
                <span v-text="0" />
                <!-- change this later -->
              </template>
              <v-icon small>mdi-cart</v-icon>
            </v-badge>
          </v-btn>
          <v-btn @click="logout" text>
            <span>Log out</span>
            <v-icon right>exit_to_app</v-icon>
          </v-btn>
          <v-btn text to="/CustomerAccount">
            <span>Account Details</span>
            <v-icon right>account_circle</v-icon>
          </v-btn>
        </v-list-item-content>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/" class="display-2 white--text">{{appTitle}}</v-toolbar-title>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(item, index) in items"
          :key="index"
          :to="item.route"
          v-text="item.title"
        />
      </div>
      <div v-if="isAuthenticated" class="hidden-sm-and-down">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn  to="/Support" text>
              Support
              <v-icon right>contact_support</v-icon>
            </v-btn>
          </template>

          <!-- <v-list dark>
            <v-list-item>
              <v-list-item-title>Book appointments</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Rent products</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Option 3</v-list-item-title>
            </v-list-item>
          </v-list> -->
        </v-menu>

        <v-btn text class="ma-2" to="/CartPage">
          Cart
          <v-badge>
            <template v-slot:badge>
              <span :key="quantityKey" v-text="quantity" />
            </template>
            <v-icon right>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
        <v-btn text to="/CustomerAccount">
          My account
          <v-icon right>account_circle</v-icon>
        </v-btn>
        <v-btn @click="logout" text>
          Logout
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
import firebase, { functions } from "firebase";

export default {
  name: "LandingNav",
  data() {
    if(firebase.auth().currentUser != null){
      var authStatus = true
    }
    return {
      appTitle: "Smartware",
      drawer: false,
      items: [
        { title: "About us", route: "/publicAbout" },
        { title: "Contact us", route: "/contactUs" },
        { title: "Sign In", route: "/signin" },
        { title: "Sign up", route: "/signup" },
      ],
      quantity: this.$store.getters.getCartQuantity,
      isAuthenticated: authStatus,
      quantityKey: 0,
    };
  },
  computed: { // maybe able to use this for quantity
    cartQuantity() {
      return this.$store.getters.getCartQuantity;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    },
    forceRerender() {
      this.quantityKey += 1
    },
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>