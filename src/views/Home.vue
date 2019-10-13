<template>
  <div class="Home">
    <LandingNav />
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
                <v-card class="ma-2" hover>
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

                    <v-btn
                      dark
                      color="blue"
                      @click="$router.push({path: '/Product', query: { myprop: product} })"
                    >
                      View
                      <v-icon>remove_red_eye</v-icon>
                    </v-btn>

                    <v-btn color="blue" dark small bottom right fab @click="addCart(product)">
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
                <NavFooter />
              </v-flex>
            </v-layout>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import NavFooter from "../components/NavFooter";
import firebase, { functions, firestore } from "firebase";
import db from "@/main";
import LandingNav from "../components/LandingNav";

export default {
  components: {
    Carousel,
    NavFooter,
    LandingNav
  },
  data() {
    this.$store.dispatch("customerDetails"); // updates store so when called in CustomerAccount the data will be available to render

    return {
      products: this.$store.getters.getDefaultProducts,
      ProductCategory: ["Accessories", "Cables", "EFTPOS Machines", "Parts"],
      productHeader: "Accessories", //default header on homepage
      category: "Accessories" //default collection displayed
    };
  },
  firestore() {
    //Sets the default category to display
    return {
      products: db
        .collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
        .collection(this.category)
    };
  },
  methods: {
    addCart(product) {
      this.$store.dispatch("updateCart", {
        newProduct: product,
        quantity: 1
      });
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
