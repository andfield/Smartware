<template>
  <span class="RequestManagement">
    <AdminToolBar />
    <v-container fluild fill-height style="max-height: 100vh;">
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md8 lg8 ls8>
          <v-card hover>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="requests"
                sort-by="name"
                class="elevation-1"
                :search="search"
              >
                <template v-slot:top>
                  <v-toolbar flat dark>
                    <v-toolbar-title>Request Management</v-toolbar-title>
                    <v-spacer />
                    <v-text-field
                      v-model="search"
                      append-icon="search"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon color="primary" @click="getFormData()">cloud_download</v-icon>
                </template>
              </v-data-table>
            </v-card-text>
            <v-card-actions>
              <v-btn small absolute bottom left color="success" fab to="/AddProduct">
                <v-icon>add</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn @click="getFormData()"/>
    </v-container>
  </span>
</template>

<script>
import firebase, { functions, firestore } from "firebase";
import db from "@/main";
import AdminToolBar from "@/components/AdminToolBar";
export default {
    name: "RequestManagment",
    components: {
        AdminToolBar
    },
    data() {
        return{
            requests: [],
            search: "",
            headers: [
              {
                text: "First name",
                align: "left",
                sortable: true,
                value: fname
              },
              {
                text: "Last name",
                value: lname
              },
              {
                text: "Type",
                value: type
              },
              {
                text: "PDF",
                value: ""
              }

            ]
        }
    },
    methods: {
      getFormData() {
        var fullList = [];
        var tempForm = null;

        db.collection("CustomerForms")
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              tempForm = doc.data();
              fullList.push(tempForm);
            });
          })
          .catch(error => {
            console.log("error: " + error);
          });

        this.requests = fullList;
        console.log(fullList)
      },
    }
}
</script>