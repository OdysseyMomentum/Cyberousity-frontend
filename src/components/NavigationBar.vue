<template>
  <v-app-bar>
    <v-row id="nav" class="d-none d-lg-flex d-xl-flex d-md-flex d-sm-flex">
      <v-col cols="8">
        <router-link to="/"><v-btn color="primary" text medium> Home </v-btn></router-link>
        <router-link to="/about"><v-btn color="primary" text medium> About </v-btn></router-link>
      </v-col>
      <!-- The login button -->
      <v-col cols="4" align="right">
        <v-btn color="primary" text medium @click="overlay = !overlay"> Login </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
name: "NavigationBar",
  methods: {
  }
}
</script>

<style scoped>

</style>