<template>
  <span class="CartPage">
    <LandingNav />
    <v-container fluild fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          <v-card hover>
            <v-toolbar dark>
              <v-toolbar-title class="display-2">Support Forms</v-toolbar-title>
            </v-toolbar>
            <v-simple-table>
              <v-divider />
              <thead></thead>
              <tbody>
                <tr v-for="item in cartList" :key="item.name">
                  <td>
                    <span>
                      <h3 v-text="item.name" />
                      <p v-text="item.desc" />
                    </span>
                  </td>
                  <td>
                    <span>
                      <a v-bind:href="item.dlLink">Download</a>
                    </span>
                  </td>
                </tr>
              </tbody>
              <v-card></v-card>
            </v-simple-table>
          </v-card>
          <v-card>
            <v-file-input
              label="Put Your File"
              :rules="rules"
              accept="image/pdf"
              outlined
              shaped
              v-model="userForm"
            />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import LandingNav from "../components/LandingNav";
import NavFooter from "../components/NavFooter";

export default {
  name: "CartPage",
  components: {
    LandingNav,
    NavFooter
  },

  data() {
    return {
      cartList: [
        {
          name: "SHORT-TERM EFTPOS HIRING AGREEMENT",
          desc: "This is to request a short term rental of a POS system",
          dlLink:
            "https://firebasestorage.googleapis.com/v0/b/smartware-website-project.appspot.com/o/Forms%2FESBOP_WeekendRentalForm_2019.pdf?alt=media&token=3895cfea-b2b4-4934-844e-f2aee8b627e3"
        },
        {
          name: "POINT OF SALE | EFTPOS AGREEMENT",
          desc: "This form is used to either purchase OR rent a POS",
          dlLink:
            "https://firebasestorage.googleapis.com/v0/b/smartware-website-project.appspot.com/o/Forms%2FESBOP_AgreementForm_2019.pdf?alt=media&token=57a0e1a2-9617-47cb-97d2-b954de58bc97"
        },
        {
          name: "Proposal Request",
          desc: "No link for this one yet",
          dlLink: ""
        },
        {
          name: "Appointment Request",
          desc: "No link for this one yet",
          dlLink: ""
        }
      ]
    };
  },
  methods: {
    getCart() {
      // this might not be it cheif
      this.$store.dispatch("updateCart", {
        newProduct: this.newProduct
      });
    }
  }
};
</script>