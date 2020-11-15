<!--class="grey lighten-3"-->
<template>
  <v-lazy
      v-model="isActive"
      :options="{
          threshold: .4
        }"
      min-height="200"
      transition="fade-transition"
  >
  <section
      class="lighten-4 grey"
  >
    <div class="py-12"></div>

    <v-container class="text-center" :width="width">
      <h2 class="display-2 font-weight-bold mb-3"> {{ title }} </h2>

      <v-responsive
          class="mx-auto mb-12"
          width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

        <v-row
            v-for="({ icon, title, text, picture }, i) in features"
            :key="i"
            justify="center"
        >
            <TextTile class="pb-10" :picture="picture" :title="title" :icon="icon" :text="text" :width="width" />
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
  props: ['features', 'title', 'width'],
  data: () => ({
    isActive: false
  })
}
</script>

<style scoped>

</style>
