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
                item-key="name"
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
                  <v-icon  @click="openForm(item.url)" color="primary" >cloud_download</v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn @click="getFormData()" />
    </v-container>
  </span>
</template>

<script>
import firebase, { functions, firestore } from "firebase";
import db from "@/main";
import AdminToolBar from "@/components/AdminToolBar";
import router from "@/router";

export default {
  name: "RequestManagment",
  components: {
    AdminToolBar
  },
  data() {
    return {
      requests: [],
      search: "",
      headers: [
        {
          text: "First name",
          align: "left",
          sortable: true,
          value: "fName"
        },
        {
          text: "Last name",
          value: "lName",
          sortable: true
        },
        {
          text: "Type",
          value: "type",
          sortable: true
        },
        {
          text: "Form-Link",
          value: "url"
        },
        {
          text: "Status",
          sortable: true,
          value: "status"
        },
        {
          text: "Controls",
          value: "actions",
          sortable: false
        }
      ]
    };
  },
  methods: {
    getFormData(){
      var fullList = []
      var listLength = null
      var storageRef = firebase.storage().ref();
      var urlList = []

      //Get the forms
      db.collection("CustomerForms")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // formList = doc.data();
          fullList.push(doc.data())
          // console.log(formList)
        });

        // Loop through the forms
        for(var i =0; i < fullList.length; i++){
          var tempForm = fullList[i]
          // Create a reference to the file we want to download
          var formRef = storageRef.child(fullList[i].fileName);
          // Get the download URL
          formRef.getDownloadURL().then(function(url) {
            urlList.push(url)
          }).catch(function(error) {
            console.log("Error: " + error)
          });
            // console.log(urlList.length)
        }
        setTimeout(function() { //need to load, ive spent too much time on this
          console.log("loading...")
          for(var i =0; i < fullList.length; i++){
            fullList[i]["url"] = urlList[i]
          }
          this.requests = fullList;
        }, 1000);
        })
        .catch(function(error) {
          console.log("Error bottom: " + error)
        });
        this.requests = fullList;
    },
    openForm(formURL){
      console.log("xd")
      console.log(formURL)
      setTimeout(function() {
        var newWindow = window.open(formURL, '_blank');
        newWindow.focus()
        // window.location.href = formURL
      }, 1000);
    },
  },
  beforeMount() {
    this.getFormData();
  }

};
</script>