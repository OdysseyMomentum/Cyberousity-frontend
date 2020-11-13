<template>
  <div>
    <v-row justify="center">
      <h2> {{ specifier.question }}</h2>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-select
            class="ma-1"
            outlined
            color="primary"
            v-model="this.model"
            :items="specifier.answers"
            label="Select one"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "SpecificationForm",
  props: ['specifier', 'model'],
  data: () => ({
    model: this.model,
    specifier: this.specifier
  })
}
</script>

<style scoped>

</style>