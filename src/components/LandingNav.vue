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
          <v-btn block>
            <span>Cart</span>
            <v-badge>
              <template v-slot:badge>
                <span v-text="cartNo" />
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
      <div v-if="isAuthenticated">
        <v-btn fab depressed class="ma-2">
          <v-badge>
            <template v-slot:badge>
              <span v-text="cartNo" />
            </template>
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
        <v-btn @click="logout" text>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
        <v-btn text to="/CustomerAccount">
          <v-icon>account_circle</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "LandingNav",
  data() {
    return {
      appTitle: "Smartware",
      drawer: false,
      items: [
        { title: "About us", route: "/about" },
        { title: "Contact us", route: "/contactUs" },
        { title: "Sign In", route: "/signin" },
        { title: "Sign up", route: "/signup" }
      ]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>