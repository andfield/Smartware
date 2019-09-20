<template>
  <span class="NavFooter">
    <v-card outlined>
      <v-container>
        <v-layout row wrap>
          <v-flex fluid>
            <v-row>
              <v-col cols="4">
                <v-img src="../assets/logo.png" aspect-ratio="3" contain></v-img>
              </v-col>
              <v-col cols="3">
                <h1>Company</h1>
                <p>
                  <router-link to="/about">About Us</router-link>
                </p>
                <p>
                  <router-link to="/T&C">Terms and Conditions</router-link>
                </p>
                <p>Security & Privacy</p>
              </v-col>
              <v-col cols="2">
                <h1>Support</h1>
                <p>FAQ</p>
                <p>Contact us</p>
              </v-col>
              
              <v-col cols="3">
                <h1 >Follow us</h1>
                <v-btn
                  color="yellow"
                  fab
                  depressed
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  color="yellow"
                  fab
                  depressed
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn color="yellow" fab depressed href="https://twitter.com/" target="_blank">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </span>
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
