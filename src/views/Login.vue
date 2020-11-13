<template>
<v-container>
  <v-row justify="center">
    <v-col>
      <AccessPad :width="formWidth"/>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import AccessPad from "@/components/auth/AccessPad";
export default {
name: "Login",
  components: {AccessPad},
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