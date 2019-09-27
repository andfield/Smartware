<template>
  <div class="Home">
    <LandingNav />
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 lg10 xl10>
          <Carousel />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 lg10 xl10>
           <productlist v-bind:products="products" />
        </v-flex>
      </v-layout>
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
import AppFooter from "../components/AppFooter";
import Carousel from "../components/Carousel";
import NavFooter from "../components/NavFooter";
import firebase, { functions, firestore } from "firebase";
import db from "@/main";
import productlist from "../components/productlist.vue";
import LandingNav from "../components/LandingNav";

export default {
  components: {
    AppFooter,
    Carousel,
    NavFooter,
    productlist,
    LandingNav
  },
  data() {
    return {
      products: {},
      ProductCategory: {}
    };
  },
  firestore() {
    return {
      products: db
        .collection("ProductCategory")
        .doc("pcQhnNHvSg1L3LYyTFdX")
        .collection("EftposMachines")
    };
  }
};
</script>
