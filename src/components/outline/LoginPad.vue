<template>
<div>
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

        <!-- Login here -->
        <v-col class="pa-10">
          <v-sheet
              elevation="4"
              color="white"
              rounded="lg"
              class="pa-5"
          >
            <Login />
          </v-sheet>
        </v-col>
      </v-row>

    <!-- Divide register and login -->
    <v-row class="pa-6">
      <v-divider></v-divider>
    </v-row>

    <!-- Register area -->
    <v-row justify="center">
      <v-btn
          @click="isRegistering = true"
          large depressed
          color="secondary"
          min-width="60%"
      >
        Create account
      </v-btn>
    </v-row>
  </v-container>
  </v-sheet>


  <!-- Registering here -->
  <v-overlay :value="isRegistering">
    <v-sheet
        elevation="4"
        light
        rounded="lg"
        class="pa-5"
    >
      <Register />
    </v-sheet>
  </v-overlay>

</div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
name: "LoginPad",
  components: {Register, Login},
  data: () => ({
    isRegistering: false
  }),
}
</script>

<style scoped>
</style>