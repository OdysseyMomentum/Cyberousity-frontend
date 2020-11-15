<template>
<v-col>

  <v-form
    class="mb-2"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-row justify="center">
      <v-text-field
        placeholder="Enter URL of the page"
        outlined
        required
        v-model="url"
      ></v-text-field>
    </v-row>
  </v-form>

<!-- Submitting -->
  <v-row justify="center">
    <v-btn
      @click="validate"
      large depressed
      color="primary"
      min-width="100%"
      :disabled="!valid"
      v-if="!isLoading"
    >
      Test
    </v-btn>
    <!-- Loading -->
    <v-btn
      large depressed
      min-width="100%"
      disabled
      v-if="isLoading"
    >
      <v-progress-circular
        indeterminate
        color="white"
      ></v-progress-circular>
    </v-btn>
  </v-row>

</v-col>
</template>

<script>
import testWebsite from '@/services/scraper/scraper'
export default {
name: "Scraper",
  data: () => ({
    valid: true,
    url: '',
    isLoading: false
  }),
  methods: {
    validate () {
      this.isLoading = true;
      if(this.$refs.form.validate()) {
        this.getOutput();
      }
      this.isLoading = false;
    },
    getOutput() {
      testWebsite(this.url);
    }
  }
}
</script>

<style scoped>

</style>
