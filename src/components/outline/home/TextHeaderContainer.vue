<!--class="grey lighten-3"-->
<template>
  <section
      id="features"
      class="color-shade-light"
  >
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>

      <v-responsive
          class="mx-auto mb-12"
          width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
            v-for="({ icon, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4"
        >
          <TextTile :title="title" :icon="icon" :text="text" />
        </v-col>
      </v-row>
    </v-container>
    <div class="py-12"></div>
  </section>
</template>

<script>
import TextTile from "@/components/outline/home/TextTile";
export default {
  name: "TextHeaderContainer",
  components: {TextTile},
  props: ['features', 'title'],

}
</script>

<style scoped>

</style>