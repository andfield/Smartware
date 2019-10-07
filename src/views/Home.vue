<template>
  <div class="Home">
    <LandingNav />
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 lg10 xl10>
          <Carousel />
          <v-app-bar>
            <span v-for="i in ProductCategory" :key="i">
              <v-btn text v-text="i" @click="category = i"/>
            </span>
          </v-app-bar>
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
    this.$store.dispatch("customerDetails"); // updates store so when called in CustomerAccount the data will be avaible to render
    return {
      products: {},
      ProductCategory: ["Accessories", "Cables", "EFTPOS Machines", "Parts"],
      
      category: ""
    };
  },
  firestore() {
    return {
      products: db
        .collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
        .collection(this.category)
    };
  },
  // methods: {
  //   getProducts(category) {
  //     products =  db
  //       .collection("ProductCategory")
  //       .doc("vQzSkBnxzbu1Tnqn4iv2")
  //       .collection(category);
      
  //   }
  // }
};
</script>
