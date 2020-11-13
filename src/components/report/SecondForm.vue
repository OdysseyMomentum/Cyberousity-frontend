<template>
  <!-- Question one -->
  <div>
    <v-row justify="center">
      <h2> {{ items.problemCategory.label }} </h2>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-select
            v-if="details.victimType==='Myself' || details.victimType==='Someone else'"
            class="ma-1"
            outlined
            color="primary"
            v-model="details.problemCategory"
            :items="items.problemCategory.values"
            label="Select one"
        ></v-select>
        <v-select
            v-if="details.victimType === 'A business/organisation'"
            class="ma-1"
            outlined
            color="primary"
            v-model="details.problemCategory"
            :items="items.problemCategoryOrganisation.values"
            label="Select one"
        ></v-select>
      </v-col>
    </v-row>

<!--  Conditional reports  -->
    <div v-if="details.victimType==='Myself' || details.victimType==='Someone else'">
      <SpecificationForm v-if="details.problemCategory === 'An impersonator'" :model="details.problemSpecification" :specifier="items.problemSpecification.impersonator"/>
      <SpecificationForm v-if="details.problemCategory === 'Job or opportunity to gain money'" :model="details.problemSpecification" :specifier="items.problemSpecification.job"/>
      <SpecificationForm v-if="details.problemCategory === 'Phone, Internet, TV service'" :model="details.problemSpecification" :specifier="items.problemSpecification.phone"/>
      <SpecificationForm v-if="details.problemCategory === 'Health'" :model="details.problemSpecification" :specifier="items.problemSpecification.health"/>
  <!--    <SpecificationForm v-if="details.problemCategory === 'Disturbing calls'" :model="details.problemSpecification" :specifier="items.problemSpecification.phone"/>-->
      <SpecificationForm v-if="details.problemCategory === 'Prize, lottery'" :model="details.problemSpecification" :specifier="items.problemSpecification.prize"/>
      <SpecificationForm v-if="details.problemCategory === 'Auto sale, repair'" :model="details.problemSpecification" :specifier="items.problemSpecification.autoSaleRepair"/>
      <SpecificationForm v-if="details.problemCategory === 'Credit debt'" :model="details.problemSpecification" :specifier="items.problemSpecification.credit"/>
    </div>
    <div v-if="details.victimType === 'A business/organisation'">
      <SpecificationForm v-if="details.problemCategory === 'Bank Account'" :model="details.problemSpecification" :specifier="items.problemSpecification.bank"/>
      <SpecificationForm v-if="details.problemCategory === 'Hacking, viruses or malware'" :model="details.problemSpecification" :specifier="items.problemSpecification.hacking"/>
      <SpecificationForm v-if="details.problemCategory === 'Fraud by employees'" :model="details.problemSpecification" :specifier="items.problemSpecification.fraudEmployees"/>
      <SpecificationForm v-if="details.problemCategory === 'Fraud by customers'" :model="details.problemSpecification" :specifier="items.problemSpecification.fraudCustomers"/>
      <SpecificationForm v-if="details.problemCategory === 'Business identity theft'" :model="details.problemSpecification" :specifier="items.problemSpecification.businessIdentityTheft"/>
      <SpecificationForm v-if="details.problemCategory === 'Buying goods or services'" :model="details.problemSpecification" :specifier="items.problemSpecification.buyingGoodsServices"/>
      <SpecificationForm v-if="details.problemCategory === 'Payment card fraud or credit debt (for example: credit collection, debt report, loan etc.)'" :model="details.problemSpecification" :specifier="items.problemSpecification.paymentCard"/>
<!--      <SpecificationForm v-if="details.problemCategory === 'Financial investment'" :model="details.problemSpecification" :specifier="items.problemSpecification.financialInvestment"/>-->
    </div>


  </div>
</template>

<script>

import report from "@/models/forms/report";
import SpecificationForm from "@/components/report/SpecificationForm";

export default {
  name: "SecondDetailsForm",
  components: {SpecificationForm},
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