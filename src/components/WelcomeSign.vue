<template>
<div>
  <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            class="text-center"
            cols="12"
        >
          <h1 class="display-1 font-weight-thin mb-4">
            Welcome to Cyberousity!
          </h1>
          <h4 class="subheading">
            Join our community against cyber crime
          </h4>
        </v-col>
      </v-row>
      <v-row
          class="pa-0"
      >
        <v-col align="center">
          <v-btn color="white" outlined> Report a crime </v-btn>
        </v-col>
      </v-row>

  </v-parallax>
</div>
</template>

<script>

export default {
name: "WelcomeSign",
  data: () => {
  }
}
</script>

<style scoped>

</style>