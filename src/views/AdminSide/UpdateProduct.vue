<template>
  <v-container fluild fill-height style="max-height: 100vh;">
    <AdminToolBar />
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8 lg8 ls8>
        <v-card hover>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Update {{currentProduct.name}}</v-toolbar-title>
          </v-toolbar>
          <v-card-text @keypress.enter="addProduct">
          
            <v-text-field
              shaped
              prepend-icon="create"
              label="Name"
              :placeholder="currentProduct.name"
              v-model="name"
              :rules="[v => !!v || 'Name is required']"
              outlined
            ></v-text-field>

            <v-textarea
              prepend-icon="notes"
              label="Description"
              v-model="description"
              auto-grow
              :placeholder="currentProduct.description"
              outlined
              rows="3"
              row-height="25"
              :rules="[v => !!v || 'Description is required']"
              shaped
              required
            ></v-textarea>

            <v-file-input
              label="Product Image"
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              outlined
              shaped
            ></v-file-input>

            <v-text-field
              label="Product Price"
              :rules="[v => !!v || 'Price is required']"
              outlined
              shaped
              v-model="price"
              :placeholder="currentProduct.stanPrice"
              prepend-icon="attach_money"
            ></v-text-field>

            <v-select
              v-model="category"
              :items="items"
              :rules="[v => !!v || 'Category is required']"
              label="Select Category"
              required
              outlined
              shaped
              prepend-icon="category"
            ></v-select>
          </v-card-text>

          <v-card-actions class="mx-3">
            <v-btn color="primary" to="/ProductManagement">
              <v-icon left>arrow_back</v-icon>
              <span>Go back</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="updateProduct(currentProduct)">
              <span>Update Product</span>
              <v-icon left>edit</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AdminToolBar from '@/components/AdminToolBar';
import db from "@/main"
export default {
  props: ["currentProduct"], //This is where I am getting data from product management.

  name: "UpdateProduct",
  components: {
    AdminToolBar
  },
  data() {
    return {
      name: "",
      description: "",
      image: "",
      category: "",
      price: "",
      rules: [
        value =>
          !value ||
          value.size < 2000000 ||
          "Image size should be less than 2 MB!"
      ],
      items: ["Printers", "EFTPOS Machines", "Accessories", "Others"]
    };
  },
  methods: {
    updateProduct(item) {
      console.log(item)
      var docRef = db.collection("ProductCategory")
                  .doc("vQzSkBnxzbu1Tnqn4iv2")
                  .collection(item.category)
                  .doc(item.productID)

      
      if(this.name != ""){ //doing it one at a time again so that it doesnt override the empty spaces with nothing
        docRef.update({
          name: this.name
        }).then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
      }

      if(this.description != ""){
        docRef.update({
          description: this.description
        }).then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
      }

      if(this.price != ""){
        docRef.update({
          stanPrice: this.price
        }).then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
      }

      if(this.category != ""){
        docRef.update({
          category: this.category
        }).then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
      }


        // .get()
        // .then(function(doc) {
        //     console.log(doc.id)
        //     doc.update({
        //       name: "000yolo"
        //     })
        //     // docID = doc.id;
        //     // docRef = db.collection("customers").doc(docID); //have to search by docID if the email is changing

        //     // if (newPhNum != null) {
        //     //   //check if not null so it doesnt overwrite in DB with nothing
        //     //   docRef.update({
        //     //     phNum: newPhNum
        //     //   });
        //     // } else {
        //     //   console.log("error updating phNum: " + newPhNum);
        //     // }
        //     // if (newEmail != null) {
        //     //   //checking each part individualy, probably a better way
        //     //   user.updateEmail(newEmail).then(() => {
        //     //     //update the authentication email first
        //     //     docRef.update({
        //     //       email: newEmail
        //     //     });
        //     //   });
        //     // } else {
        //     //   console.log("error updating email: " + newEmail);
        //     // }
        //     // if (newAddress != null) {
        //     //   //checking each part individualy, probably a better way
        //     //   docRef.update({
        //     //     address: newAddress
        //     //   });
        //     // } else {
        //     //   console.log("error updating email: " + newEmail);
        //     // }
        // })
        // .catch(function(error) {
        //   console.log("Error getting documents: ", error);
        // });
    }
  }
};
</script>