<template>
  <v-app>
    <v-main>
        <router-view />
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