<template>
  <div class="Category">
    <nav>
    </nav>
    <v-container id="category-header">
      <v-layout row wrap class="px-5">
        <v-flex class="justify-center">
          <v-row>
            <h1>Printer</h1>
            <v-spacer />
            <v-flex>
              <v-layout>
              <v-select :items="sortBy" outlined label="Sort By"></v-select>
              </v-layout>
            </v-flex>
          </v-row>
          <v-divider />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap class="mx-5">
        <v-flex xs10 md4 lg2 xl2 v-for="product in priceSort" :key="product.name">
          <v-card class="ma-2" hover to="/Product">
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
import NavFooter from "../components/NavFooter";

export default {
  components: {
    AppFooter,
    NavFooter
  },
  data: () => ({
    products: [
      {
        name: "Hp printer",
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
        type: "Ipad",
        flex: 4
      },
      {
        name: "Spider printer",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/61hbjZ0dRkL._SL1500_.jpg",
        info: "dododododoododdodo",
        price: 500,
        type: "Printer",
        flex: 4
      }
    ],
    sortBy: ["Alphabetical", "Price"]
  }),
  computed: {
    alphabetical: function() {
      function compare(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      return this.products.sort(compare);
    },
    priceSort: function() {
      function compare(a, b) {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      }
      return this.products.sort(compare);
    }
  }
};
</script>
