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
            placeholder="E-mail"
            filled
            required
        ></v-text-field>
      </v-row>
      <v-row justify="center">
        <v-text-field
            v-model="password"
            type="password"
            :rules="passwordRules"
            placeholder="Password"
            filled
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
    <v-row justify="center">
        <a class="main-text"> Forgot password? </a>
    </v-row>



  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    isRegistering: false,
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    select: null,
    isLazy: false,
  }),
  methods: { // TODO remove loggings
    validate () {
      console.log({
        email: this.email,
        password: this.password
      })
    },
  }
}
</script>
