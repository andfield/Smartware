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
                show-expand
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
                  <v-icon @click="completeOrder(item)" v-if="item.status === 'Pending'"
                    class="mr-2"
                    color="success"
                  >done_outline</v-icon>

                  <v-icon @click="test2()" color="primary">remove_red_eye</v-icon>
                </template>

                <template v-slot:expanded-item="{ headers }">
                  <!-- put the products in this td  -->
                  <td ></td>
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
import Vue from 'vue'

export default {
  components: {
    AdminToolBar
  },
  data() {
    return {
      products: [],
      expanded: [],
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
    getOrderData(){
      var fullList = []
      var tempOrder = null

      db.collection("Orders").get().then(snapshot => {
        snapshot.forEach(doc =>{
          tempOrder = doc.data()
          tempOrder["orderID"] = doc.id
          tempOrder["fullName"] = doc.data().custFName + " " + doc.data().custLName
          fullList.push(tempOrder)
        })
      })
      .catch(error =>{
          console.log("error: " + error)
        })

      this.Orders = fullList
    },
    completeOrder(test){
      if(confirm("Are you sure order: " + test.orderID + " is complete?")){
        db.collection("Orders").doc(test.orderID).update({
          status: "Complete"
        })
        alert("Order: " + test.orderID + " has been updated.")
      }
      this.getOrderData()
    },
    test2(){
      console.log("eye button")
    }
  },
  beforeMount(){
    this.getOrderData();
  }
};
</script>