<template>
  <div class="Product">
    <v-container>
      <v-layout>
        <v-flex xs12 lg12 xl12 md12>
          <v-row>
            Add nav
          </v-row>

          <v-row>
            <v-container>
              <v-layout class="mx-2 my-5">
                <v-flex fluid>
                  <h1 class="display-1" v-text="myprop.name" />
                  <v-divider></v-divider>
                </v-flex>
              </v-layout>
            </v-container>
          </v-row>

          <v-row>
            <v-container>
              <v-layout class="ma-5">
                <v-row>
                  <v-col cols="4" align-self>
                    <v-card class="pa-2" outlined tile max-height="500px" max-width="500px">
                      <v-img :src="myprop.imgURL"></v-img>
                    </v-card>
                  </v-col>
                  <v-col cols="1" align-self>
                    <v-divider vertical></v-divider>
                  </v-col>

                  <v-col cols="7">
                    <v-card outlined max-width="1000px">
                      <v-card-title class="title">
                        <span>Description</span>
                      </v-card-title>
                      <v-card-text>
                        <p v-text="myprop.description">
                        <p class="title">${{myprop.stanPrice}}</p>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn fab small text @click="quantity -= 1">
                          <v-icon>keyboard_arrow_left</v-icon>
                        </v-btn>
                        <span v-text="quantity" class="grey" />
                        <v-btn fab small text @click="quantity += 1">
                          <v-icon>keyboard_arrow_right</v-icon>
                        </v-btn>
                      </v-card-actions>
                      <v-btn color="primary" class="ma-5" dark>Add To Cart</v-btn>
                      <v-divider class="ma-5" />
                      <v-card-title class="title ma-5">
                        <span>Detailed Information</span>
                      </v-card-title>
                      <v-card class="ma-4">
                        <v-simple-table dense dark height="100px">
                          <thead>
                            <th class="text-left">Name</th>
                            <th>Value</th>
                          </thead>
                          <tbody>
                            <tr v-for="item in details" :Key="item.name">
                              <td>{{item.name}}</td>
                              <td>{{item.desc}}</td>
                            </tr>
                          </tbody>
                        </v-simple-table>
                      </v-card>
                    </v-card>
                  </v-col>
                </v-row>
              </v-layout>
            </v-container>
          </v-row>

          <v-divider />

          <productlist v-bindv-bind:products="products"/>

        </v-flex>
      </v-layout>
    </v-container>
    <NavFooter />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "../components/AppFooter";
import Carousel from "../components/Carousel";
import NavFooter from "../components/NavFooter";
import firebase, { functions, firestore } from "firebase";
import db from "@/main";
import productlist from '../components/productlist.vue'


export default {

  props: ["myprop"],

  components: {
    AppFooter,
    Carousel,
    NavFooter,
    productlist
  },
  data() {
    return {
      name: "Hp printer",
      src:"https://images-na.ssl-images-amazon.com/images/I/61hbjZ0dRkL._SL1500_.jpg",
      info: "dododododoododdodo",
      price: 100,
      type: "Printer",
      flex: 4,
      quantity: 0,
      details: [
        {
          name: "Weight",
          desc: "6Kg"
        },
        {
          name: "Dimensions",
          desc: "10x10"
        },
        {
          name: "Color",
          desc: "White"
        }
      ],
      products: {}
    };
  },
  firestore() {
    return {
      products: db
        .collection("ProductCategory")
        .doc("pcQhnNHvSg1L3LYyTFdX")
        .collection("EftposMachines")
    };
  },

  methods: {}
};
</script>