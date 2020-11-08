<template>
  <div class="home">
    <NavigationBar />
    <WelcomeSign />
  </div>
</template>

<script>
// @ is an alias to /src

import NavigationBar from "@/components/NavigationBar";
import WelcomeSign from "@/components/WelcomeSign";


export default {
  name: 'Home',
  components: {
    WelcomeSign,
    NavigationBar
  }
}
</script>
