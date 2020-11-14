<!--class="grey lighten-3"-->
<template>
  <v-lazy
      v-model="isActive"
      :options="{
          threshold: .5
        }"
      min-height="200"
      transition="fade-transition"
  >
  <section
      class="color-shade-light"
  >
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3"> {{ title }} </h2>

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
  </v-lazy>
</template>

<script>
import TextTile from "@/components/outline/home/TextTile";
export default {
  name: "TextTileContainer",
  components: {TextTile},
  props: ['features', 'title'],
  data: () => ({
    isActive: false
  })
}
</script>

<style scoped>

</style>