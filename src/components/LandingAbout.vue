<template>
  <v-container fluild fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5 elevation-10>
      <div style= 'text-shadow: 3px 3px #000000' class="display-4 font-weight-black white--text text-xs-center">Smartware</div>
      <div style= 'text-shadow: 3px 3px #000000' class="display-4 font-weight-black white--text text-xs-center mb-3">EFTPOS solutions</div>
      <div style= 'text-shadow: 3px 3px #000000'
        class="display-1 font-weight-bold white--text text-xs-center"
      >Here to simplify your buisness processes.</div>
      <v-btn></v-btn>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "LandingAbout"
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