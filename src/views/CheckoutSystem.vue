<template>
  <div class="Checkout">
    <v-container>
      <LandingNav />
      <v-layout class="justify-center">
        <v-flex xs12 md12 sm12 lg10 xl10>
          <v-row>
            <v-layout row wrap class="justify-center">
              <v-flex class="mx-10 my-5" xs12 sm12 md8 lg7 xl7>
                <v-stepper v-model="e1">
                  <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">Shipping Info</v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">Payment Info</v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">Confirm Payment</v-stepper-step>
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <v-card>
                        <v-toolbar dark color="primary">
                          <v-toolbar-title>Shipping Infomation</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-text-field label="First Name" v-model="fName" outlined />
                          <v-text-field label="Last Name" v-model="lName" outlined />
                          <v-text-field label="Company (Optional)" v-model="companyName" outlined />
                          <v-text-field label="Address" v-model="address" outlined />
                          <v-text-field label="Apt. (Optional)" v-model="apt" outlined />
                        </v-card-text>
                        <v-card-actions class="mx-3">
                          <v-btn color="primary" to="/CartPage">
                            <v-icon left>arrow_back</v-icon>
                            <span>Back</span>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn color="primary" @click="shippingAddress()">
                            <span>Next</span>
                            <v-icon left>arrow_forward</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <v-card>
                        <v-toolbar dark color="primary">
                          <v-toolbar-title>Payment Information</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-text-field label="Card number" v-model="cardNo" outlined />
                          <v-text-field label="Name on Card" v-model="NameOnCard" outlined />
                          <v-text-field label="MM/YY" v-model="expDate" outlined />
                          <v-text-field label="CVV" v-model="cvv" outlined />
                        </v-card-text>
                        <v-card-actions class="mx-3">
                          <v-btn color="primary" to="/CartPage">
                            <v-icon left>arrow_back</v-icon>
                            <span>Back</span>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn color="primary" @click="finalizeOrder()">
                            <span>Continue</span>
                            <v-icon left>arrow_forward</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <v-card>
                        <v-card-text>
                          <v-row>
                            <v-icon x-large class="mx-3" color="success">check_circle</v-icon>
                            <h2 class="black--text mx-2 mt-2">Your Order has been placed</h2>
                          </v-row>
                          <v-divider class="my-2" />
                          <v-row>
                            <h3 class="mx-4 mt-2">Your order is confirmed</h3>
                          </v-row>
                          <v-row>
                            <p class="mx-4 mt-3">
                              We've accepted your order and we're getting it ready.
                              <br />It will be shipped as soon as possible
                            </p>
                          </v-row>
                          <v-divider class="my-2" />

                          <v-row>
                            <h2 class="black--text mx-4 mt-2">Customer Information</h2>
                          </v-row>
                          <v-row>
                            <v-col cols="6">
                              <h3 class="black--text mx-2 mt-2">Shipping Address</h3>
                              <p class="mx-2">
                                {{fName + " " + lName}}
                                <br />
                                {{address}}
                              </p>
                            </v-col>
                            <v-col cols="6">
                              <h3 class="black--text mx-2 mt-2">Payment Method</h3>
                              <p class="mx-2">{{cardNo}}</p>
                            </v-col>
                          </v-row>
                          <v-divider class="my-2" />
                        </v-card-text>
                      </v-card>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-flex>

              <v-flex class="mx-10 my-5" xs12 md4 lg4 xl3>
                <v-card hover color="#e6e1e1">
                  <v-card-title class="px-5 font-weight-bold">Order Summary</v-card-title>
                  <v-card-text class="px-5 black--text">
                    <v-row wrap>
                      <v-col cols="4">
                        <h3>Subtotal:</h3>
                      </v-col>
                      <v-col cols="4" />
                      <v-col cols="4">
                        <h3>${{subtotal}}</h3>
                      </v-col>
                    </v-row>

                    <v-row wrap>
                      <v-col cols="4">
                        <h3>Shipping:</h3>
                      </v-col>
                      <v-col cols="4" />
                      <v-col cols="4">
                        <h3>-</h3>
                      </v-col>
                    </v-row>

                    <v-row wrap>
                      <v-col cols="4">
                        <h3>GST(incl.):</h3>
                      </v-col>
                      <v-col cols="4" />
                      <v-col cols="4">
                        <h3>${{parseFloat(subtotal*0.15).toFixed(2)}}</h3>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>

                    <v-row wrap>
                      <v-col cols="4">
                        <h3>Total:</h3>
                      </v-col>
                      <v-col cols="4" />
                      <v-col cols="4">
                        <h3>${{parseFloat(subtotal) + parseFloat(parseFloat(subtotal*0.15).toFixed(3))}}</h3>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-row>

          <v-footer absolute>
            <NavFooter />
          </v-footer>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import NavFooter from "../components/NavFooter";
import LandingNav from "../components/LandingNav";
import router from "@/router";

export default {
  components: {
    NavFooter,
    LandingNav
  },
  name: "CheckoutSystem",

  data() {
    return {
      fName: "",
      lName: "",
      companyName: "",
      address: "",
      apt: "",
      subtotal: this.$store.getters.getCartTotal,
      cardNo: "",
      NameOnCard: "",
      expDate: "",
      cvv: "",
      e1: 0
    };
  },
  methods: {
    shippingAddress() {
      if (this.fName == "") {
        alert("Please enter your first name");
      } else if (this.lName == "") {
        alert("Please enter your last name");
      } else if (this.address == "") {
        alert("Please enter an address");
      } else {
        this.$store.dispatch("shippingInfo", {
          fName: this.fName,
          lName: this.lName,
          companyName: this.companyName,
          address: this.address,
          apt: this.apt
        });
        this.e1 = 2;
      }
    },
    finalizeOrder() {
      if (this.cardNo == "") {
        alert("Please Enter Card Details");
      } else if (this.NameOnCard == "") {
        alert("Please Enter name on card");
      } else if (this.expDate == "") {
        alert("Please Enter Valid Date");
      } else if (this.cvv == "") {
        alert("Please Enter CVV");
      } else {
        
        this.$store.dispatch("createOrder");
        this.$store.dispatch("clearCart")
        this.e1 = 3;
      }
    }
  }
};
</script>

