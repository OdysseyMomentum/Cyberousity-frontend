<template>
  <div>
    <v-card
      class="d-flex justify-center"
      flat
      tile
      elevation="4"
    >

        <!-- The text thingy   -->
      <v-card
        class="pa-0"
        :width="width/2"
      >
<!--   The avatar tand the text     -->
        <v-col cols="12">
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
        </v-col>
      </v-card>


<!-- Image -->
      <v-card
        class="pa-0"
        :width="width/2"
      >
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          height="100%"
          max-height=""
          :max-width="width/2"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-card>



    </v-card>
  </div>
</template>

<script>
export default {
  name: "TextTile",
  props: ['title', 'text', 'icon', 'width']
}
</script>

<style scoped>
.inline {
  display: inline-block
}
</style>
