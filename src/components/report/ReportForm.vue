<template>
<div>
  <v-sheet
      elevation="4"
      color="white"
      rounded="lg"
      class="pa-10"
      :width="this.width"
  >
    <!-- Question one -->
    <v-row justify="center">
        <h2> Who are you reporting to?</h2>
    </v-row>
    <v-row justify="center">
      <v-radio-group
          mandatory
      >
        <v-btn class="ma-1" color="primary" outlined width="100%">
          <v-radio
              label="Myself"
              value="Myself"
          ></v-radio>
        </v-btn>
        <v-btn class="ma-1" color="primary" outlined width="100%">
          <v-radio
              label="Someone else"
              value="Someone else"
          ></v-radio>
        </v-btn>
        <v-btn class="ma-1" color="primary" outlined width="100%">
          <v-radio
              label="A business/organisation was attacked"
              value="A business/organisation was attacked"
          ></v-radio>
        </v-btn>
      </v-radio-group>
    </v-row>

    <!-- Divide register and login -->
    <v-row class="pa-6">
      <v-divider></v-divider>
    </v-row>

    <!-- Register area -->
    <v-row justify="center">
      <v-btn
          large depressed
          color="secondary"
          min-width="60%"
      >
        Next
      </v-btn>
    </v-row>
  </v-sheet>

</div>
</template>

<script>
import Report from "@/models/forms/report";

export default {
name: "Report",
  props: ['width'],
  data: () => ({
    contents: Report.contents,
    progress: 0
  }),
}
</script>

<style scoped>

</style>