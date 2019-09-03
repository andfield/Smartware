<template>
  <div class="TandC">
    <AppToolbar />
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 lg10 xl10>
          <Carousel />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="grey lighten-5 px-5">
      <h1>Terms and Conditions</h1>
      <v-card min-height="100%">
        <v-card-text>
          <p>Smartware is not for Kids.</p>
          <p>Github sucks.</p>
          <p>Please dont hack us.</p>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 lg10 xl10>
          <NavFooter />
        </v-flex>
      </v-layout>
    </v-container>
    <AppFooter />
  </div>
</template>

<script>
import AppToolbar from "../components/AppToolbar";
import AppFooter from "../components/AppFooter";
import Carousel from "../components/Carousel";
import NavFooter from "../components/NavFooter";

export default {
  components: {
    AppToolbar,
    AppFooter,
    Carousel,
    NavFooter
  }
};
</script>