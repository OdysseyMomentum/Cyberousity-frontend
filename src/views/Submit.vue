<template>
<div>
  <NavigationBar />
  <v-container class="pt-10">
    <v-row justify="center">
      <v-col align="center">
        <ThreadEditor :width="formWidth" />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
import ThreadEditor from "@/components/ThreadEditor";
export default {
  name: "Submit",
  components: {ThreadEditor, NavigationBar},
  computed: {
    formWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 350
        case 'sm': return 400
        case 'md': return 576
        case 'lg': return 600
        case 'xl': return 642
      }
      return 1000
    }
  },
}
</script>

<style scoped>

</style>