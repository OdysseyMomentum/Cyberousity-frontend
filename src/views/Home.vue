<template>
  <div class="home ">

    <NavigationBar />

<!--    <NavigationBar />-->
    <Slider :slides="slides" />

    <TextTileContainer width="670" :features="features" title="What our community offers" />

    <Invitation />

    <Footer class="mt-10" />


<!--    Footer -->

  </div>
</template>

<script>
// @ is an alias to /src

import Slider from "@/components/outline/home/Slider";
import Invitation from "@/components/outline/home/Invitation";
import Footer from "@/components/outline/home/Footer";
import TextTileContainer from "@/components/outline/home/TextTileContainer";
import NavigationBar from "@/components/outline/NavigationBar";

export default {
  name: 'Home',
  components: {
    NavigationBar,
    TextTileContainer,
    Footer,
    Invitation,
    Slider
    // NavigationBar
  },
  data: () => ({
    features: [
      {
        icon: 'mdi-account-group-outline',
        title: 'Get help',
        text: 'Reaction: recommend specialists to companies based on the problem \n' +
              ', Provide regular check-ups\n' +
              ', Users can submit checkup tools, published analysis tools on the cybercrime-data trends**',
        picture: 'https://i.ibb.co/zbvPG4W/Vibrant-Community.png'
      },
      {
        icon: 'mdi-update',
        title: 'Reporting',
        text: 'The reporting helps the community to stay aware of the current trends and keep the tools up to date and it also ' +
          'allows the community reach out for each other either anonymously or directly.',
        picture: 'https://i.ibb.co/0yJHys4/Long-Term-Support.png'
      },
      {
        icon: 'mdi-shield-outline',
        title: 'Data-tools',
        text: 'The community includes many specialists and open source developers which use our free public API to write very handy tools for protection and' +
          ' spotting dangerous trends.',
        picture: 'https://i.ibb.co/ZTmKyKc/Frequent-Updates.png'
      },
    ],
    slides: [
      {
        title: 'Were you cyber-attacked?',
        description: 'We are a community of companies, private individuals, IT-specialists, and the police helping one-another to combat cybercrime.',
        picture: ''
      },
      {
        title: 'Do you wish protect yourself?',
        description: 'Try the security check-list to see if your system is safe. Easy-to-use guides and extentions are provided as solutions.',
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
