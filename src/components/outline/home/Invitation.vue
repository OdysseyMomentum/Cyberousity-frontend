<template>
  <v-lazy
      v-model="isActive"
      :options="{
          threshold: .9
        }"
      min-height="200"
      transition="slide-x-transition"
  >
    <v-sheet
        light
        color="shade"
        class="pt-0"
    >
      <v-container class="pt-0">
        <!--  Motivation to login  -->
        <v-row>
          <v-col align-self="center">
            <v-row>
              <h2 class="display-2 font-weight-bold mb-3"> Join the community </h2>
            </v-row>
            <v-row>
              <h2 class="font-weight-regular darken-2">
                There is a lot of cyber crime happening affecting everybody and we need your help.
              </h2>
            </v-row>
          </v-col>

          <v-col class="">
            <AccessPad width="100%" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-lazy>
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