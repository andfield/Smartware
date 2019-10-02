<template>
  <v-container fluild fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card hover>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text @keypress.enter="login">

            <h2> Shipping Address </h2>
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
            <v-btn color="primary" to="/Checkout/PaymentInfo">
              <span>Next</span>
              <v-icon left>arrow_forward</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      fName: "",
      lName: "",
      companyName: "",
      address: "",
      apt: "",
    };
  },
  methods: {
    // login() { //something similar
    //   this.$store.dispatch("userLogin", {
    //     email: this.email,
    //     password: this.password
    //   });
    // }
  }
};
</script>