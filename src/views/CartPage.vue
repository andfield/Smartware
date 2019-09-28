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
                <tr v-for="item in cartList" :key="item.name">
                  <td>
                    <v-img :src="item.src" max-height="200px" max-width="200px" />
                  </td>
                  <td>
                    <span>
                      <h3 v-text="item.name" />
                      <p v-text="item.desc"/>
                    </span>
                  </td>
                </tr>
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
                </v-row>-->
              </v-card>
            </v-simple-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import LandingNav from "../components/LandingNav";
import NavFooter from "../components/NavFooter";
import AppFooter from "../components/AppFooter";

export default {
  name: "CartPage",
  components: {
    LandingNav,
    NavFooter,
    AppFooter
  },

  data() {
    return {
      cartList: [
        {
          name: "hello",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKGFpBmgjdMCeUAHblvliOk6Yom20eTNWiTgTxQc6mTkEM-Kj",
          quantity: 0,
          desc: "sup cunts how yall doing"
        }
      ]
    };
  },
  methods: {
    getCart() {
      cartList = this.state.cartList;
    }
  }
};
</script>