<template>
<div>
  <FancyHeader header="Report a crime" caption="You are not only helping yourself but you help also others by sharing"/>
  <v-container>
    <v-row justify="center">
      <v-col align="center">
        <ReportForm :width="formWidth"/>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import FancyHeader from "@/components/outline/FancyHeader";
import ReportForm from "@/components/report/ReportForm";
export default {
name: "Report",
  components: {FancyHeader, ReportForm},
  computed: {
    formWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        case 'sm': return 600
        case 'md': return 760
        case 'lg': return 664
        case 'xl': return 800
      }
      return 1000
    }
  },

}
</script>

<style scoped>

</style>