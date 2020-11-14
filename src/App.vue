<template>
  <v-app :style="cssProps">
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
  computed: {
    cssProps() {
      const themeColors = {}
      Object.keys(this.$vuetify.theme.themes.light).forEach((color) => {
        themeColors[`--v-${color}-light`] = this.$vuetify.theme.themes.light[color]
      })
      Object.keys(this.$vuetify.theme.themes.dark).forEach((color) => {
        themeColors[`--v-${color}-dark`] = this.$vuetify.theme.themes.dark[color]
      })
      return themeColors
    }
  }
};
</script>

<style>
.color-primary-light {
  background-color: var(--v-primary-light);
}

.color-secondary-light {
  background-color: var(--v-secondary-light);
}

.color-shade-light {
  background-color: var(--v-shade-light);
}
</style>