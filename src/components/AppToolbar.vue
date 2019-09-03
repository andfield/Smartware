<template>
  <v-app-bar app hide-on-scroll>
    <v-btn text to="/home">
      <v-toolbar-title class="headline text-uppercase">
        <span>Smart</span>
        <span class="font-weight-light">ware</span>
      </v-toolbar-title>
    </v-btn>
    <v-divider class="mx-4" vertical></v-divider>

    <v-spacer></v-spacer>

    <v-btn fab depressed>
      <v-icon>mdi-cart</v-icon>
      <span>(0)</span>
    </v-btn>
    <v-btn fab depressed to="/about">
      <v-icon>mdi-information</v-icon>
    </v-btn>
    <v-btn fab depressed to="/T&C">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { watch } from "fs";
export default {
  data: {
    show: true
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
