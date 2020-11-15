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
name: "Wiki",
  components: {Slider, NavigationBar},
  data: () => ({
    slides: [
      {
        title: 'Were you cyber-attacked?',
        description: 'We are a community of companies, private individuals, IT-specialists, and the police helping one-another to combat cybercrime.',
        picture: ''
      },
      {
        title: 'Do you wish protect to yourself?',
        description: 'Try the security check-list to see if your system is safe. Easy-to-use guides and extensions are provided as solutions.',
        picture: ''
      },
      {
        title: 'What are the current risks?',
        description: 'Visualizations of the hottest cyber-attack trends can be be found here. Access our API and get real-time access to the anonymously reported incidents.',
        picture: ''
      },
      {
        title: 'Do you wish to get involved?',
        description: 'We are open-source: Everyone can contribute: Use our the datasets from our API and come up with new data-analysis tools. You may even suggest new features to the code.',
        picture: ''
      },
  ]
  })
}
</script>

<style scoped>

</style>
