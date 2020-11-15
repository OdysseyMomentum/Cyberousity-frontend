<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="picture"
    >
    </v-img>
    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle class="pb-0">
      {{ subtitle }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div> {{ description }} </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        text
        depressed
      >
        Read more
      </v-btn>

      <v-btn
        color="secondary"
        text
        depressed
      >
        Share
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "WikiContainer",
  props: ['title', 'subtitle', 'description', 'picture']
}
</script>

<style scoped>

</style>
