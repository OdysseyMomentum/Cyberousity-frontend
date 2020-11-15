<template>
<div>
  <NavigationBar />
  <FancyHeader
    header="Assistance from experts and specialists"
   caption="Get help certified IT-specialists: retounely check-ups, request unannounced penetration-tests & more. You may also want to directly reach out to the police of your department here."
  />
</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
import FancyHeader from "@/components/outline/FancyHeader";
export default {
  name: "Help",
  components: {FancyHeader, NavigationBar}
}
</script>

<style scoped>

</style>
