<template>
  <div class="Home">
    <LandingNav />
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 lg10 xl10>
          <Carousel />
          <v-app-bar>
            <span v-for="i in ProductCategory" :key="i">
              <v-btn text v-text="i" @click="setCategory(i)"/>
            </span>
          </v-app-bar>
            <!-- <productlist v-bind:products="products" /> -->
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="justify-center">
      <v-layout row wrap class="px-5">
        <v-flex class="justify-center">
          <h1>Printers</h1>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mx-5">
        <v-flex xs10 md4 lg2 xl2 v-for="product in products" :key="product.name">
          <v-card
            class="ma-2"
            hover
            @click="$router.push({path: '/Product', query: { myprop: product} })"
          >
            <v-img
              :src="product.imgURL"
              class="black--text"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title class="fill-height align-end" v-text="product.name"></v-card-title>
            </v-img>

            <v-card-text>
              <span v-text="product.description" />
            </v-card-text>

            <v-card-actions>
              <v-icon>attach_money</v-icon>
              <span v-text="product.stanPrice" />
              <v-spacer />
              <v-btn color="blue" dark small absolute bottom right fab>
                <v-icon>add_shopping_cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
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
      
      category: "Parts"
    };
  },
  // firestore() {
  //   return {
  //     products: db
  //       .collection("ProductCategory")
  //       .doc("vQzSkBnxzbu1Tnqn4iv2")
  //       .collection(this.category)
  //   };
  // },
  methods: {
    test(){
      c
    },
    setCategory(selected){
      var productList = []

      db.collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
        .collection(selected).get().then(function(querySnapshot){
          querySnapshot.forEach(function(doc) {
            productList.push(doc.data())
          })
        })
        .catch(function(error) {
          console.log("error getting documents: ", error)
        })
      console.log(selected)
      console.log(productList)
      console.log(this.products)
      this.products = productList
      console.log(this.products)
    },

    // getProducts(category) {
    //   products =  db
    //     .collection("ProductCategory")
    //     .doc("vQzSkBnxzbu1Tnqn4iv2")
    //     .collection(category);
      
    // },
  }
};
</script>
