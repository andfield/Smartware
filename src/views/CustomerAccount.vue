
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
                    <h3>Name: {{fName + " " + lName}}</h3>
                  </v-card-actions>
                  <v-card-actions>
                    <h3>Email: {{email}}</h3>
                    <v-text-field value= "placeholder" v-model="newEmail" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <h3>Phone No: {{phNum}}</h3>
                    <v-text-field value="placehodler phNumber" v-model="newPhNum" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <h3>Billing Address: {{address}}</h3>
                    <v-text-field value="Address From Database" v-model="newAddress" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <h3>Password: (not shown)</h3>
                    <v-text-field value="Password From Database" v-model="newPass" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <h3>Confirm Password:</h3>
                    <v-text-field value="Password From Database" v-model="newPassCon" :disabled="disable" class="mx-5" />
                  </v-card-actions>

                  <v-card-actions>
                    <v-btn v-if="!disable" text @click="updateDetails">Change</v-btn>
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
                        <td>{{order.orderPrice}}</td>
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



export default {
  components: {
    LandingNav
  },
  methods: {
    getUserInfo() { // pretty sure i can delete this wil check later tho
      this.$store.dispatch("customerDetails")
      var userData = this.$store.getters.getCustomerDetails
      return userData
    },
    updateDetails(){
      if(this.newpass == !null){ // Cant compare .length if its null
        this.passLength = this.newPass.length
      }

      if(this.newPass == this.newPassCon){
        if (this.passLength >= 8 && this.newPass != null) {
            this.$store.dispatch("updateCustomer", {
            newPhNum: this.newPhNum,
            newEmail: this.newEmail,
            newPass: this.newPass,
            newAddress: this.newAddress
          });
        }
        else {
          alert("The password is too short")
        }
      }
      else{
        alert("The password do not match")
      }
    }
  },
  data() {
    var userData = this.$store.getters.getCustomerDetails
    var orderList = []

    db.collection("Orders").where("custID", "==", this.$store.getters.getCustID).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){ // it works but need to get rid of foreach
          orderList.push(doc.id)
          orderList.push(doc.data())
        })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error)
      })
    return {
      userData: {},
      disable: true,
      userOrders: orderList,
      newPhNum: null,
      newEmail: null,
      newPass: null,
      newPassCon: null,
      newAddress: null,
      fName: userData.fName,
      lName: userData.lName,
      email: userData.email,
      phNum: userData.phNum,
      address: userData.address, 
      passLength: 0
    };
    $forceUpdate()
  },
};
</script>