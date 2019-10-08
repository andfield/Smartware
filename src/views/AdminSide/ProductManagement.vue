<template>
  <span class="ProductManagement">
    <AdminToolBar />
    <v-container fluild fill-height style="max-height: 100vh;">
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md8 lg8 ls8>
          <v-card hover>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="products"
                sort-by="name"
                class="elevation-1"
                :search="search"
              >
                <template v-slot:top>
                  <v-toolbar flat dark>
                    <v-toolbar-title>Product Management</v-toolbar-title>
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
                  <v-icon
                    class="mr-2"
                    color="primary"
                    @click="$router.push({path: '/UpdateProduct', query: { currentProduct: item} })"
                  >edit</v-icon>

                  <v-icon color="error" @click="deleteProduct(item.id)">delete</v-icon>
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
    </v-container>
    <v-btn @click="tempTest()">yolo</v-btn>
  </span>
</template>

<script>
import firebase, { functions, firestore } from "firebase";
import db from "@/main";
import AdminToolBar from "@/components/AdminToolBar";
export default {
  name: "ProductManagment",
  components: {
    AdminToolBar
  },
  data() {
    return {
      products: [],
      search: "",
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: true,
          value: "name"
        },
        {
          text: "Description",
          value: "description"
        },
        {
          text: "$ Price",
          value: "stanPrice",
          sortable: true
        },
        {
          text: "Controls",
          value: "actions",
          sortable: false
        }
      ],
      items: ["EFTPOS Machines", "Cables", "Parts", "Accessories",],
    };
  },
  // firestore() {
  //   return {
  //     products: db
  //       .collection("ProductCategory")
  //       .doc("vQzSkBnxzbu1Tnqn4iv2")
  //       .collection("Cables") // need to fix this
  //   };
  //   console.log("testing");
  // },
  methods: {
    // deleteProduct(item) {
    //   db.collection("ProductCategory")
    //   .doc("vQzSkBnxzbu1Tnqn4iv2")
    //   .collection("Cables")
    //   .doc(item).delete().then(function() {
    //     console.log("Document successfully deleted!");
    //   }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    //   });
    // },
    tempTest() {
      var fullProductsList = []
      
      for (var i in this.items){
        db.collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
        .collection(this.items[i]).get()
        .then(snapshot => {
          snapshot.forEach(doc =>{
            console.log(doc.id + "=>" + doc.data())
            fullProductsList.push(doc.data())
          })
        })
        .catch(error =>{
          console.log("error: " + error)
        })
      }

      this.products = fullProductsList

    }
  }
};
</script>

