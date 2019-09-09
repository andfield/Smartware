<template>
  <div class="back">
    <v-container>
      <v-layout>
        <v-flex>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-row class="align-center justify-center">
                  <h1 class="text-justify">
                    Welecome to
                    <strong>Smartware</strong>
                  </h1>
                </v-row>
                <v-row class="align-center justify-center">
                  <p class="hidden-md-and-down">We provide best EFTPOS solution in Bay of plenty</p>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-divider class="hidden-md-and-up" />
            </v-row>
            <v-row row wrap class="my-10">
              <v-col cols="5" class="mx-auto">
                <v-card outlined max-width="500" class="mx-auto">
                  <v-card-title>
                    <h3>Login to our site</h3>
                    <p>Enter username and password to log on:</p>
                  </v-card-title>
                  <v-card-actions>
                    <v-text-field label="Email" v-model="loginEmail" outlined />
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field
                      v-model="loginPass"
                      :append-icon="show1 ? 'visibility' : 'visibility_off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="LoginPassword"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      outlined
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn block @click="login" color="blue" dark>Sign in</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="1" class="mx-auto">
                <v-divider class="hidden-md-and-down" vertical />
              </v-col>
              <v-col cols="5" class="mx-auto">
                <v-card outlined max-width="600" class="mx-auto">
                  <v-card-title>
                    <h3>Sign up now</h3>
                    <p>Fill in the form below to get instant access:</p>
                  </v-card-title>
                  <v-card-actions>
                    <v-text-field label="First Name" v-model="fname" outlined />
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field label="Last Name" v-model="lname" outlined />
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field label="Email" v-model="email" outlined />
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field label="Phone No" v-model="pnum" outlined />
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field
                      v-model="pass"
                      :append-icon="show2 ? 'visibility' : 'visibility_off'"
                      :rules="[rules.required, rules.min]"
                      :type="show2 ? 'text' : 'password'"
                      name="SignupPassword"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      outlined
                      @click:append="show2 = !show2"
                    ></v-text-field>
                  </v-card-actions>
                  <v-card-actions>
                    <v-btn @click="signUp" block color="blue" dark>Sign me up!!</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase, { functions } from 'firebase';
import db from '@/main'

export default {
    data() {
		return{
			show1: false,
			show2: false,
		 	rules: {
				required: value => !!value || 'Required.',
				min: v => v.length >= 8 || 'Min 8 characters',
			},
			fname: '',
			lname: '',
			email: '',
			pnum: '',
			pass: '',
			loginEmail: '',
			loginPass: '',
		}
	},
	methods: {
		signUp: function() {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.pass).then(
				(user) => {
					// this.$router.replace('home')
				},
				(err) => {
					alert('An error has occured: ' + err.message)
				}
			);
			var custData = {
				email: this.email,
				fName: this.fname,
				lName: this.lname,
				phNum: this.pnum
			};
			db.collection('customers').add(custData).then( this.$router.replace('home') );
		},
		login: function() {
			firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPass).then(
				(user) => {
					this.$router.replace('home')
				},
				function(err) {
					alert('Sign in failed. ' + err.message)
				}
			);
		}
	}
}
</script>

<style scoped>
.back{
  background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>