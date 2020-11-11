<template>
<div>
  <NavigationBar />
  <ThreadEditor />
</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
import ThreadEditor from "@/components/ThreadEditor";
export default {
  name: "Submit",
  components: {ThreadEditor, NavigationBar}
}
</script>

<style scoped>

</style>