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

                  <v-icon color="error" @click="deleteProduct(item)">delete</v-icon>
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
      items: ["Accessories", "Cables", "EFTPOS Machines", "Parts", ],
    };
  },
  methods: {
    deleteProduct(item) {
      console.log(item.productID)
      console.log(item)
      if(confirm("Are you sure you want to delete product: " + item.name + " ?")){
        db.collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
        .collection("Cables")
        .doc(item.productID).delete().then(function() {
          console.log("Document successfully deleted!");
        }).catch(function(error) {
          console.error("Error removing document: ", error);
        });
        alert("Product: " + item.productID + " has been deleted from the database.")
      }
      this.getProductData()
    },
    getProductData() {
      var fullProductsList = []
      var tempProduct = null
      
      for (var i in this.items){
        db.collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
        .collection(this.items[i]).get()
        .then(snapshot => {
          snapshot.forEach(doc =>{
            // console.log("Data: " + doc.data())
            tempProduct = doc.data()
            tempProduct["productID"] = doc.id
            // tempProduct["category"] = this.items[i] //Temporary until I give all the products categories
            fullProductsList.push(tempProduct)
          })
        })
        .catch(error =>{
          console.log("error: " + error)
        })
      }
      console.log(fullProductsList)
      this.products = fullProductsList

    }
  },
  beforeMount(){
    this.getProductData();
  }
};
</script>

