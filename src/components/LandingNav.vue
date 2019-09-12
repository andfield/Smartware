<template>
  <span>
    <v-navigation-drawer app v-model="drawer" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <v-btn class="my-3" block :to="item.route">{{item.title}}</v-btn>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
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
          <v-btn text v-for="(item, index) in items" :key="index" :to="item.route" v-text="item.title"/>
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
  }
};
</script>
<style scoped>
a{
    text-decoration: none;   
}
</style>