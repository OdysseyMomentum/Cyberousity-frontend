<template>
<div>
<!--  Write a post -->
  <v-row justify="center">
    <v-col align="center">
        <v-toolbar
            dense
            elevation="1"
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
    <Thread :content="{thread}"></Thread>
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
          this.threads = res;
        }

      }).catch(e => {
        console.log(e);
        this.$store.dispatch(AUTH_LOGOUT);
    })
  },
  data: () => ({
    threads: []
  }),
  methods: {
    goTo(path) {
      this.$router.push({path})
    }
  }

}
</script>

<style scoped>

</style>