<template>
<div>
  <NavigationBar />
    <v-col>
      <ThreadFeed />
    </v-col>
</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
import ThreadFeed from "@/components/outline/ThreadFeed";
export default {
name: "Feed.vue",
  components: {ThreadFeed, NavigationBar},
}
</script>

<style scoped>

</style>