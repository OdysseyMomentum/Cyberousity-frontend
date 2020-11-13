<template>
  <div>
    <v-row justify="center">
      <h2> Do you have any further information or comments? </h2>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-textarea
            v-model="details.furtherComments"
            filled
            color="primary"
            label="Optional"
        ></v-textarea>
      </v-col>
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