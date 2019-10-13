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
                :items="Orders"
                item-key="name"
                class="elevation-1"
                :search="search"
              >
                <template v-slot:top>
                  <v-toolbar flat dark>
                    <v-toolbar-title>Order Management</v-toolbar-title>
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
                    @click="completeOrder(item)"
                    v-if="item.status === 'Pending'"
                    class="mr-2"
                    color="success"
                  >done_outline</v-icon>

                  <v-dialog max-width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn fab x-small v-on="on">
                        <v-icon color="primary">remove_red_eye</v-icon>
                      </v-btn>
                    </template>
                    <v-card flat>
                      <v-card-title>
                        <v-toolbar dark>
                          <v-toolbar-title v-text="item.orderID" />
                        </v-toolbar>
                      </v-card-title>
                      <v-card-text class="mx-5">
                        <v-row>
                          <v-text class="black--text title">Customer Name:</v-text>
                          <v-text
                            class="black--text mx-3 mt-2"
                          >{{item.custFName + " " + item.custLName }}</v-text>
                        </v-row>
                        <v-row class="mt-2">
                          <v-divider />
                        </v-row>
                        <v-row class="mt-4">
                          <v-text class="black--text title">Order Date:</v-text>
                          <v-text class="black--text mx-3 mt-2">{{item.date}}</v-text>
                        </v-row>

                        <v-row class="mt-2">
                          <v-divider />
                        </v-row>

                        <v-row>
                          <v-text class="black--text title">Order Contents</v-text>
                        </v-row>

                        <v-row>
                          <v-simple-table height="100px">
                            <thead>
                              <th class="text-left">Name</th>
                              <th>Category</th>
                              <th>Price</th>
                            </thead>

                            <tbody>
                              <tr v-for="product in item.cartData" :key="product.name">
                                <td>{{product.name}}</td>
                                <td>{{product.category}}</td>
                                <td>{{product.stanPrice}}</td>
                              </tr>
                            </tbody>
                          </v-simple-table>
                        </v-row>

                        <v-row>
                          <v-text class="black--text title">Order Price:</v-text>
                          <v-text class="black--text mx-3 mt-2">${{item.orderPrice}}</v-text>
                        </v-row>
                        <v-row class="mt-2">
                          <v-divider />
                        </v-row>
                        <v-row>
                          <v-text class="black--text title">Shipping Address:</v-text>
                          <v-text class="black--text mx-3 mt-1">
                            <strong>Name:</strong>
                            {{item.shippingAddress.fName + " " +item.shippingAddress.lName}}
                            <br />
                            <strong>Company Name:</strong>
                            {{item.shippingAddress.companyName}}
                            <br />
                            <strong>Address:</strong>
                            {{item.shippingAddress.address + ", "+item.shippingAddress.apt}}
                          </v-text>
                        </v-row>
                        <v-row class="mt-2">
                          <v-divider />
                        </v-row>
                        <v-row>
                          <v-text class="black--text title">Order Status:</v-text>
                          <v-text class="black--text mx-3 mt-2">{{item.status}}</v-text>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </template>
              </v-data-table>
            </v-card-text>
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
import Vue from "vue";

export default {
  components: {
    AdminToolBar
  },
  data() {
    return {
      products: [],
      search: "",
      headers: [
        {
          text: "Order ID",
          align: "left",
          sortable: false,
          //Name of the element in the array.
          value: "orderID"
        },
        {
          text: "Status",
          sortable: false,
          value: "status"
        },
        {
          text: "Customer name",
          value: "fullName",
          sortable: true
        },
        {
          text: "Shipping Address",
          value: "shippingAddress.address"
        },
        {
          text: "Total Price",
          value: "orderPrice",
          sortable: true
        },
        {
          text: "Date",
          value: "date",
          sortable: true
        },
        {
          text: "Controls",
          value: "actions",
          sortable: false
        },

        { text: "", value: "data-table-expand" }
      ],
      Orders: []
    };
  },
  methods: {
    getOrderData() {
      var fullList = [];
      var tempOrder = null;

      db.collection("Orders")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            tempOrder = doc.data();
            tempOrder["orderID"] = doc.id;
            tempOrder["fullName"] =
              doc.data().custFName + " " + doc.data().custLName;
            fullList.push(tempOrder);
          });
        })
        .catch(error => {
          console.log("error: " + error);
        });

      this.Orders = fullList;
    },
    completeOrder(test) {
      if (confirm("Are you sure order: " + test.orderID + " is complete?")) {
        db.collection("Orders")
          .doc(test.orderID)
          .update({
            status: "Complete"
          });
        alert("Order: " + test.orderID + " has been updated.");
      }
      this.getOrderData();
    }
  },
  beforeMount() {
    this.getOrderData();
  }
};
</script>