<template>
    <div class="top-content">    	
        <div class="inner-bg">
            <div class="container">
    	
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 text">
                        <h1>Welecome to <strong>Smartware</strong></h1>
                            <div class="description">
                            	<p>
	                            	We provide the best <strong>EFTPOS solutions</strong> 
                                    in the Bay of Plenty region
                            	</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-sm-5">
                        	
                        	<div class="form-box">
	                        	<div class="form-top">
	                        		<div class="form-top-left">
	                        			<h3>Login to our site</h3>
	                            		<p>Enter username and password to log on:</p>
	                        		</div>
	                        		<div class="form-top-right">
	                        			<i class="fa fa-key"></i>
	                        		</div>
	                            </div>
	                            <div class="form-bottom">
				                    <form role="form" action="" method="post" class="login-form">
				                    	<div class="form-group">
				                    		<v-text-field label="Email" 
											outlined />
				                        </div>
				                        <div class="form-group">
				                        	<v-text-field v-model="loginPass" 
											:append-icon="show1 ? 'visibility' : 'visibility_off'" 
				                        	:rules="[rules.required, rules.min]"
											:type="show1 ? 'text' : 'password'"
											name="LoginPassword"
											label="Password"
											hint="At least 8 characters"
											counter
											outlined
											@click:append="show1 = !show1">
				                        	</v-text-field>
										</div>
				                        <v-btn block color="blue" dark>Sign in</v-btn>
				                    </form>
			                    </div>
		                    </div>
                        </div>          
                        <div class="col-sm-1 middle-border"></div>
                        <div class="col-sm-1"></div>
  	
                        <div class="col-sm-5">
                        	<div class="form-box">
                        		<div class="form-top">
	                        		<div class="form-top-left">
	                        			<h3>Sign up now</h3>
	                            		<p>Fill in the form below to get instant access:</p>
	                        		</div>
	                        		<div class="form-top-right">
	                        			<i class="fa fa-pencil"></i>
	                        		</div>
	                            </div>
	                            <div class="form-bottom">
				                    <form role="form" action="" method="post" class="registration-form">
				                    	<div class="form-group">
				                    		<v-text-field label="First Name" 
											outlined />
				                        </div>
				                        <div class="form-group">
				                        	<v-text-field label="Last Name" 
											outlined />
				                        </div>
				                        <div class="form-group">
				                        	<v-text-field label="Email" 
											outlined />
				                        </div>
				                        <div class="form-group">
				                        	<v-text-field label="Phone No" 
											outlined />
				                        </div>
										<div class="form-group">
				                        	<v-text-field v-model="loginPass" 
											:append-icon="show1 ? 'visibility' : 'visibility_off'" 
				                        	:rules="[rules.required, rules.min]"
											:type="show1 ? 'text' : 'password'"
											name="LoginPassword"
											label="Password"
											hint="At least 8 characters"
											counter
											outlined
											@click:append="show1 = !show1">
				                        	</v-text-field>
										</div>
				                        <v-btn block color="blue" dark>Sign me up!!</v-btn>
				                    </form>
			                    </div>
                        	</div>
                        	
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data() {
		return{
			show1: false,
			password: 'Password',
			rules: {
				required: value => !!value || 'Required.',
				min: v => v.length >= 8 || 'Min 8 characters',
			}
		}
	}
}
</script>

<style scoped>

body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #888;
    line-height: 30px;
    text-align: center;
}

strong { font-weight: 500; }

a, a:hover, a:focus {
	color: #19b9e7;
	text-decoration: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
}

h1, h2 {
	margin-top: 10px;
	font-size: 38px;
    font-weight: 100;
    color: #555;
    line-height: 50px;
}

h3 {
	font-size: 22px;
    font-weight: 300;
    color: #555;
    line-height: 30px;
}
.inner-bg {
    padding: 60px 0 80px 0;
}

.top-content{
	background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg");
	background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover;
	position: relative;
}

.top-content .text {
	color:#57544c;
}

.top-content .text h1 { color: #57544c; }

.top-content .description {
	margin: 20px 0 10px 0;
}

.top-content .description p { opacity: 1.8; }

.form-box {
	margin-top: 70px;
}

.form-top {
	overflow: hidden;
	padding: 0 25px 15px 25px;
	background: #fff;
	-moz-border-radius: 4px 4px 0 0; -webkit-border-radius: 4px 4px 0 0; border-radius: 4px 4px 0 0;
	text-align: left;
}

.form-top-left {
	float: left;
	width: 75%;
	padding-top: 25px;
}

.form-top-left h3 { margin-top: 0; }

.form-top-right {
	float: left;
	width: 25%;
	padding-top: 5px;
	font-size: 66px;
	color: #ddd;
	line-height: 100px;
	text-align: right;
}

.form-bottom {
	padding: 25px 25px 30px 25px;
	background: #eee;
	-moz-border-radius: 0 0 4px 4px; -webkit-border-radius: 0 0 4px 4px; border-radius: 0 0 4px 4px;
	text-align: left;
}

.form-bottom form textarea {
	height: 100px;
}

.form-bottom form button.btn {
	width: 100%;
}

.form-bottom form .input-error {
	border-color: #19b9e7;
}

.middle-border {
	min-height: 300px;
	margin-top: 170px;
	border-right: 1px solid #fff;
	border-right: 1px solid rgba(255, 255, 255, 0.6);
}

</style>