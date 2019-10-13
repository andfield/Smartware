<template>
  <div class="about">
    <LandingNav />
    <v-container>
      <v-layout class="justify-center">
        <v-flex xs12 md12 sm12 lg10 xl10>
          <v-row>
            <Carousel />
          </v-row>

          <v-row>
            <v-layout row wrap class="justify-center">
              <v-flex class="mx-4 my-10" xs12 sm12 md8 lg7 xl7>
                <v-card flat>
                  <v-card-text>
                    <v-row>
                      <h3 class="display-2 font-weight-medium black--text">About Us</h3>
                    </v-row>
                    <v-row>
                      <p class="body-2 mx-3 my-5 black--text">
                        Smartware was founded to provide small to medium sized businesses with cost efficient Point Of Sale options, we see a space to simplify the process and save our customers time and money. We saw the current struggles businesses face with point of sale systems, from affordability to functionality. As a result, we focus on our customers needs and deliver friendly, intuitive, user-friendly options and forward-thinking solutions to help business survive in a competitive market.
                        <br />
                        <br />Smartwares online store was built for the average business that may not have the resources or know-how to implement a point of sale. Many solutions on the market are difficult to install, have minimal capabilities, or are too expensive. Our POS offerings are user friendly and we provide streamlined support to deliver highly-functional cost effective POS to empower small businesses in a difficult market.
                        <br />
                        <br />We are committed to a high level of user experience to increase customer satisfaction and adoption. We work closely with our customers to continually provide solutions and support for their needs. We are always willing to adapt our products to customer feedback and changing needs of the market, and continually improving.
                      </p>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex class="mx-10 my-10" xs12 md4 lg4 xl3>
                <v-card flat>
                  <v-card-text>
                    <v-row>
                      <h3 class="display-2 font-weight-medium black--text">Our Partners</h3>
                    </v-row>

                    <v-row v-for="partner in partners" :key="partner.name">
                      <v-card flat>
                        <v-card-title>
                          <v-app-bar flat dark>
                            <v-toolbar-title>{{partner.name}}</v-toolbar-title>
                          </v-app-bar>
                        </v-card-title>
                        <v-card-text>{{partner.desc}}</v-card-text>
                      </v-card>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-row>

          <NavFooter />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import NavFooter from "../components/NavFooter";
import LandingNav from "../components/LandingNav";

export default {
  components: {
    Carousel,
    NavFooter,
    LandingNav
  },
  data() {
    return {
      partners: [
        {
          name: "EFTPOS Bay of Plenty",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis. Sit amet nulla facilisi morbi. Vitae congue mauris rhoncus aenean. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Risus at ultrices mi tempus imperdiet nulla malesuada. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Odio ut sem nulla pharetra diam sit. Id leo in vitae turpis. Cras semper auctor neque vitae. Placerat vestibulum lectus mauris ultrices eros in cursus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet justo donec enim diam. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Iaculis at erat pellentesque adipiscing commodo. Integer vitae justo eget magna."
        },
        {
          name: "EFTPOS Bay of Plenty",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis. Sit amet nulla facilisi morbi. Vitae congue mauris rhoncus aenean. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Risus at ultrices mi tempus imperdiet nulla malesuada. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Odio ut sem nulla pharetra diam sit. Id leo in vitae turpis. Cras semper auctor neque vitae. Placerat vestibulum lectus mauris ultrices eros in cursus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet justo donec enim diam. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Iaculis at erat pellentesque adipiscing commodo. Integer vitae justo eget magna."
        },
        {
          name: "EFTPOS Bay of Plenty",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis. Sit amet nulla facilisi morbi. Vitae congue mauris rhoncus aenean. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Risus at ultrices mi tempus imperdiet nulla malesuada. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Odio ut sem nulla pharetra diam sit. Id leo in vitae turpis. Cras semper auctor neque vitae. Placerat vestibulum lectus mauris ultrices eros in cursus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet justo donec enim diam. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Iaculis at erat pellentesque adipiscing commodo. Integer vitae justo eget magna."
        }
      ]
    };
  }
};
</script>