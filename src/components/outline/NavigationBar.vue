<template>
    <div>
<!--      User prominent for cool effect -->
      <v-toolbar
          light
          color=""
          class="lighten-0"
      >
        <v-img max-width="300" :src="require('@/assets/pictures/logo.svg')" />

<!--        <v-app-bar-nav-icon>-->
<!--        </v-app-bar-nav-icon>-->

        <v-toolbar-title>
          <v-btn color="primary" class="ml-2" @click="goTo('/')"  medium> Home </v-btn>
          <v-btn color="primary" class="ml-2" @click="goTo('/report')"  medium> Report </v-btn>
          <v-btn color="primary" class="ml-2" @click="goTo('/tools')"  medium> Tools </v-btn>
          <v-btn color="primary" class="ml-2" @click="goTo('/feed')"  medium> Forum </v-btn>
          <v-btn color="primary" class="ml-2" @click="goTo('/wiki')"  medium> Wiki </v-btn>
          <v-btn color="primary" class="ml-2" @click="goTo('/help')"  medium> Get help </v-btn>

        </v-toolbar-title>

        <v-spacer></v-spacer>
          <v-text-field
              hide-details
              color="primary"
              prepend-icon="mdi-magnify"
              single-line
              placeholder="Search"
          ></v-text-field>
        <v-spacer></v-spacer>

        <v-btn color="primary" class="ml-2" @click="goTo('/login')"  medium> Login </v-btn>
        <v-btn color="primary" @click="logout" icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
</template>

<script>
import {AUTH_LOGOUT} from "@/store/actions/auth";

export default {
name: "NavigationBar",
  methods: {
    goTo(path) {
      this.$router.push({ path })
    },
    logout() {
      this.$store.dispatch(AUTH_LOGOUT);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>
