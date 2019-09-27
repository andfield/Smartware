<template>
  <v-carousel height="300px" cycle :interval="3000" show-arrows-on-hover hide-delimiter-background>
    <v-carousel-item v-for="image in images" :key="image.name">
      <!-- <v-responsive>
        <v-img :src="image.src" >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              <span class="headline" v-text="image.desc"></span>
            </div>
          </v-row>
        </v-img>
      </v-responsive>-->
      <v-card dark height="300px" width="auto" class="justify-space-between" hover>
        <v-responsive>
          <v-img :src="image.src" height="200px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">{{ image.name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
        </v-responsive>
        <v-card-text>
          <div>
            <h3 class="headline mb-0">{{image.name}}</h3>
            <div>{{image.desc}}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          name: "Local to the Bay of Plenty ",
          desc: "Offering local buisnesses onsite service and support.",
          src:
            "https://www.bayofplentynz.com/content/homebanner/534/470/0778698001522120905.jpg?1522121007"
        },
        {
          name: "Free programming",
          desc: "We provide basic programming with every register.",
          src:
            "https://ujg1i3ze1133y9zav35eixy117m-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/iPad-register_turn-your-ipad-into-a-cash-register-3-769x513.jpg"
        },
        {
          name: "Pos Softwares for clever stores",
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