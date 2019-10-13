<template>
  <v-carousel height="300px" cycle :interval="3000" show-arrows-on-hover hide-delimiter-background>
    <v-carousel-item v-for="image in images" :key="image.title">
      <v-sheet height="100%">
        <v-img :src="image.src" :aspect-ratio="16/9" height="300px">
          <v-row class="fill-height" align="center" justify="center">
            <div justify-center>
              <h3 class="display-3 font-weight-bold" v-text="image.title"></h3>
            </div>
          </v-row>
        </v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import LandingAbout from "./LandingAbout";
export default {
  components: {
    LandingAbout
  },
  data() {
    return {
      images: [
        {
          title: "We are Local to the Bay of Plenty ",

          src: "https://i.imgur.com/nepYSvk.jpg"
        },
        {
          title: " We provide Free basic programming",

          src: "https://i.imgur.com/nepYSvk.jpg"
        },
        {
          title: "Pos Softwares for clever stores",

          src: "https://i.imgur.com/nepYSvk.jpg"
        }
      ]
    };
  }
};
</script>