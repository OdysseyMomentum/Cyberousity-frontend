<template>
    <div>
<!--      User prominent for cool effect -->
      <v-toolbar
          dark
          color="primary"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-btn @click="goTo('/feed')" text medium> Home </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>
          <v-text-field
              hide-details
              prepend-icon="mdi-magnify"
              single-line
          ></v-text-field>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
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