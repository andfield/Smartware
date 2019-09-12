<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
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
    About,
  },
};
</script>