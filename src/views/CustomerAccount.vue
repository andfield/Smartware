
<template>
  <div class="CustomerAccount">
    <v-container>
      <v-layout>
        <v-row>
          <AppToolbar />
        </v-row>
        <v-row>
          <v-container>
            <v-layout>
              <v-flex fluid>
                <h1 class="display-1">Your Cart</h1>
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
import AppToolbar from "../components/AppToolbar";
import firebase, { functions } from "firebase";
import FBInt from "@/main"
import db from "@/main";

var user = firebase.auth().currentUser
var userEmail
var customerRef = db.collection("customers")
var querry = customerRef.where("email", "==", "user.email")

console.log(querry.get().doc.data())

if (user != null){
  userEmail = user.email
}
else{
  console.log("nobody is logged in... spooky") //just to make sure current user is working
}

export default {
  components: {
    AppToolbar
  },
  methods: {
    getUserInfo:function(){
      var user = firebase.auth().currentUser
      var userEmail
      var customerRef = db.collection("customers")
      var querry = customerRef.where("email", "==", "user.email")

      console.log(querry.get().doc.data())

      if (user != null){
        userEmail = user.email
      }
      else{
        console.log("nobody is logged in... spooky") //just to make sure current user is working
      }
    }
  }
};


</script>