<template>
  <!-- Question one -->
  <div>
    <v-row justify="center">
      <h2> Who are you reporting to?</h2>
    </v-row>
    <v-row justify="center">
      <v-radio-group
          mandatory
          v-model="details.victimType"
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
              label="A business/organisation"
              value="A business/organisation"
          ></v-radio>
        </v-btn>
      </v-radio-group>
    </v-row>
    <v-row justify="center">
      <h2> {{this.items.privacyLevel.label}} </h2>
    </v-row>
    <!--   PRIVACY   -->
    <v-row justify="center">
      <v-radio-group
          mandatory
          v-model="details.privacyLevel"
      >
        <v-btn
            class="ma-1"
            color="primary"
            outlined width="100%"
            v-for="(val, index) in items.privacyLevel.values"
            :key="val"
        >
          <v-radio
              :label="items.privacyLevel.tags[index]"
              :value="val"
          ></v-radio>
        </v-btn>
      </v-radio-group>
    </v-row>
    <BasicDetailsForm :report="this.report" />

    <v-row justify="center">
      <h2> Is the victim dutch?</h2>
    </v-row>
    <v-row justify="center">
      <v-radio-group
          mandatory
          row
          v-model="details.isDutchVictim"
      >
        <v-btn class="ma-1" color="primary" outlined width="100%">
          <v-radio
              label="Yes"
              :value="true"
          ></v-radio>
        </v-btn>
        <v-btn class="ma-1" color="primary" outlined width="100%">
          <v-radio
              label="No"
              :value="false"
          ></v-radio>
        </v-btn>
      </v-radio-group>
    </v-row>
  </div>
</template>

<script>

import report from "@/models/forms/report";
import BasicDetailsForm from "@/components/report/BasicDetailsForm";

export default {
  name: "FirstDetailsForm",
  components: {BasicDetailsForm},
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