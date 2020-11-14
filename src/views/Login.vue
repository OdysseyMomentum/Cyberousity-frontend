<template>
<div class="color-shade-light">
<v-container class="pt-12">
  <v-row justify="center">
    <v-col>
      <Invitation />
    </v-col>
  </v-row>
</v-container>
<div class="py-14" />
<Footer />
</div>
</template>

<script>
import Invitation from "@/components/outline/home/Invitation";
import Footer from "@/components/outline/home/Footer";
export default {
name: "Login",
  components: {Footer, Invitation},
  methods: {
    formWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        case 'sm': return 600
        case 'md': return 760
        case 'lg': return 600
        case 'xl': return 500
      }
      return 1000
    }
  }
}
</script>

<style scoped>

</style>
