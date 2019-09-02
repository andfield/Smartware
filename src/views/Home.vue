<template>
<v-app>
  <AppToolbar />
  <v-container>
      <v-layout class="justify-center">
          <v-flex xs12 lg10 xl10>
            <Carousel />
          </v-flex>
      </v-layout>

  </v-container> 
</v-app>
</template>

<script>
import AppToolbar from '../components/AppToolbar';
import AppFooter from '../components/AppFooter';
import Carousel from '../components/Carousel'
export default {
  components: {
    AppToolbar,AppFooter, Carousel
  },
};
</script>
