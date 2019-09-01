<template>
    <v-toolbar color="yellow">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Smartware</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>About</v-btn>
        <v-btn flat>Contact</v-btn>
        <v-btn flat>Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  data: {
    show: true,
  }
};

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
