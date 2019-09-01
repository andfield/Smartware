<template>
  <div class="about">
    <v-container class="grey lighten-5">
    <v-row>
      <v-col v-for="n in 1" :key="n" :cols="n === 1 ? 9 : 3">
  <v-card>
    <v-card-title>About Smartware</v-card-title>
    <v-card-text>
      <p></p>
      <p>Smartware is the best.</p>
      <p>Github sucks.</p>
      <p>Sid should just do everything and carry us.</p>
    </v-card-text>
  </v-card>
      </v-col>
      <v-col v-for="n in 1" :key="n" :cols="n === 1 ? 3 : 9">
<v-card>
  <v-img src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="2" contain>
  </v-img>
      <v-card-title>Company 1</v-card-title>
      <v-card-text>
        <p>This is hard af</p>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
