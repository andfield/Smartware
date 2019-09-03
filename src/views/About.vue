<template>
  <div class="about">
    <AppToolbar />
    <v-container>
          <v-layout class="justify-center">
              <v-flex xs12 lg10 xl10>
                <Carousel />
              </v-flex>
          </v-layout>

    </v-container> 
    <v-container class="grey lighten-5">
      <v-row>
        <v-col :cols="1 === 1 ? 9 : 3">
          <h1>About Smartware</h1>
          <v-card min-height="100%">
            <v-card-text>
              <p>Smartware is the best.</p>
              <p>Github sucks.</p>
              <p>Sid should just do everything and carry us.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :cols="1 === 1 ? 3 : 9">
          <h1>Our Partners</h1>
          <v-card href="https://vuetifyjs.com/en/components/carousels#carousels" target>
            <v-img
              src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              aspect-ratio="1.5"
              contain
            ></v-img>
            <v-card-title>Company 1</v-card-title>
            <v-card-text>
              <p>This is hard af</p>
            </v-card-text>
          </v-card>
          <p></p>
          <v-card>
            <v-img
              src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              aspect-ratio="2"
              contain
            ></v-img>
            <v-card-title>Company 2</v-card-title>
            <v-card-text>
              <p>This is hard af</p>
            </v-card-text>
          </v-card>
          <p></p>
          <v-card>
            <v-img
              src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              aspect-ratio="2"
              contain
            ></v-img>
            <v-card-title>Company 3</v-card-title>
            <v-card-text>
              <p>This is hard af</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AppFooter />
  </div>
</template>

<script>
import AppToolbar from "../components/AppToolbar";
import AppFooter from "../components/AppFooter";
import Carousel from "../components/Carousel";

export default {
  components: {
    AppToolbar,
    AppFooter,
    Carousel
  }
};
</script>