<template>
<div>
    <v-sheet
        elevation="4"
        color="white"
        rounded="lg"
        class="pa-10"
    >
        <!-- Login here -->
      <v-row>
        <Login />
      </v-row>

      <!-- Divide register and login -->
      <v-row class="pa-6">
        <v-divider></v-divider>
      </v-row>

      <!-- Register area -->
      <v-row justify="center">
        <v-btn
            @click="isRegistering = true"
            large depressed
            color="secondary"
            min-width="60%"
        >
          Create account
        </v-btn>
      </v-row>
    </v-sheet>

  <!-- Registering overlay here -->
  <v-overlay color="white" :value="isRegistering">
    <v-sheet
        elevation="4"
        light
        rounded="lg"
        class="pa-5"
    >
      <Register @close="close" />
    </v-sheet>
  </v-overlay>

</div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
name: "AccessPad",
  components: {Register, Login},
  created() {

  },
  data: () => ({
    isRegistering: false,
  }),
  methods: {
    close() {
      this.isRegistering = false
    },
  }
}
</script>

<style scoped>
</style>