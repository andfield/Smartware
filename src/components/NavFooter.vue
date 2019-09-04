<template>
  <div class="NavFooter">
    <v-container class="my-12 yellow">
      <v-layout>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="4" class="my-auto">
            <v-img src="../assets/logo.png" aspect-ratio="3" contain></v-img>
          </v-col>
          <v-col cols="2">
            <h1>Company</h1>
            <p>
              <router-link to="/about">About Us</router-link>
            </p>
            <p>
              <router-link to="/T&C">Terms and Conditions</router-link>
            </p>
            <p>
              Security & Privacy
            </p>
          </v-col>
          <v-col cols="2">
            <h1>Support</h1>
            <p>
              FAQ
            </p>
            <p>
              Contact us
            </p>
          </v-col>
          <v-col cols="2" class="mx-n12">
            <h1 class="mx-5">Follow us</h1>
            <v-btn color="yellow" fab depressed href="https://www.facebook.com/" target="_blank">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn color="yellow" fab depressed href="https://www.instagram.com/" target="_blank">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn color="yellow" fab depressed href="https://twitter.com/" target="_blank">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
