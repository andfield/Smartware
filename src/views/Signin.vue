<template>
  <v-container fluild fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card hover>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text @keypress.enter="login">
            <v-text-field label="Email" v-model="email" outlined />

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
            <router-link to="/signup">Dont have an Account?</router-link>
          </v-card-text>
          <v-card-actions class="mx-3">
            <v-btn color="primary" to="/">
              <v-icon left>arrow_back</v-icon>
              <span>Back</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">
              <span>Login</span>
              <v-icon left>person</v-icon>
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
      show: false,
      email: "",
      password: "",

      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("userLogin", {
        email: this.email,
        password: this.password
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