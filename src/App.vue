<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>
import Home from './views/Home';
import LandingPage from './views/LandingPage'
import About from './views/About'

export default {
  name: 'App',
  components: {
    Home,
    LandingPage,
    About
  },
};
</script>