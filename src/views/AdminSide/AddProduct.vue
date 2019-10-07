<template>
  <v-container fluild fill-height style="max-height: 100vh;">
    <AdminToolBar />
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card hover>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Add New Product</v-toolbar-title>
          </v-toolbar>
          <v-card-text @keypress.enter="addProduct()">
            
            <v-text-field
              shaped
              prepend-icon="create"
              label="Name"
              v-model="name"
              :rules="[v => !!v || 'Name is required']"
              outlined
            ></v-text-field>

            <v-textarea
              prepend-icon="notes"
              label="Description"
              v-model="description"
              auto-grow
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
            <v-btn color="primary" to="/AdminDashboard">
              <v-icon left>arrow_back</v-icon>
              <span>Back</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="addProduct">
              <span>Add</span>
              <v-icon left>add_circle_outline</v-icon>
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
  name: "AddProduct",
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
      items: ["EFTPOS Machines", "Cables", "Parts", "Accessories",]
    };
  },
  methods:{
    addProduct() {
      console.log(this.category)
      var productData = {
        name: this.name,
        description: this.description,
        img: "no image available", // this doesnt do anything, need to upload to storage then store the reference(maybe a better way)
        stanPrice: this.price,
      }
      console.log(productData)
      db.collection("ProductCategory").doc("vQzSkBnxzbu1Tnqn4iv2").collection(this.category).add(productData);
      alert(this.name + " has been added to the Database")
    }
  }
};
</script>