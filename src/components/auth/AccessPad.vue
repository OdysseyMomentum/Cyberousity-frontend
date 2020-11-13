<template>
<div>
    <v-sheet
        elevation="4"
        color="white"
        rounded="lg"
        class="pa-10"
        :width="this.width"
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
            @click="openRegister"
            large depressed
            color="secondary"
            min-width="60%"
        >
          Create account
        </v-btn>
      </v-row>
    </v-sheet>

  <!-- Registering overlay here -->
  <v-overlay color="white" :value="this.isRegisterOpen">
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
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

export default {
name: "AccessPad",
  components: {Register, Login},
  props: ['width'],
  created() {
    this.isRegisterOpen = false;
  },
  data: () => ({
    isRegisterOpen: false,
  }),
  methods: {
    close() {
      this.isRegisterOpen = false
    },
    openRegister() {
      this.isRegisterOpen = true
    }
  }
}
</script>

<style scoped>
</style>