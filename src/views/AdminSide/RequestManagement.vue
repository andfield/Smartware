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
      <v-btn @click="getFormData()" />
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
      var tempForm = null;
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
            tempForm = doc.data();
            tempList.push(tempForm)
            // Create a reference to the file we want to download
            
            // Get the download URL
            // formRef.getDownloadURL().then(function(url) {

            //   templist.forEach((i, index) => {
            //     i["url"] = url
            //     fullList.push(i)
            //   })

            // }).catch(function(error) {
            //   console.log("Error: " + error)
            // });
            // tempForm["url"] = tempURL
            // fullList.push(tempForm);
          });
        })
        .catch(function(error) {

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

      // look at this sid
      var finalList = []
      console.log(tempList)
      // formRef = storageRef.child(tempForm.fileName);
      tempList.forEach((i, index) => {
        console.log("test")
        formRef = storageRef.child(i.fileName);
        formRef.getDownloadURL().then(function(url) {
          console.log(i)
          i["url"] = url
          finalList.push(i)
        }).catch(function(error) {
          console.log("Error: " + error)
        });
        fullList.push(i)
      })
      

      console.log(finalList)

      this.requests = finalList;
    }
  },

  beforeMount() {
    this.getFormData();
  }

};
</script>