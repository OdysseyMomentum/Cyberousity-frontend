<template>
  <div v-if="details.privacyLevel === 'Non-Anonymous' ">
    <!--   Basic details   -->
    <v-row justify="center">
      <v-text-field
          placeholder="Name"
          outlined
          dense
          v-model="details.victimItems.name"
      ></v-text-field>
    </v-row>
    <v-row justify="center">
      <v-text-field
          placeholder="Country or region"
          outlined
          dense
          v-model="details.victimItems.country"
      ></v-text-field>
    </v-row>
    <v-row justify="center">
      <v-text-field
          placeholder="Province"
          outlined
          dense
          v-model="details.victimItems.province"
      ></v-text-field>
    </v-row>
    <v-row justify="center">
      <v-text-field
          placeholder="Address"
          outlined
          dense
          v-model="details.victimItems.address"
      ></v-text-field>
    </v-row>
    <v-row justify="center">
      <v-text-field
          placeholder="Zipcode"
          outlined
          dense
          v-model="details.victimItems.zip"
      ></v-text-field>
    </v-row>
    <v-row justify="center">
      <v-text-field
          placeholder="Phone number"
          outlined
          dense
          v-model="details.victimItems.phone"
      ></v-text-field>
    </v-row>
    <v-row justify="center">
      <v-text-field
          placeholder="Email address"
          outlined
          dense
          v-model="details.victimItems.email"
      ></v-text-field>
    </v-row>
<!--    <v-row justify="center">-->
<!--      <v-text-field-->
<!--          placeholder="Age"-->
<!--          outlined-->
<!--          dense-->
<!--          v-model="details.victimItems."-->
<!--      ></v-text-field>-->
<!--    </v-row>-->
  </div>

</template>

<script>

import report from "@/models/forms/report";

export default {
  name: "BasicDetailsForm",
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