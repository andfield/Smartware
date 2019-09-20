
<template>
  <span class="CustomerAccount">
    <LandingNav />
    <v-container>
      <v-layout>
        <v-flex fluid>
          <v-row>
            <v-col cols="2" />
            <v-col cols="8">
              <v-flex class="ma-5">
                <h1 class="display-1 mb-3">My account</h1>
                <v-card outlined>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn small text @click="disable = !disable">Edit details</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <h3>Email:</h3>
                    <v-text-field value="Email From Database" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <h3>Phone No:</h3>
                    <v-text-field value="Phone No. From Database" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <h3>Billing Address:</h3>
                    <v-text-field value="Address From Database" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <h3>Password:</h3>
                    <v-text-field value="Password From Database" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <v-btn v-if="!disable" text >Change</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-col>
            <v-col cols="2" />
          </v-row>

          <v-row>
            <v-col cols="2" />
            <v-col cols="8">
              <v-flex class="ma-5">
                <h1 class="display-1 mb-2">My orders</h1>
                <v-card outlined>
                  <v-simple-table dense dark height="100px">
                    <thead>
                      <th class="text-left">Order</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                    </thead>
                    <tbody>
                      <tr v-for="order in userOrders" :Key="order.name">
                        <td>{{order.name}}</td>
                        <td>{{order.date}}</td>
                        <td>{{order.status}}</td>
                        <td>{{order.total}}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card>
              </v-flex>
            </v-col>
            <v-col cols="2" />
          </v-row>

          <v-row>

          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import firebase, { functions } from "firebase";
import db from "@/main";
import LandingNav from "../components/LandingNav";


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
    LandingNav
  },
  methods: {
    // getUserInfo() {
    //   this.$store.dispatch("customerDetails")
    //   var userData = this.$store.getters.getCustomerDetails
    //   console.log("CustermoerAccount.vue:  " + userData)
    //   return userData
    // }
  },
  data() {
    return {
      userData: {},
      disable: true,
      userOrders: {},
    };
  }
};
</script>