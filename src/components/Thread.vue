<template>
<v-card :width="this.width">
  <v-card-title> {{ thread.title }} </v-card-title>
  <v-card-text> {{ thread.body }} </v-card-text>
</v-card>
</template>

<script>
export default {
  name: "Thread",
  props: ['thread', 'width'],
  created() {
  }
}
</script>

<style scoped>

</style>