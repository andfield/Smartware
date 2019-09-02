<template>
<v-container>
  <v-layout row wrap>
    <v-flex xl12 xs12 lg12>
       <AppToolbar />
    </v-flex>
  </v-layout>
  
  <v-layout>
    <v-flex xl10 xs12 centered>
      <Carousel />
    </v-flex>
  </v-layout>
  
  <AppFooter />
</v-container> 
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
