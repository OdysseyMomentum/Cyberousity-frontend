<template>
<v-container>
  <v-row justify="center">
    <v-col>
      <AccessPad />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import AccessPad from "@/components/AccessPad";
export default {
name: "Login",
  components: {AccessPad}
}
</script>

<style scoped>

</style>