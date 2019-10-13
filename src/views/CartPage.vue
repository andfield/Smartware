<template>
  <span class="CartPage">
    <LandingNav />
    <v-container fluild fill-height style="max-height: 100vh;">
      <v-layout align-center justify-center>
        <v-flex xs12 md12 sm12 lg10 xl10>
          <v-row>
            <v-layout row wrap class="justify-center">
              <v-flex class="mx-10 my-5" xs12 sm12 md8 lg7 xl7>
                <v-card hover>
                  <v-toolbar dark>
                    <v-toolbar-title class="display-2">Your Cart</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text class="pa-2">
                    <v-simple-table>
                      <thead>
                        <th />
                        <th class="text-left">Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in cartList" :key="item.name">
                          <!-- i is the loop counter -->
                          <td>
                            <v-img :src="item.imgURL" max-height="200px" max-width="200px" />
                          </td>

                          <td>
                            <span>
                              <h3 v-text="item.name" />
                            </span>
                          </td>
                          <td>
                            <v-textarea v-text="item.description" />
                          </td>
                          <td>
                            <span>
                              <h3>${{item.stanPrice}}</h3>
                            </span>
                          </td>
                          <td>
                            <span>
                              <v-icon @click="removeProduct(i)" color="error">delete</v-icon>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                    <v-divider class="mt-1 mb-5" />

                    <v-footer>
                      <v-row wrap>
                        <v-btn flat outlined color="error" @click="clearCart()">
                          Clear All
                          <v-icon right small>delete</v-icon>
                        </v-btn>

                        <v-divider class="mx-3" vertical />
                        <v-spacer />
                        <h3 class="mt-2 black--text">Subtotal:</h3>
                        <h3 class="mt-2 mx-10 black--text">${{subtotal}}</h3>
                      </v-row>
                    </v-footer>
                    <!-- <div class="px-5">

                    </div>-->
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex class="mx-10 my-5" xs12 md4 lg4 xl3>
                <v-card hover color="#e6e1e1">
                  <v-card-title class="px-5 font-weight-bold">Summary ({{cartList.length}} items)</v-card-title>
                  <v-card-text class="px-5 black--text">
                    <v-row wrap>
                      <v-col cols="4">
                        <h3>Subtotal:</h3>
                      </v-col>
                      <v-col cols="4" />
                      <v-col cols="4">
                        <h3>${{subtotal}}</h3>
                      </v-col>
                    </v-row>

                    <v-row wrap>
                      <v-col cols="4">
                        <h3>Shipping:</h3>
                      </v-col>
                      <v-col cols="4" />
                      <v-col cols="4">
                        <h3>-</h3>
                      </v-col>
                    </v-row>

                    <v-row wrap>
                      <v-col cols="4">
                        <h3>GST(incl.):</h3>
                      </v-col>
                      <v-col cols="4" />
                      <v-col cols="4">
                        <h3>${{parseFloat(subtotal*0.15).toFixed(2)}}</h3>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>

                    <v-row wrap>
                      <v-col cols="4">
                        <h3>Total:</h3>
                      </v-col>
                      <v-col cols="4" />
                      <v-col cols="4">
                        <h3>${{parseFloat(subtotal) + parseFloat(parseFloat(subtotal*0.15).toFixed(3))}}</h3>
                      </v-col>
                    </v-row>

                    <v-btn color="primary" block @click="checkout()">Checkout</v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-row>

          <v-row>
            <v-layout row wrap class="justify-center align-center">
              <v-flex class="mt-10">
                <NavFooter/>
              </v-flex>
            </v-layout>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import LandingNav from "../components/LandingNav";
import NavFooter from "../components/NavFooter";
import router from "@/router";

export default {
  name: "CartPage",
  components: {
    LandingNav,
    NavFooter
  },

  data() {
    var cartData = this.$store.getters.getCartDetails;

    return {
      cartList: cartData,
      subtotal: this.$store.getters.getCartTotal
    };
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearCart");
      this.subtotal = parseFloat(this.$store.getters.getCartTotal).toFixed(2);
    },
    removeProduct(arrayPos) {
      this.$store.dispatch("removeCartProduct", { arrayPos });
      this.subtotal = parseFloat(this.$store.getters.getCartTotal).toFixed(2);
    },
    checkout() {
      var cartData = this.$store.getters.getCartDetails;
      if (cartData.length == 0) {
        alert("Add something to the cart before you checkout");
      } else {
        router.push("/CheckoutSystem");
      }
    }
  }
};
</script>