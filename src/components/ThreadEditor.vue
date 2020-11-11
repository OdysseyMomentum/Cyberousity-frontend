<template>
  <v-sheet
    rounded
    outlined
    elevation="1"
    :width="this.width"
  >
    <v-container fluid>
      <!-- Header -->
      <v-row justify="center">
        <v-col class="pt-0">
          <h1> Write a post</h1>
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


        <!--  Title  -->
        <v-row>
          <v-col class="pt-0 pb-0">
            <v-text-field
                v-model="details.title"
                :rules="[v => !!v || 'Title is required']"
                placeholder="Title"
                filled
            ></v-text-field>
          </v-col>
        </v-row>


        <!--  Content    -->
        <v-row justify="center">
          <v-col>
            <v-textarea
                v-model="details.body"
                :rules="[v => !!v || 'Content is required']"
                filled
                color="primary"
                name="input-7-4"
                label="What is on your mind?"
            ></v-textarea>
          </v-col>

        </v-row>

        <!--   Submit   -->
        <v-row justify="center">
          <v-btn
              @click="validate"
              large depressed
              color="secondary"
              min-width="30%"
              :disabled="!valid"
              v-if="!isPosting"
          >
            Post
          </v-btn>
          <!-- Loading -->
          <v-btn
              large depressed
              min-width="30%"
              disabled
              v-if="isPosting"
          >
            <v-progress-circular
                indeterminate
                color="white"
            ></v-progress-circular>
          </v-btn>
        </v-row>

      </v-form>
    </v-container>
  </v-sheet>
</template>

<script>
import {USER_REQUEST} from "@/store/actions/user";
import {AUTH_LOGOUT} from "@/store/actions/auth";

export default {
  name: "ThreadEditor",
  props: ['width'],
  data: () => ({
    valid: true,
    isPosting: false,

    details: {
      title: '',
      body: '',
    }
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.post();
      }
    },
    post() {
      this.isPosting = true;
      this.$store.dispatch(USER_REQUEST, {
        method: 'post',
        data: this.details,
        url: `${this.$apiURI}threads`
      }).then(() => {
        this.isPosting = false;
        this.close();
      }).catch(e => {
        this.isPosting = false;
        console.log(e);
        this.$store.dispatch(AUTH_LOGOUT);
      })
    },
    close() {
      this.$router.push('/feed');
    }
  }
}
</script>

<style scoped>

</style>