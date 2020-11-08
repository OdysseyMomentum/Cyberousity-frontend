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
        :lazy-validation="isLazy">


<!--  First name and last name  -->
      <v-row>
        <v-col class="pt-0 pb-0">
          <v-text-field
            v-model="firstName"
            :rules="nameRules"
            placeholder="First name"
            filled
            required
          ></v-text-field>
        </v-col>
        <v-col class="pt-0 pb-0">
          <v-text-field
            v-model="lastName"
            :rules="nameRules"
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
            v-model="email"
            :rules="emailRules"
            placeholder="E-mail"
            filled
            required
          ></v-text-field>
        </v-col>

      </v-row>


<!-- Password -->
      <v-row justify="center">
        <v-col class="pt-0 pb-0">
          <v-text-field
              v-model="password"
              type="password"
              :rules="passwordRules"
              placeholder="Password"
              filled
              required
          ></v-text-field>
        </v-col>

      </v-row>

<!--   Date   -->
      <v-row justify="center">
        <v-col class="pt-0 pb-0">
          <v-select
              :items="months"
              placeholder="Month"
              filled
              required
          ></v-select>
        </v-col>
        <v-col class="pt-0 pb-0">
          <v-select
              :items="days"
              placeholder="Day"
              filled
              required
          ></v-select>
        </v-col>
        <v-col class="pt-0 pb-0">
          <v-select
              :items="years"
              placeholder="Year"
              filled
              requried
          ></v-select>
        </v-col>
      </v-row>

<!--   Gender   -->
      <v-radio-group
          v-model="row"
          row
          label="Gender"
          required
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
        >
          Sign up
        </v-btn>
      </v-row>

    </v-form>



  </v-container>
</template>

<script>
export default {
  name: "Register",
  computed : {
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1900}, (value, index) => 1901 + index).reverse()
    }
  },
  data: () => ({
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days: [...Array(31).keys()].map((x) => {return ++x;}),
  }),
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>

</style>