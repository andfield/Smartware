
<template>
  <div class="CustomerAccount">
    <v-container>
      <v-layout>
        <v-row>
          <v-container>
            <v-layout>
              <v-flex fluid>
                <h1 class="display-1">Your Cart{{ getUserInfo() }}</h1>
                <div v-bind:CustomerAccount="getUserInfo"></div>
                <v-divider></v-divider>
              </v-flex>
            </v-layout>
          </v-container>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";
import db from "@/main";

// var user = firebase.auth().currentUser
// var userEmail
// var customerRef = db.collection("customers")
// var querry = customerRef.where("email", "==", "user.email")

// console.log(querry.get().doc.data())

// if (user != null){
//   userEmail = user.email
// }
// else{
//   console.log("nobody is logged in... spooky") //just to make sure current user is working
// }


export default {
  components: {
    userData: {}
  },
  methods: {
    getUserInfo() {
      this.$store.dispatch("customerDetails")
      var userData = this.$store.getters.getCustomerDetails
      console.log("CustermoerAccount.vue:  " + userData)
      return userData
    }
  },
  data() {
    return {
      userData: {}
    };
  }
};


</script>