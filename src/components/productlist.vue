<template>
  <v-container class="justify-center">
    <v-layout row wrap>
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
</template>

<script>
export default {
  props: ["products"]
};
</script>