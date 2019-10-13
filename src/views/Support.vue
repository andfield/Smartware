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
                <v-divider/>
              <thead>
              </thead>
              <tbody>
                <tr v-for="item in cartList" :key="item.name">
                  <td>
                    <span>
                      <h3 v-text="item.name" />
                      <p v-text="item.desc"/>
                    </span>
                  </td>
                  <td>
                      <span>
                          <a v-bind:href="item.dlLink">Download</a>
                      </span>
                  </td>
                </tr>
              </tbody>
              <v-card>
              </v-card>
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
          <v-btn @click="submitForm(userForm)">test</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import LandingNav from "../components/LandingNav";
import NavFooter from "../components/NavFooter";
import AppFooter from "../components/AppFooter";
import firebase, { functions } from "firebase";
import db from "@/main";

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
          name: "SHORT-TERM EFTPOS HIRING AGREEMENT",
          desc: "This is to request a short term rental of a POS system",
          dlLink: "https://firebasestorage.googleapis.com/v0/b/smartware-website-project.appspot.com/o/Forms%2FESBOP_WeekendRentalForm_2019.pdf?alt=media&token=3895cfea-b2b4-4934-844e-f2aee8b627e3"
        },
        {
          name: "POINT OF SALE | EFTPOS AGREEMENT",
          desc: "This form is used to either purchase OR rent a POS",
          dlLink: "https://firebasestorage.googleapis.com/v0/b/smartware-website-project.appspot.com/o/Forms%2FESBOP_AgreementForm_2019.pdf?alt=media&token=57a0e1a2-9617-47cb-97d2-b954de58bc97",
        },
        {
          name: "Proposal Request",
          desc: "No link for this one yet",
          dlLink: "",
        },
        {
          name: "Appointment Request",
          desc: "No link for this one yet",
          dlLink: "",
        },
      ]
    };
  },
  methods: {
    getCart() { // this might not be it cheif
      this.$store.dispatch("updateCart", {
            newProduct: this.newProduct
          });
    },
    submitForm(form) {
      if(form != null){
        //get the date to make an identifiable filename, could use seconds but the file name doesnt have to be unique
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute =
          (date.getMinutes() < 10 ? "0" : "") + date.getMinutes().toString(); // will lead with 0 if appropriate | may not need toString need to wait until time is right(x:00 - x:09)

        var submissionDate = day + "-" + month + "-" + year + ":" + hour + minute;

        var filename = "CustomerSupportForms/" + form.name + submissionDate

        // Create a root reference
        var storageRef = firebase.storage().ref();

        // Create a reference to the path
        var formRef = storageRef.child(filename);

        formRef.put(form).then(function(snapshot) {
          console.log('Uploaded a blob or file!');
        });
      }
      else {
        alert("Nothing to submit")
      }

    }
  }
};
</script>