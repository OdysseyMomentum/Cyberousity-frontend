<template>
  <div class="home">
    <NavigationBar />
    <WelcomeSign header="Welcome to Cyberousity!" caption="Help the community to protected each other from cyber crime"/>
    <LoginPad />
  </div>
</template>

<script>
// @ is an alias to /src

import NavigationBar from "@/components/outline/NavigationBar";
import WelcomeSign from "@/components/outline/WelcomeSign";
import LoginPad from "@/components/outline/LoginPad";

export default {
  name: 'Home',
  components: {
    LoginPad,
    WelcomeSign,
    NavigationBar
  }
}
</script>
