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
                  <v-icon color="primary" >cloud_download</v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn @click="test2()" />
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
          text: "PDF",
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
    getFormData() {
      var fullList = [];
      var formList = null;
      var tempPath = null
      var tempURL = null
      var formRef = null
      var storageRef = firebase.storage().ref();
      var url = null
      var tempList = []

      db.collection("CustomerForms")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            formList = doc.data();
            fullList.push(doc.data())
            console.log(formList)
          });
          //Still inside then()
          console.log(fullList)
          for( var i = 0; i < fullList.length; i++){

            console.log("pls")
            console.log(fullList[i].fileName)
            var storage = firebase.storage().ref()
            var formRef = storageRef.child("CustomerSupportForms/ESBOP_AgreementForm_2019.pdf14-10-2019:918Sid-Thakur-POINT OF SALE | EFTPOS AGREEMENT");
            console.log(formRef)

            formRef.getDownloadURL().then(function(url) {
              formList[i]["url"] = url
              console.log("xd")
            }).catch(function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;

          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;

          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });

            console.log(formList[i])
            console.log("test")
            finalList[i].push(formList[i])
          }



        })
        .catch(function(error) {
          console.log("Error bottom: " + error)
        });

      // look at this sid
      var finalList = []
      // formRef = storageRef.child(tempForm.fileName);
      for( var i = 0; i < tempList.length; i++){

      }

      // tempList.forEach((i, index) => {
      //   console.log("test")
      //   formRef = storageRef.child(i.fileName);
      //   formRef.getDownloadURL().then(function(url) {
      //     console.log(i)
      //     i["url"] = url
      //     finalList.push(i)
      //   }).catch(function(error) {
      //     console.log("Error: " + error)
      //   });
      //   fullList.push(i)
      // })
      


      this.requests = finalList;
    },
    test2(){
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
    }
  },

  beforeMount() {
    this.test2();
  }

};
</script>