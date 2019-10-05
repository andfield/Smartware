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
            <v-btn color="primary" @click="addProduct">
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
import AdminToolBar from "../components/AdminSide/AdminToolBar";
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
    updateProduct() {}
  }
};
</script>