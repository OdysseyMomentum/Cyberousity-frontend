<template>
  <div>
    <v-row justify="center">
      <h2> Provide the name of the scammer </h2>
    </v-row>
    <v-row justify="center">
      <v-text-field
          class="ma-4"
          placeholder="Name of scammer"
          v-model="details.scammerName"
          outlined
          label="Optional"
      ></v-text-field>
    </v-row>
    <v-row justify="center">
      <h2> How much money did the scammer ask for? </h2>
    </v-row>
    <v-row justify="center">
      <v-text-field
          class="ma-4"
          placeholder="Amount if any"
          v-model="details.scammerRequestedPayment"
          outlined
          label="Optional"
      ></v-text-field>
    </v-row>

  </div>
</template>

<script>

import report from "@/models/forms/report";

export default {
  props: ['report'],
  data: () => ({
    report: report,
    details: report.details,
    rules: report.rules,
    items: report.items,
  }),
}
</script>

<style scoped>

</style>