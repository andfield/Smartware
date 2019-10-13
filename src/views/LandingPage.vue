<template>
  <span>
    <LandingNav />
    <v-container fluild fill-height class="home-hero" style="max-height: 50vh;">
      <v-layout justify-center align-center column pa-5 elevation-10>
        <div
          style="text-shadow: 3px 3px #000000"
          class="display-4 font-weight-black white--text text-xs-center"
        >Smartware</div>
        <div
          style="text-shadow: 3px 3px #000000"
          class="display-4 font-weight-black white--text text-xs-center mb-3"
        >EFTPOS solutions</div>
        <div
          style="text-shadow: 3px 3px #000000"
          class="display-1 font-weight-bold white--text text-xs-center"
        >Here to simplify your buisness processes.</div>
        <div class="my-10">
          <v-btn dark @click="$vuetify.goTo('#services')">Our Services</v-btn>
        </div>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 md12 sm12 lg10 xl10>
          <Services id="services"></Services>
        </v-flex>
      </v-layout>
    </v-container>

  </span>
</template>

<script>
import LandingNav from "../components/LandingNav";
import LandingAbout from "../components/LandingAbout";
import Services from "../components/Services";

export default {
  components: {
    LandingNav,
    LandingAbout,
    Services
  },
  name: "LandingPage"
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