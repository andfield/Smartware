<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="display-2 text-xs-center ma-5">Our Services</v-flex>
    </v-layout>
    <v-layout row wrap class="mb-5">
      <v-flex xs12 sm12 md4 v-for="service in services" :key="service.title">
        <v-card dark height="300px" width="auto" class="justify-space-between" hover>
          <v-responsive>
            <v-img :src="service.src" height="200px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">{{ service.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">{{service.title}}</h3>
              <div>{{service.desc}}</div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          title: "Local to the Bay of Plenty ",
          desc: "Offering local buisnesses onsite service and support.",
          src:
            "https://www.bayofplentynz.com/content/homebanner/534/470/0778698001522120905.jpg?1522121007"
        },
        {
          title: "Free programming",
          desc: "We provide basic programming with every register.",
          src:
            "https://ujg1i3ze1133y9zav35eixy117m-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/iPad-register_turn-your-ipad-into-a-cash-register-3-769x513.jpg"
        },
        {
          title: "Pos Softwares for clever stores",
          desc:
            "Vend is point-of-sale, inventory and customer software retailers love to use. No fees. No Commitment. No Credit Card",
          src:
            "https://ujg1i3ze1133y9zav35eixy117m-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/iPad-register-payment_turn-your-ipad-into-a-cash-register-769x513.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>