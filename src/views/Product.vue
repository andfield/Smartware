<template>
  <div class="Product">
    <v-container>
      <v-layout>
        <v-flex xs12 lg12 xl12 md12>
          <v-row>
            <AppToolbar app />
          </v-row>

          <v-row>
            <v-container>
              <v-layout class="mx-2 my-5">
                <v-flex fluid>
                  <h1 class="display-1" v-text="name" />
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
                    <v-card class="pa-2" outlined tile max-height="400px" max-width="400px">
                      <v-img :src="src"></v-img>
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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minima debitis amet repellat laboriosam ea, vel at odio nobis laudantium neque fuga expedita accusamus delectus explicabo deserunt a dolores quo.</p>
                        <p class="title">${{price}}</p>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn fab small text v-on:click="quantity -= 1">
                          <v-icon>keyboard_arrow_left</v-icon>
                        </v-btn>
                        <span v-text="quantity" class="grey" />
                        <v-btn fab small text v-on:click="quantity += 1">
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

          <v-divider/>
          
          <v-row>
            <v-container>
              <v-layout row wrap class="ma-5">
                <v-row>
                  <v-flex class="justify-center">
                    <h4 class="display-1">Related Products</h4>
                  </v-flex>
                </v-row>
                <v-row>
                  <v-flex xs10 md4 lg2 xl2 v-for="product in products" :key="product.name">
                    <v-card class="ma-2" hover to="/Product" max-height="auto">
                      <v-img
                        :src="product.src"
                        class="black--text"
                        height="200px"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      >
                        <v-card-title class="fill-height align-end" v-text="product.name"></v-card-title>
                      </v-img>

                      <v-card-text>
                        <span v-text="product.info" />
                      </v-card-text>

                      <v-card-actions>
                        <v-icon>attach_money</v-icon>
                        <span v-text="product.price" />
                        <v-spacer />
                        <v-btn color="blue" dark small absolute bottom right fab>
                          <v-icon>add_shopping_cart</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-row>
              </v-layout>
            </v-container>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
    <NavFooter/>
    <AppFooter/>
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
  },
  data: () => ({
    name: "Hp printer",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/61hbjZ0dRkL._SL1500_.jpg",
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
    products: [
      {
        name: "Epson printer",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/61hbjZ0dRkL._SL1500_.jpg",
        info: "dododododoododdodo",
        price: 100,
        type: "Printer",
        flex: 4
      },
      {
        name: "Dell printer",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/61hbjZ0dRkL._SL1500_.jpg",
        info: "dododododoododdodo",
        price: 200,
        type: "Printer",
        flex: 4
      }
    ]
  }),
  methods: {}
};
</script>