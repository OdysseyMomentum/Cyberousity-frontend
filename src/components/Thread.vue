<template>
<v-card>
  <v-card-title> {{ content.title }} </v-card-title>
  <v-card-text> {{ content.body }} </v-card-text>
</v-card>
</template>

<script>
export default {
  name: "Thread",
  props: ['content']
}
</script>

<style scoped>

</style>