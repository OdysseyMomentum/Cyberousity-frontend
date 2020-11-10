<template>
  <v-container fluid>
    <!-- Header -->
    <v-row justify="center">
      <v-col class="pt-0">
        <h1> Sign up</h1>
      </v-col>
<!--  Close    -->
      <v-col align="right" class="pt-0 pr-4">
        <v-btn icon @click="close">
          <v-icon medium> mdi-close-thick </v-icon>
        </v-btn>

      </v-col>
    </v-row>

    <!-- Register area -->
    <v-form
        class="mb-2"
        ref="form"
        v-model="valid"
        lazy-validation>


<!--  First name and last name  -->
      <v-row>
        <v-col class="pt-0 pb-0">
          <v-text-field
            v-model="details.fname"
            :rules="[v => !!v || 'First name is required']"
            placeholder="First name"
            filled
            required
          ></v-text-field>
        </v-col>
        <v-col class="pt-0 pb-0">
          <v-text-field
            v-model="details.lname"
            :rules="[v => !!v || 'Last name is required']"
            placeholder="Last name"
            filled
            required
          ></v-text-field>
        </v-col>
      </v-row>


<!--  Email    -->
      <v-row justify="center">
        <v-col class="pt-0 pb-0">
          <v-text-field
            v-model="details.email"
            :rules="rules.email"
            placeholder="E-mail"
            filled
          ></v-text-field>
        </v-col>

      </v-row>


<!-- Password -->
      <v-row justify="center">
        <v-col class="pt-0 pb-0">
          <v-text-field
              v-model="details.password"
              :rules="rules.password"
              type="password"
              placeholder="Password"
              filled
          ></v-text-field>
        </v-col>

      </v-row>

<!--   Date   -->
      <v-row justify="center">
        <v-col class="pt-0 pb-0">
          <v-select
              v-model="details.date.month"
              :items="selectors.months"
              :rules="[v => !!v || 'Required']"
              placeholder="Month"
              filled
              color="primary"
          ></v-select>
        </v-col>
        <v-col class="pt-0 pb-0">
          <v-select
              v-model="details.date.day"
              :items="days"
              :rules="[v => !!v || 'Required']"
              placeholder="Day"
              filled
              color="primary"
          ></v-select>
        </v-col>
        <v-col class="pt-0 pb-0">
          <v-select
              v-model="details.date.year"
              :items="years"
              :rules="[v => !!v || 'Required']"
              placeholder="Year"
              filled
              color="primary"
          ></v-select>
        </v-col>
      </v-row>

<!--   Gender   -->
      <v-radio-group
          v-model="details.gender"
          row
          label="Gender"
          :rules="[v => !!v || 'Required']"
      >
        <v-radio
            label="Male"
            value="male"
            color="primary"
        ></v-radio>

        <v-radio
            label="Female"
            value="female"
            color="primary"
        ></v-radio>
      </v-radio-group>


      <!-- Policy  -->
      <v-row justify="center">
      </v-row>
<!--   Submit   -->
      <v-row justify="center">
        <v-btn
            @click="validate"
            large depressed
            color="secondary"
            min-width="30%"
            :disabled="!valid"
            v-if="!isRegistering"
        >
          Sign up
        </v-btn>
        <!-- Loading -->
        <v-btn
            large depressed
            min-width="30%"
            disabled
            v-if="isRegistering"
        >
          <v-progress-circular
              indeterminate
              color="white"
          ></v-progress-circular>
        </v-btn>
      </v-row>

    </v-form>



  </v-container>
</template>

<script>
export default {
  name: "Register",

  computed: {
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1900}, (value, index) => 1901 + index).reverse()
    },
    days () {
      return [...Array(31).keys()].map((x) => {return ++x;});
    }
  },

  data: () => ({
    valid: true,
    data: {},
    isRegistering: false,

    selectors: {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },

    // Credential details
    details: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      date: {
        day: '',
        month: '',
        year: ''
      },
      gender: '',
    },

    // Validation rules
    rules: {
      password: [v => !!v || 'Password is required'],
      email: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    },
  }),

  methods: {
    close() {
      this.$emit('close');
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.register();
      }
    },
    register() {
      this.isRegistering = true;
      // Standardise the date
      let stdDate = new Date(parseInt(this.details.date.year), this.selectors.months.indexOf(this.details.month), parseInt(this.details.date.day));
      // Sign up
      this.axios.post(this.$apiURI + 'users/signup', {
        fname: this.details.fname,
        lname: this.details.lname,
        email: this.details.email,
        password: this.details.password,
        birthday: stdDate,
        gender: this.details.gender,
      })
      .then(res => {
        if (res.status === 201) {
          console.log('User was registered!');
        }
        this.login(this.details);
        this.close();
      }).catch(e => {
        console.log('Failed to sign up ' + e);
        this.isRegistering = false;
      });
    }, // Automatic login
    login(details) {
      this.isLoggingIn = true;
      // Login
      this.axios.post(this.$apiURI + 'users/login', {
        email: details.email,
        password: details.password
      }).then(res => {
        if (res.status === 200) {
          console.log('User was logged in!');
        }
        this.isRegistering = false;
      }).catch(e => {
        console.log('Login failed!' + e);
        this.isRegistering = false;
      });
    }
  }
}
</script>

<style scoped>

</style>