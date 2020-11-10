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
            v-if="!isLoggingIn"
        >
          Login
        </v-btn>
        <!-- Loading -->
        <v-btn
            large depressed
            min-width="100%"
            disabled
            v-if="isLoggingIn"
        >
          <v-progress-circular
              indeterminate
              color="white"
          ></v-progress-circular>
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
    isLoggingIn: false,
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
      if(this.$refs.form.validate()) {
        this.login(this.details);
      }
    },
    login(details) {
      this.isLoggingIn = true;
      // Login
      this.axios.post(this.$apiURI + 'users/login', {
        email: details.email,
        password: details.password
      }).then(res => {
        if (res.status === 200) {
          console.log('User was logged in!');
          this.isLoggingIn = false;
        }
      }).catch(e => {
        console.log('Login failed!' + e);
        this.isLoggingIn = false;
      });
    }
  }
}
</script>
