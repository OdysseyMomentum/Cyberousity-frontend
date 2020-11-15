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
<!-- Table -->
  <v-row justify="center">
    <v-col>

    <v-simple-table class="ma-6" v-if="isLoaded" dark >
        <thead>
        <tr>
          <th class="text-left">
            Word
          </th>
          <th class="text-left">
            Count
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in output"
          :key="item.word"
        >
          <td>{{ item.word }}</td>
          <td>{{ item.count }}</td>
        </tr>
        </tbody>
    </v-simple-table>
    </v-col>
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
    isLoading: false,
    output: [],
    isLoaded: false,
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
      this.output = testWebsite(this.url).histogram;
      console.log('output:' + this.output);
      this.isLoaded = true;
    }
  }
}
</script>

<style scoped>

</style>
