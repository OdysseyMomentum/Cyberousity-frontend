<template>
<div>
<!--      <v-row-->
<!--          align="center"-->
<!--          justify="center"-->
<!--      >-->
<!--        <v-col-->
<!--            class="text-center"-->
<!--            cols="12"-->
<!--        >-->
<!--          <h1 class="display-1 font-weight-thin mb-4">-->
<!--            {{ header }}-->
<!--          </h1>-->
<!--          <p class="subheading">-->
<!--            {{ caption }}-->
<!--          </p>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--      <v-row-->
<!--          class="pa-0"-->
<!--      >-->
<!--        <v-col align="center">-->
<!--          <v-btn @click="goTo('/login')" large color="white" outlined> Join the community </v-btn>-->
<!--        </v-col>-->
<!--      </v-row>-->
      <v-carousel

        light
        class="mt-5 mb-5"
        cycle
        continuous
      >
        <v-carousel-item
          v-for="{title, description} in slides"
          :key="title"
        >
          <v-sheet
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">
                {{ title }}
              </div>

              <div class="display-3 subtitle-1 text-center" style="width: 100%">
                {{ description }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
<!--    </v-overlay>-->

<!--  </v-parallax>-->

</div>
</template>

<script>

export default {
name: "Slider",
  props: ['caption' ,'header', 'slides'],
  methods: {
    goTo(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style scoped>

</style>
