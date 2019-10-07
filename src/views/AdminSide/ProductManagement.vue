<template>
  <span class="ProductManagement">
    <AdminToolBar />
    <v-container fluild fill-height style="max-height: 100vh;">
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md8 lg8 ls8>
          <v-card hover>
            <v-toolbar dark>
              <v-toolbar-title class="display-2">All Products</v-toolbar-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              />
            </v-toolbar>

            <v-simple-table  height="200px" fixed-header>
              <thead>
                <th class="text-left hidden-md-and-down">Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>price</th>
                <th>Controls</th>
              </thead>
              <tbody>
                <tr v-for="(item) in products" :key="item.name"><!-- there is no loop counter -->
                  <td class="hidden-md-and-down">
                    <v-img :src="item.imgURL" max-height="100px" max-width="100px" />
                  </td>
                  <td>{{item.name}}</td>
                  <td>{{item.description}}</td>
                  <td>
                    <span>
                      <h3>${{parseFloat(item.stanPrice).toFixed(2)}}</h3>
                    </span>
                  </td>
                  <td>
                    <span>
                      <v-row>
                        <v-btn
                          fab
                          dark
                          small
                          color="primary"
                          @click="$router.push({path: '/UpdateProduct', query: { currentProduct: item} })"
                        >
                          <v-icon>edit</v-icon>
                        </v-btn>
                        <v-btn
                          class="mx-3"
                          fab
                          dark
                          small
                          color="error"
                          @click="deleteProduct(item.id)"
                        >
                          <v-icon>delete</v-icon>
                        </v-btn>
                      </v-row>
                    </span>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-card-actions>
              <v-btn small absolute bottom left color="success" fab to="/AddProduct">
                <v-icon>add</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn @click="tempTest()">
      yolo
    </v-btn>
  </span>
</template>

<script>
import firebase, { functions, firestore } from "firebase";
import db from "@/main";
import AdminToolBar from '@/components/AdminToolBar';
export default {
  name: "ProductManagment",
  components: {
      AdminToolBar,
  },
  data() {
    return {
      products: [],
      search: ""
    };
  },
  firestore() {
    return {
      products: db
        .collection("ProductCategory")
        .doc("vQzSkBnxzbu1Tnqn4iv2")
    }
    console.log("testing")
  },
  methods: {
    deleteProduct(item) {
      // db.collection("ProductCategory")
      // .doc("vQzSkBnxzbu1Tnqn4iv2")
      // .collection("Cables")
      // .doc(item).delete().then(function() {
      //   console.log("Document successfully deleted!");
      // }).catch(function(error) {
      //   console.error("Error removing document: ", error);
      // });
    },
    tempTest(){
      console.log(this.products) 
      var prodRef = db.collection("ProductCategory").doc("vQzSkBnxzbu1Tnqn4iv2");
      prodRef.getCollections().then(collections => {
        collections.forEach(collection => {
          console.log('Found subcollection with id:', collection.id);
        });
      });
    }
  }
}
</script>

