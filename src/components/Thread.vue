<template>
<v-card :width="this.width">
  <v-card-title> {{ thread.title }} </v-card-title>
  <v-card-subtitle align="left"> {{ userData.fname }} {{ userData.lname }}</v-card-subtitle>
  <v-card-text> {{ thread.body }} </v-card-text>
</v-card>
</template>

<script>
import {USER_REQUEST} from "@/store/actions/user";

export default {
  name: "Thread",
  props: ['thread', 'width'],
  created() {
    this.findUser(this.thread.author);
  },
  data: () => ({
    userData: {}
  }),
  methods: {
    findUser(id) {
      this.$store.dispatch(USER_REQUEST, {method: 'get', url: `${this.$apiURI}users/${id}`})
      .then(res => {
        console.log(res.data)
        this.userData =  res.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<style scoped>

</style>