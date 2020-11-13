<template>
<div>
  <v-sheet
      elevation="4"
      color="white"
      rounded="lg"
      class="pa-10"
      :width="this.width"
  >
<!--  Progress  -->
    <v-row>
      <v-col>
        <v-progress-linear :value="this.page/this.numPages * 100"></v-progress-linear>
      </v-col>
    </v-row>


    <div v-if="this.page === 1">
      <FirstDetailsForm :report="report" />
    </div>

    <div v-if="this.page === 2">
      <SecondDetailsForm :report="report" />
    </div>

    <div v-if="this.page === 3">
      <FormThird :report="report" />
    </div>

    <div v-if="this.page === 4">
      <FourthForm :report="report" />
    </div>

    <div v-if="this.page === 5">
      <FinalForm :report="report" />
    </div>

    <!--  NEEEXXT    -->
    <!-- Divider -->
    <v-row class="pa-6">
      <v-divider></v-divider>
    </v-row>

    <!-- Next area -->
    <v-row justify="center">
      <v-btn
          large depressed
          color="secondary"
          min-width="30%"
          @click="back"
          class="ma-1"
          v-if="page !== 1 && page !== numPages - 1"
      >
        Back
      </v-btn>
      <v-btn
          large depressed
          color="primary"
          min-width="30%"
          @click="next"
          class="ma-1"
          v-if="page < numPages - 2"
      >
        Next
      </v-btn>
      <v-btn
          large depressed
          color="primary"
          min-width="30%"
          @click="submit"
          class="ma-1"
          v-if="page === numPages - 2"
      >
        Submit
      </v-btn>
      <v-btn
          large depressed
          color="primary"
          min-width="30%"
          @click="goHome"
          class="ma-1"
          v-if="page === numPages - 1"
      >
        Go home
      </v-btn>
    </v-row>
  </v-sheet>

</div>
</template>

<script>
import report from "@/models/forms/report";
import FirstDetailsForm from "@/components/report/FirstForm";
import SecondDetailsForm from "@/components/report/SecondForm";
import FormThird from "@/components/report/ThirdForm";
import FourthForm from "@/components/report/FourthForm";
import FinalForm from "@/components/report/FinalForm";
import {USER_REQUEST} from "@/store/actions/user";

export default {
name: "Report",
  components: {FinalForm, FourthForm, FormThird, SecondDetailsForm, FirstDetailsForm},
  props: ['width'],
  data: () => ({
    report: report,
    details: report.details,
    rules: report.rules,
    items: report.items,
    numPages: 6,
    page: 1,
    width: 0
  }),
  methods: {
    next() {
      this.page = (this.page + 1) % this.numPages
    },
    back() {
      this.page = (this.page - 1) % this.numPages
    },
    submit() {
      this.details.scammerRequestedPayment = this.details.scammerRequestedPayment !== "";
      this.details.paymentCompleted = this.details.paymentCompleted !== "";
      this.next();
      this.$store.dispatch(USER_REQUEST, {method: 'post', data: this.details, url: `${this.$apiURI}reports`})
        .then(() => {
          console.log('Form submitted!');
        }).catch(() => {console.log('Failure')});
    },
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>