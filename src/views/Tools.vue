<template>
<div>
  <NavigationBar />
  <Slider :slides="slides" />
  <h2 class="display-2 font-weight-bold ma-3"> Top used tools </h2>
  <ToolContainer title="Website word checker" description="Test for cyber related words used in the website" caption="Very useful!">
    <Scraper />
  </ToolContainer>
</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
import Slider from "@/components/outline/home/Slider";
import ToolContainer from "@/components/outline/ToolContainer";
import Scraper from "@/components/tools/Scraper";
export default {
name: "Tools",
  components: {Scraper, ToolContainer, Slider, NavigationBar},
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
