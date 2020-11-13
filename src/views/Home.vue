<template>
  <div class="home">
<!--    <NavigationBar />-->
    <WelcomeSign header="Welcome to Cyberousity!" caption="Help the community to protected each other from cyber crime"/>
    <v-sheet
        light
        color="shade"
    >
      <v-container>
        <!--  Motivation to login  -->
        <v-row>
          <v-col align-self="center">
            <v-row>
              <h1 class="font-weight-medium"> Join the community </h1>
            </v-row>
            <v-row>
              <h2 class="font-weight-regular darken-2">
                There is a lot of cyber crime happening affecting everybody and we need your help.
              </h2>
            </v-row>
          </v-col>

          <v-col class="pa-10">
            <AccessPad />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
<!--    Footer -->
    <v-footer
        dark
        padless
    >
      <v-card
          flat
          tile
          color="primary"
          class="lighten-1 white--text text-center"
          width="100%"
      >
        <v-card-text>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Cyberousity</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src

import WelcomeSign from "@/components/outline/WelcomeSign";
import AccessPad from "@/components/auth/AccessPad";

export default {
  name: 'Home',
  components: {
    AccessPad,
    WelcomeSign,
    // NavigationBar
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  })
}
</script>
