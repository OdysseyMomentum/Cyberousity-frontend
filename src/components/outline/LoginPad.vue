<template>
<div>
  <v-sheet
      light
      color="shade"
  >
  <v-container>
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
          <v-card
              elevation="4"
              color="white"
              rounded="lg"
              class="pa-5"
          >
            <Login />
          </v-card>
        </v-col>
      </v-row>
  </v-container>
  </v-sheet>
</div>
</template>

<script>
import Login from "@/components/Login";
export default {
name: "LoginPad",
  components: {Login}
}
</script>

<style scoped>
.text {
  color: var(--v-primary-color)
}
</style>