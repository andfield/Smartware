<template>
  <div class="Home">
    <nav>
      <AppToolbar />
    </nav>

    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 lg10 xl10>
          <Carousel />
        </v-flex>
      </v-layout>
    </v-container>

    <productlist v-bind:products="products"/>
    
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
import firebase, { functions, firestore } from "firebase";
import db from "@/main";
import productlist from '../components/productlist.vue'

export default {
  components: {
    AppToolbar,
    AppFooter,
    Carousel,
    NavFooter,
    productlist
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
