<template>
  <span class="CartPage">
    <LandingNav />
    <v-container fluild fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          <v-card hover>
            <v-toolbar dark>
              <v-toolbar-title class="display-2">Your Cart</v-toolbar-title>
            </v-toolbar>
            <v-simple-table>
                <v-divider/>
              <thead>
                <th class="text-left">Item</th>
                <th />
                <th>Price</th>
                <th>Quantity</th>
              </thead>
              <tbody>
                <tr v-for="(item, i) in cartList" :key="item.name"> <!-- i is the loop counter -->
                  <td>
                    <v-img :src="item.imgURL" max-height="200px" max-width="200px" />
                  </td>
                  <td>
                    <span>
                      <h3 v-text="item.name" />
                      <p v-text="item.description"/>
                    </span>
                  </td>
                  <td>
                    <span>
                      <h3>${{item.stanPrice}}</h3>
                    </span>
                  </td>
                  <td>
                    <span>
                      <v-btn @click="removeProduct(i)">
                        <p>Remove Item From Cart</p>
                      </v-btn>
                    </span>
                  </td>
                </tr>
                <v-btn @click="clearCart()">
                  <p>Clear All</p>
                </v-btn>
              </tbody>
              <v-card>
                <!-- <v-row>
                        <v-col cols="3">
                            <v-img
                            :src="item.src"
                            max-height="200px"
                            />  
                        </v-col>
                        <v-divider vertical/>
                        <v-col cols="9">
                            <v-card>
                                
                            </v-card>
                        </v-col>
                </v-row> -->
              </v-card>
            </v-simple-table>
          </v-card>
        </v-flex>
      </v-layout>
      <v-card>
        <h2>Summary ({{cartList.length}} items)</h2>
        <h3>Subtotal: ${{subtotal}} </h3>
        <h3>Shipping: $todo </h3>
        <h3>GST(incl.): ${{parseFloat(subtotal*0.15).toFixed(2)}} </h3>
        <v-btn @click="checkout()"> Checkout </v-btn>
      </v-card>
    </v-container>
  </span>
</template>

<script>
import LandingNav from "../components/LandingNav";
import NavFooter from "../components/NavFooter";
import AppFooter from "../components/AppFooter";
import router from "@/router";

export default {
  name: "CartPage",
  components: {
    LandingNav,
    NavFooter,
    AppFooter
  },

  data() {
    var cartData = this.$store.getters.getCartDetails

    return {
      cartList: cartData,
      subtotal: parseFloat(this.$store.getters.getCartTotal).toFixed(2), // weird rounding bug if not forced to 2dp
    };
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearCart")
      this.subtotal = parseFloat(this.$store.getters.getCartTotal).toFixed(2)
    },
    removeProduct(arrayPos){
      this.$store.dispatch("removeCartProduct", {arrayPos})
      this.subtotal = parseFloat(this.$store.getters.getCartTotal).toFixed(2)
    },
    checkout(){
      var cartData = this.$store.getters.getCartDetails
      if(cartData.length == 0){
        alert("Add something to the cart before you checkout")
      }else{
        router.push("/Checkout/ShippingInfo")
      }
    }
  }
};
</script>