<template>
<div>
  <v-row >
<!--    <Thread :content="threads[0]"></Thread>-->
  </v-row>
</div>
</template>

<script>
import {USER_REQUEST} from "@/store/actions/user";
// import Thread from "@/components/Thread";

export default {
name: "ThreadFeed",
  // components: {Thread},
  created() {
    this.$store.dispatch(USER_REQUEST, {method: 'get', url: `${this.$apiURI}threads`})
      .then(res => {
        if (res) {
          console.log('Threads received!')
          this.threads = res;
        }

      }).catch(e => {
        console.log(e);
    })
  },
  data: () => ({
    threads: []
  }),

}
</script>

<style scoped>

</style>