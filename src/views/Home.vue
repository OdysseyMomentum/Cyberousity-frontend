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
            <LoginPad />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
// @ is an alias to /src

// import NavigationBar from "@/components/outline/NavigationBar";
import WelcomeSign from "@/components/outline/WelcomeSign";
import LoginPad from "@/components/AccessPad";

export default {
  name: 'Home',
  components: {
    LoginPad,
    WelcomeSign,
    // NavigationBar
  }
}
</script>
