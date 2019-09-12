<template>
  <v-container fluild fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign Up</v-toolbar-title>
          </v-toolbar>
          <v-card-text @keypress.enter="signUp">
            <v-text-field label="First Name" v-model="fname" outlined />

            <v-text-field label="Last Name" v-model="lname" outlined />

            <v-text-field label="Email" v-model="email" outlined />

            <v-text-field label="Phone No" v-model="pnum" outlined />

            <v-text-field
              v-model="password"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="password"
              label="password"
              hint="At least 8 characters"
              counter
              outlined
              @click:append="show = !show"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/">back</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="signUp">SignUp</v-btn>
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
      show: false,
      email: "",
      password: "",
      fname: "",
      lname: "",
      pnum: "",

      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    signUp() {
      var custData = {
        email: this.email,
        fName: this.fname,
        lName: this.lname,
        phNum: this.pnum
      };
      this.$store.dispatch("userSignup", {
        email: this.email,
        password: this.password,
        custData: this.custData
      });
    }
  }
};
</script>

<style scoped>
.home-hero {
  background: url("../assets/img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>