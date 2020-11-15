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
        color="lighten-4 grey"

    >
      <v-container class="pt-0">
        <!--  Motivation to login  -->
        <v-row>
          <v-col class="pa-6" align-self="center">
            <v-row>
              <h2 class="display-2 font-weight-bold mb-3"> Join the community </h2>
            </v-row>
            <v-row>
              <h2 class="font-weight-regular darken-2">
                We are a community of companies, private individuals, IT-specialists, and the police helping one-another to combat cybercrime.
              </h2>
            </v-row>
          </v-col>

          <v-col class="ml-10">
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
  },
  data: () => ({
    isActive: false
  })
}
</script>

<style scoped>

</style>
