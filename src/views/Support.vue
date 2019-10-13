<template>
  <span class="CartPage">
    <LandingNav />
    <v-container fluild fill-height style="max-height: 100vh;">
      <v-layout align-center justify-center>
        <v-flex xs12 md12 sm12 lg10 xl10>
          <v-row class="mb-10">
            <v-layout row wrap class="justify-center">
              <v-flex class="mx - 1- my-5" xs12 sm12 md6 lg6 xl6>
                <v-card flat outlined>
                  <v-card-title>
                    <v-toolbar dark flat>
                      <v-toolbar-title class="display-2">Send Request</v-toolbar-title>
                    </v-toolbar>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field label="First Name" v-model="fname" outlined />

                    <v-text-field label="Last Name" v-model="lname" outlined />

                    <v-select :items="types" label="Request Type" v-model="type" outlined />

                    <v-file-input
                      label="Put Your File"
                      :rules="rules"
                      accept="image/pdf"
                      outlined
                      v-model="userForm"
                    />
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer />
                    <v-btn block flat color="primary" @click="submitForm(userForm)">Submit</v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-flex>

              <v-flex class="mx-10 my-5 mb-10" xs12 sm12 md12 lg5 xl4>
                <v-card flat>
                  <v-toolbar flat dark>
                    <v-toolbar-title class="title">Support Forms</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text class="px-5 black--text">
                    <v-simple-table>
                      <v-divider />
                      <thead></thead>
                      <tbody>
                        <tr v-for="item in FormList" :key="item.name">
                          <td>
                            <span>
                              <strong v-text="item.name" />
                              <p v-text="item.desc" />
                            </span>
                          </td>
                          <td>
                            <span>
                              <a class="caption" v-bind:href="item.dlLink">Download</a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <v-card></v-card>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-row>
          <footer>
            <NavFooter />
          </footer>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import LandingNav from "../components/LandingNav";
import NavFooter from "../components/NavFooter";
import firebase, { functions } from "firebase";
import db from "@/main";

export default {
  name: "CartPage",
  components: {
    LandingNav,
    NavFooter
  },

  data() {
    return {
      fname: "",
      lname: "",
      type: "",
      types: [
        "SHORT-TERM EFTPOS HIRING AGREEMENT",
        "POINT OF SALE | EFTPOS AGREEMENT",
        "Proposal Request",
        "Appointment Request"
      ],
      FormList: [
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
    },
    submitForm(form) {
      if (form != null) {
        //get the date to make an identifiable filename, could use seconds but the file name doesnt have to be unique
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var hour = date.getHours();
        var minute =
          (date.getMinutes() < 10 ? "0" : "") + date.getMinutes().toString(); // will lead with 0 if appropriate | may not need toString need to wait until time is right(x:00 - x:09)

        var submissionDate =
          day + "-" + month + "-" + year + ":" + hour + minute;

        var filename = "CustomerSupportForms/" + form.name + submissionDate;

        // Create a root reference
        var storageRef = firebase.storage().ref();

        // Create a reference to the path
        var formRef = storageRef.child(filename);

        formRef.put(form).then(function(snapshot) {
          console.log("Uploaded a blob or file!");
        });
      } else {
        alert("Nothing to submit");
      }
    }
  }
};
</script>