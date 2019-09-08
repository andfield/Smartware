<template>
  <v-app-bar app hide-on-scroll>
    <v-btn text large to="/home">
      <v-toolbar-title class="headline text-uppercase">
        <span>Smart</span>
        <span class="font-weight-light">ware</span>
      </v-toolbar-title>
    </v-btn>
    <v-divider class="mx-4" vertical></v-divider>

    <v-spacer></v-spacer>

    <v-btn fab depressed class="ma-2">
      <v-badge>
        <template v-slot:badge>
          <span v-text="cartNo" />
        </template>
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
    <v-btn fab depressed to="/T&C" class="ma-2">
      <v-icon>gavel</v-icon>
    </v-btn>
    <v-btn @click="logout" fab depressed>
      <v-icon>exit_to_app</v-icon>
    </v-btn>
    <v-btn fab depressed to="/CustomerAccount">
      <v-icon>account_circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import firebase from "firebase";
import { watch } from "fs";

export default {
  data: () => ({
    show: true,
    cartNo: 0
  }),
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
