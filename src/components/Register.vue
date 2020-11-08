<template>
  <v-container fluid>
    <!-- Header -->
    <v-row justify="center">
    </v-row>

    <!-- Login area -->
    <v-form
        class="mb-2"
        ref="form"
        v-model="valid"
        :lazy-validation="isLazy">
      <v-row justify="center">
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
      </v-row>
      <v-row justify="center">
        <v-text-field
            v-model="password"
            type="password"
            :rules="passwordRules"
            label="Password"
            required
        ></v-text-field>
      </v-row>
      <v-row justify="center">
        <v-btn
            @click="validate"
            large depressed
            color="primary"
            min-width="100%"
        >
          Login
        </v-btn>
      </v-row>

    </v-form>
    <!-- Register area -->
    <v-row justify="center">
      <a class="main-text"> Forgot password? </a>
    </v-row>

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

    <!-- Registering here -->
    <v-overlay color="white" :value="isRegistering">

    </v-overlay>
  </v-container>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>