<template>
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
          <AccessPad width="100%" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import AccessPad from "@/components/auth/AccessPad";

export default {
name: "Invitation",
  components: {
    AccessPad
  }
}
</script>

<style scoped>

</style>