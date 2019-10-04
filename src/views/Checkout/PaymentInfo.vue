<template>
  <v-container fluild fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card hover>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Payment Infomation(not implemented yet)</v-toolbar-title>
          </v-toolbar>
          <v-card-text @keypress.enter="login">

            <h2> Payment Details </h2>
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
            <v-btn color="primary" to="/Checkout/FinaliseOrder">
              <span>Skip(for now)</span>
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
    // shippingAddress() {
    //   if(this.fName == ""){
    //     alert("Please enter your first name")
    //   } else if(this.lName == ""){
    //     alert("Please enter your last name")
    //   } else if(this.address == ""){
    //     alert("Please enter an address")
    //   } else{
    //     this.$store.dispatch("shippingInfo", {
    //       fName: this.fName,
    //       lName: this.lName,
    //       companyName: this.companyName,
    //       address: this.address,
    //       apt: this.apt,
    //     });
    //     console.log(this.$store.getters.getShippingInfo)
    //   }
    // }
  }
};
</script>