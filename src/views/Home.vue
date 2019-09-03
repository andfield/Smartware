<template>
  <div class="Home">
    <AppToolbar />
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 lg10 xl10>
          <Carousel />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap class="mx-5">
        <v-flex xs12 md6>
          <h1>Printers</h1>
        </v-flex>
      </v-layout>
      <v-divider class="ma-1"></v-divider>
    </v-container>

    <v-container>
      <v-layout row wrap class="mx-5">
        <v-flex xs12 md6 lg4 xl4 v-for="product in products" :key="product.name">
          <v-card class="ma-2"
           raised
          >
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
              <v-btn 
              color="blue"
              dark
              small
              absolute
              bottom
              right
              fab
              >
                <v-icon>add_shopping_cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AppToolbar from "../components/AppToolbar";
import AppFooter from "../components/AppFooter";
import Carousel from "../components/Carousel";
export default {
  components: {
    AppToolbar,
    AppFooter,
    Carousel
  },
  data: () => ({
    products: [
      {
        name: "Hp printer",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/61hbjZ0dRkL._SL1500_.jpg",
        info: "dododododoododdodo",
        price: 100,
        flex: 4
      },
      {
        name: "Dell printer",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/61hbjZ0dRkL._SL1500_.jpg",
        info: "dododododoododdodo",
        price: 200,
        flex: 4
      }
    ]
  })
};
</script>
