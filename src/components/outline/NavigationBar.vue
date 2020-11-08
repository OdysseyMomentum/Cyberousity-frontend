<template>
  <v-app-bar>
    <v-row id="nav" class="d-none d-lg-flex d-xl-flex d-md-flex d-sm-flex">
      <v-col cols="8">
        <v-btn @click="goTo('/')" color="primary" text medium> Home </v-btn>
        <v-btn @click="goTo('/about')" color="primary" text medium> About </v-btn>
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
    goTo(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style scoped>

</style>