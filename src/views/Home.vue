<template>
  <div class="Home">
    <LandingNav />
    <v-btn @click="getAll()"/>
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 md12 sm12 lg10 xl10>
          <v-row>
            <Carousel />
          </v-row>

          <v-row>
            <v-tabs class="mt-5" background-color="transparent" fixed-tabs slider-color="grey">
              <v-tab
                v-for="i in ProductCategory"
                :key="i"
                @click="setCategory(i); productHeader = i"
              >{{ i }}</v-tab>
            </v-tabs>
          </v-row>

          <v-row>
            <h1 v-text="productHeader" />
          </v-row>

          <v-divider />

          <v-row>
            <v-layout row wrap class="justify-center">
              <v-flex xs11 sm6 md6 lg6 xl4 v-for="product in products" :key="product.name">
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
          </v-row>

          <v-row>
            <v-layout class="mt-5">
              <v-flex>
                <NavFooter class="hidden-sm-and-down" />
              </v-flex>
            </v-layout>
          </v-row>
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
      productHeader: "All Products",
      category: "Parts"
    };
  },
  methods: {
    test() {
      c;
    },
    setCategory(selected) {
      var productList = [];

      db.collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
        .collection(selected)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            productList.push(doc.data());
          });
        })
        .catch(function(error) {
          console.log("error getting documents: ", error);
        });
      this.products = productList;
    }

    // getProducts(category) {
    //   products =  db
    //     .collection("ProductCategory")
    //     .doc("vQzSkBnxzbu1Tnqn4iv2")
    //     .collection(category);

    // },
  }
};
</script>
