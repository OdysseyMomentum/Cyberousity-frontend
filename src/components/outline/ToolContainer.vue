<template>
  <div>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-text>
      <div> {{  }} </div>
      <p class="display-1 text--primary">
        {{ title }}
      </p>
      <p> {{ caption }} </p>
      <div class="text--primary">
        {{ description }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        depressed
        color="secondary"
        @click="isUsing = true"
      >
        Try out
      </v-btn>
    </v-card-actions>

  </v-card>
    <!-- Registering overlay here -->
    <v-overlay color="white" :value="this.isUsing" absolute>
      <v-sheet
        width="1000"
        elevation="4"
        light
        rounded="lg"
        class="pa-5"
      >
        <!-- Header -->
        <v-row justify="center">
          <v-col class="pt-0">
            <h1> {{ title }} </h1>
          </v-col>
          <!--  Close    -->
          <v-col align="right" class="pt-0 pr-4">
            <v-btn icon @click="isUsing = false">
              <v-icon medium> mdi-close-thick </v-icon>
            </v-btn>

          </v-col>
        </v-row>

        <v-row>
          <slot></slot>
        </v-row>
      </v-sheet>
    </v-overlay>
  </div>
</template>

<script>
export default {
name: "ToolContainer",
  props: ['name', 'description', 'caption', 'title'],
  data: () => ({
    isUsing: false
  })
}

</script>

<style scoped>

</style>
