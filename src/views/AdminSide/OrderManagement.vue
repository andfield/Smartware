<template>
  <span class="ProductManagement">
    <AdminToolBar />
    <v-container fluild fill-height style="max-height: 100vh;">
      <v-layout align-center justify-center>
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
      </v-layout>
    </v-container>
    <v-btn @click="tempTest()">yolo</v-btn>
  </span>
</template>


<script>
</script>