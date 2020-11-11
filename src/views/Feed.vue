<template>
<div>
  <NavigationBar />
</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
export default {
name: "Feed.vue",
  components: {NavigationBar},
  data: () => ({
    threads: []
  }),
}
</script>

<style scoped>

</style>