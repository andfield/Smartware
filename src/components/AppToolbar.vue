<template>
    <v-app-bar app hide-on-scroll>
          <v-btn text
           to="/home"
          >
            <v-toolbar-title class="headline text-uppercase">
              <span>Smart</span>
              <span class="font-weight-light">ware</span>
            </v-toolbar-title>
          </v-btn>

      <v-spacer></v-spacer>

        <v-btn text
        to="/about"
        >
          <span>
            About
          </span>
          </v-btn>

        <v-btn text
         to=""
        >
          <span>
            Contact
          </span>
        </v-btn>

        <v-btn text
         to="login"
        >
          <span>
            Login
          </span>
        </v-btn>

    </v-app-bar>
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
