<template>
  <nav>
    <v-app-bar dark app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer" />
      <v-toolbar-title class="display-1">
        <span>SmartWare</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn text>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer dark app v-model="drawer">
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="view_module" value="true">
          <template v-slot:activator>
            <v-list-item-title>Products</v-list-item-title>
          </template>
          <v-list-item link to="/AddProduct">
            <v-list-item-icon>
              <v-icon>add</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Add Product</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>delete</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Delete Product</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>update</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Update Product</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>local_shipping</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Order Management</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>inbox</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Request Management</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "AdminToolBar",
  data() {
    return {
      drawer: true,
    };
  }
};
</script>