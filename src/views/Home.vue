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

    <v-container>
      <v-layout row wrap class="px-5">
        <v-flex class="justify-center">
          <h1>Printers</h1>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap class="mx-5">
        <v-flex xs10 md4 lg2 xl2 v-for="product in products" :key="product.name">
          <v-card class="ma-2" hover to="/Product">
            <v-img
              :src="product.imgURL"
              lazy-src
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
import AppToolbar from "../components/AppToolbar";
import AppFooter from "../components/AppFooter";
import Carousel from "../components/Carousel";
import NavFooter from "../components/NavFooter";
import firebase, { functions, firestore } from "firebase";
import db from "@/main";

var exName = "new printer";

export default {
  components: {
    AppToolbar,
    AppFooter,
    Carousel,
    NavFooter
  },
  data() {
    return{
      products: {},
      ProductCategory: {}
    }
    
  },
  firestore(){
    return{
      products:  db.collection("ProductCategory")
      .doc("pcQhnNHvSg1L3LYyTFdX")
      .collection("EftposMachines"),
    }
  },
};
</script>
