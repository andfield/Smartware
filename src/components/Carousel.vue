<template>
  <v-carousel height="300px" cycle :interval="3000" show-arrows-on-hover hide-delimiter-background>
    <v-carousel-item v-for="image in images" :key="image.name">
      <v-sheet height="100%" >
        <v-img
          :src="image.src"
          :aspect-ratio="16/9"
          height="300px"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3"><span class="headline" v-text="image.desc"></span></div>
          </v-row>
        </v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [{name: "spiderman", src:'https://wallpapercave.com/wp/aqm17QD.jpg', desc: 'Hey Guys I am spidy'},
               {name: "spuerman", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqgq8X7RKIZT7KC_mV1Z37VObpYeS3EPziGIRy_Ec1BuML7OP", desc: "Hey Earth peeps I am super" },
               {name: "dory", src: "http://wallpapersdsc.net/wp-content/uploads/2015/10/Finding_Dory_2.jpg", desc: "Have u seen Nemo?" }]
    };
  }
};
</script>