
<template>
  <span class="CustomerAccount">
    <LandingNav />
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 md12 sm12 lg10 xl10>
          <v-row>
            <v-layout row wrap class="justify-center">
              <v-flex class="mx-10 my-10" xs12 sm12 md8 lg7 xl7>
                <v-card outlined>
                  <v-card-title>
                    <v-toolbar dark>
                      <v-toolbar-title class="display-2">My account</v-toolbar-title>
                      <v-spacer />

                      <v-dialog v-model="dialog" max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn text v-on="on">Edit details</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Edit Details</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field label="New Phone No." v-model="newPhNum"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field label="New Email" v-model="newEmail"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field label="New Address" v-model="newAddress"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field label="New Password*" v-model="newPass"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    label="Confirm Password*"
                                    v-model="newPassCon"
                                    type="password"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn color="blue darken-1" text @click="dialog = false">cancel</v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click=" updateDetails(); dialog = false"
                            >Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </v-card-title>

                  <v-card-text>
                    <v-row>
                      <v-col cols="5">
                        <v-row>
                          <h2 class="black--text mx-4 mt-3">Name:</h2>
                          <v-textarea class="black--text mx-4" v-text="fName +space+lName" />
                        </v-row>
                      </v-col>
                      <v-col>
                        <v-divider vertical />
                      </v-col>
                      <v-col cols="6">
                        <v-row>
                          <h2 class="black--text mx-4 mt-3">Email:</h2>
                          <v-textarea class="black--text mx-4" v-text="email" />
                        </v-row>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-divider />
                    </v-row>

                    <v-row>
                      <v-col cols="5">
                        <v-row>
                          <h2 class="black--text mx-4 mt-5">Phone No:</h2>
                          <v-textarea class="black--text mx-4 mt-2" v-text="phNum" />
                        </v-row>
                      </v-col>

                      <v-col>
                        <v-divider vertical />
                      </v-col>

                      <v-col cols="6">
                        <v-row>
                          <h2 class="black--text mx-4 mt-5">Billing Address:</h2>
                          <v-textarea no-resize v-text="address" />
                        </v-row>
                      </v-col>
                    </v-row>

                    <!-- <v-text-field
                      value="placeholder"
                      v-model="newEmail"
                      :disabled="disable"
                      class="mx-5"
                    />-->

                    <!-- <v-text-field
                      value="placehodler phNumber"
                      v-model="newPhNum"
                      :disabled="disable"
                      class="mx-5"
                    />-->

                    <!-- <v-text-field
                      value="Address From Database"
                      v-model="newAddress"
                      :disabled="disable"
                      class="mx-5"
                    />-->
                    <!-- <v-text-field
                      value="Password From Database"
                      v-model="newPass"
                      :disabled="disable"
                      class="mx-5"
                    />

                    <v-text-field
                      value="Password From Database"
                      v-model="newPassCon"
                      :disabled="disable"
                      class="mx-5"
                    />-->

                    <v-btn v-if="!disable" text @click="updateDetails">Change</v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-row>

          <v-row>
            <v-layout row wrap class="justify-center mb-10">
              <v-flex class="mx-10 my-5" xs12 sm12 md8 lg7 xl7>
                <v-card outlined>
                  <v-card-title>
                    <v-toolbar dark>
                      <v-toolbar-title class="display-2">My Orders</v-toolbar-title>
                    </v-toolbar>
                  </v-card-title>
                  <v-card-text>
                    <v-simple-table dense height="300px">
                      <thead absolute>
                        <th class="text-left">Date</th>
                        <th>Status</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        <tr v-for="order in userOrders" :Key="order.name">
                          <td>{{order.date}}</td>
                          <td>{{order.status}}</td>
                          <td>{{order.orderPrice}}</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-row>

          <NavFooter />
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import firebase, { functions } from "firebase";
import db from "@/main";
import LandingNav from "../components/LandingNav";
import NavFooter from "../components/NavFooter";

export default {
  components: {
    LandingNav,
    NavFooter
  },
  methods: {
    getUserInfo() {
      // pretty sure i can delete this wil check later tho
      this.$store.dispatch("customerDetails");
      var userData = this.$store.getters.getCustomerDetails;
      return userData;
    },
    updateDetails(){
      if(this.newPass == null){ // Cant compare .length if its null
        console.log("null password")
        this.$store.dispatch("updateCustomer", {
              newPhNum: this.newPhNum,
              newEmail: this.newEmail,
              newAddress: this.newAddress
            });
      }
      else{
        var passLength = this.newPass
      }

      if(this.newPass == this.newPassCon){
        if (passLength >= 8) {
            this.$store.dispatch("updateCustomer", {
              newPhNum: this.newPhNum,
              newEmail: this.newEmail,
              newPass: this.newPass,
              newAddress: this.newAddress
            });
        }
        else if(this.newPass == null) {
          console.log("null password")
        }
      } else {
        alert("The password do not match");
      }
    }
  },
  data() {
    var userData = this.$store.getters.getCustomerDetails;
    var orderList = [];

    db.collection("Orders")
      .where("custID", "==", this.$store.getters.getCustID)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){ // it works but need to get rid of foreach
          orderList.push(doc.id)
          orderList.push(doc.data())
        })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
    return {
      dialog: false,
      space: " ",
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
    $forceUpdate();
  }
};
</script>