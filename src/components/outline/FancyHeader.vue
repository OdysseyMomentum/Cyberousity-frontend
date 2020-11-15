<template>
  <v-parallax  height="162" class="color-primary-light" >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          class="text-center "
          cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          {{ header }}
        </h1>
        <p class="subheading">
          {{ caption }}
        </p>
      </v-col>
    </v-row>

  </v-parallax>
</template>

<script>
export default {
name: "FancyHeader",
  props: ['header', 'caption', 'picture']
}
</script>

<style scoped>

</style>
