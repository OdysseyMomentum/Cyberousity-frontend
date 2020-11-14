<template>
  <v-card
      class="py-12 px-4"
      color="grey lighten-5"
      flat
  >
    <v-theme-provider dark>
      <div>
        <v-avatar
            color="primary"
            size="88"
        >
          <v-icon
              large
              v-text="icon"
          ></v-icon>
        </v-avatar>
      </div>
    </v-theme-provider>

    <v-card-title
        class="justify-center font-weight-black text-uppercase"
        v-text="title"
    ></v-card-title>

    <v-card-text
        class="subtitle-1"
        v-text="text"
    >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TextTile",
  props: ['title', 'text', 'icon']
}
</script>

<style scoped>

</style>