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
        lazy-validation>

<!--   Email   -->
      <v-row justify="center">
        <v-text-field
            v-model="details.email"
            :rules="rules.email"
            placeholder="E-mail"
            filled
        ></v-text-field>
      </v-row>

    <!--  Password -->
      <v-row justify="center">
        <v-text-field
            v-model="details.password"
            type="password"
            :rules="rules.password"
            placeholder="Password"
            filled
        ></v-text-field>
      </v-row>

<!--  Submit -->
      <v-row justify="center">
        <v-btn
            @click="validate"
            large depressed
            color="primary"
            min-width="100%"
            :disabled="!valid"
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

    // Credential details
    details: {
      email: '',
      password: '',
    },

    // Validation rules
    rules: {
      password: [v => !!v || 'Password is required'],
      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    },

    select: null,
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
  }
}
</script>
