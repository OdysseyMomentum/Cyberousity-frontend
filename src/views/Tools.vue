<template>
<div>
  <NavigationBar />
  <Slider :slides="slides" />
</div>
</template>

<script>
import NavigationBar from "@/components/outline/NavigationBar";
import Slider from "@/components/outline/home/Slider";
export default {
name: "Tools",
  components: {Slider, NavigationBar},
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
