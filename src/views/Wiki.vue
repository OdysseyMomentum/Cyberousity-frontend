<template>
<div>
  <NavigationBar />
  <FancyHeader
    picture="https://img.freepik.com/free-photo/white-paper-canvas-texture-background-design-backdrop-overlay-design_1962-68.jpg?size=626&ext=jpg"
    header="The community Wiki"
   caption="Prevention is an important part of dealing with cybercrime. Especially, because the human error is the main source of damage. On this page, users will find a crowd-sourced wiki with articles on, and other educational ressources."
  />
  <h2 class="display-2 font-weight-bold ma-3"> Top articles </h2>
  <v-container class="d-flex justify-center">
    <v-col>
      <WikiContainer
        picture="https://images.rics.org/publishedmedia/exwhvbx08u6y65thzb4f/Scam_cybercrime.jpg"
        title="How to protect yourself and your money"
        subtitle="Protecting yourself from crime is not always a trivial task and can cost money, this article will help you to learn the necessary skills"
      />
    </v-col>
    <v-col>

    </v-col>
  </v-container>
</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
import WikiContainer from "@/components/outline/WikiContainer";
import FancyHeader from "@/components/outline/FancyHeader";
export default {
name: "Wiki",
  components: {FancyHeader, WikiContainer, NavigationBar},
  data: () => ({
  })
}
</script>

<style scoped>

</style>
