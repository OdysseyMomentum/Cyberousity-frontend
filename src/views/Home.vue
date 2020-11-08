<template>
  <div class="home">
    <NavigationBar />
    <WelcomeSign header="Welcome to Cyberousity!" caption="Help the community to protected each other from cyber crime"/>
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
