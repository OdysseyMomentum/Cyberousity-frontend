<template>
<div>
  <NavigationBar />
  <Slider :slides="slides" />
  <h2 class="display-2 font-weight-bold ma-3"> Top used tools </h2>
  <v-container class="d-flex justify-center">
    <v-col>
      <ToolContainer title="Website word checker" description="Test for cyber crime related words used in the website" caption="Very useful!">
        <Scraper />
      </ToolContainer>
    </v-col>
    <v-col>
      <ToolContainer title="Cyber crime tracker" description="See the current trends!" caption="It is important to be careful!">
        <Trends />
      </ToolContainer>
    </v-col>
  </v-container>


</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
import Slider from "@/components/outline/home/Slider";
import ToolContainer from "@/components/outline/ToolContainer";
import Scraper from "@/components/tools/Scraper";
import Trends from "@/components/tools/Trends";
export default {
name: "Tools",
  components: {Trends, Scraper, ToolContainer, Slider, NavigationBar},
  data: () => ({
    slides: [
      {
        title: 'Protect yourself using open source tools',
        description: 'The community work together to develop these handy tools to fight cyber crime',
        picture: ''
      },
      {
        title: 'Are you an open source developer?',
        description: 'Write your own tool using our public API offering a huge datasets of reports and cyber crime related data, you can make a change!',
        picture: ''
      },
    ]
  })
}
</script>

<style scoped>

</style>
