<template>
  <v-app>
    <v-main>
      <v-content>
        <router-view />
      </v-content>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
};
</script>

<style>
  .main-text {
    color: var(--v-primary-base);
  }
</style>