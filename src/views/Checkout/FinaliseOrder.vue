<template>
  <span class="CartPage">
    <v-container fluild fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
            <v-card>
                <h2>This order will be shipping the following address</h2>
                 <tr v-for="(item) in addressDetails" :key="item.name"> <!-- i is the loop counter -->
                  <td>
                    <span>
                      <h3 v-text="item" />
                    </span>
                  </td>
                </tr>
            </v-card>
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
                <tr v-for="(item) in cartList" :key="item.name"> <!-- i is the loop counter -->
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
            <v-card-actions class="mx-3">
                <v-btn color="primary" to="/CartPage">
                <v-icon left>arrow_back</v-icon>
                <span>Back</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="placeOrder()">
                <span>Place Order(todo)</span>
                </v-btn>
            </v-card-actions>
        </v-flex>
      </v-layout>
      <v-card>
        <h2>Summary ({{cartList.length}} items)</h2>
        <h3>Subtotal: ${{subtotal}} </h3>
        <h3>Shipping: $todo </h3>
        <h3>GST(incl.): ${{parseFloat(subtotal*0.15).toFixed(2)}} </h3>
        <h3>Total: ${{subtotal}} </h3>
      </v-card>
    </v-container>
  </span>
</template>

<script>
import router from "@/router";

export default {
  data() {
    var cartData = this.$store.getters.getCartDetails
    var addressData = this.$store.getters.getShippingInfo

    return {
      cartList: cartData,
      subtotal: parseFloat(this.$store.getters.getCartTotal).toFixed(2), // weird rounding bug if not forced to 2dp
      addressDetails: addressData
    };
  },
  methods: {
    placeOrder(){
      this.$store.dispatch("createOrder")
    }
  }
};
</script>