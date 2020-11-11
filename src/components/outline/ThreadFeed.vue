<template>
<div>
<!--  Write a post -->
  <v-row justify="center">
    <v-col align="center">
        <v-toolbar
            dense
            elevation="1"
            :width="postWidth"
        >
          <v-text-field
              @click="goTo('/submit')"
              placeholder="Write a post"
              color="primary"
              hide-details
              prepend-icon="mdi-account-circle"
              single-line
          ></v-text-field>

          <v-btn icon>
            <v-icon>mdi-attachment</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
    </v-col>
  </v-row>

<!-- Load all the threads -->
  <v-row v-for="thread in this.threads" :key="thread._id">
    <v-col align="center">
      <Thread :thread="thread" :width="postWidth"></Thread>
    </v-col>
  </v-row>
</div>
</template>

<script>
import {USER_REQUEST} from "@/store/actions/user";
import Thread from "@/components/Thread";
import {AUTH_LOGOUT} from "@/store/actions/auth";

export default {
name: "ThreadFeed",
  components: {Thread},
  created() {
    this.$store.dispatch(USER_REQUEST, {method: 'get', url: `${this.$apiURI}threads`})
      .then(res => {
        if (res) {
          console.log('Threads received!')
          this.threads = res.data;
        }
      }).catch(e => {
        console.log("Could not load the threads: " + e);
        this.$store.dispatch(AUTH_LOGOUT);
    })
  },
  data: () => ({
    threads: []
  }),
  computed: {
    postWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 350
        case 'sm': return 400
        case 'md': return 400
        case 'lg': return 400
        case 'xl': return 642
      }
      return 1000
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({path})
    }
  }

}
</script>

<style scoped>

</style>