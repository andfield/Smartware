<template>
  <v-app>
      <LandingPage />
      <!-- <Home /> -->
  </v-app>
</template>

<script>
import Home from './views/Home';
import LandingPage from './views/LandingPage'

export default {
  name: 'App',
  components: {
    Home,
    LandingPage,
  },
};
</script>
