<template>
  <div class="home color-shade-light">

    <NavigationBar />

<!--    <NavigationBar />-->
    <WelcomeSign header="Welcome to Cyberousity!" caption="We are a community of companies, private individuals, IT-specialists, and the police helping one-another to combat cybercrime."/>

    <TextTileContainer width="670" :features="features" title="What our community offers" />

    <Invitation />

    <Footer />


<!--    Footer -->

  </div>
</template>

<script>
// @ is an alias to /src

import WelcomeSign from "@/components/outline/home/WelcomeSign";
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
    WelcomeSign,
    // NavigationBar
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    features: [
      {
        icon: 'mdi-account-group-outline',
        title: 'Vibrant Community',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        picture: ''
      },
      {
        icon: 'mdi-update',
        title: 'Frequent Updates',
        text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
        picture: ''
      },
      {
        icon: 'mdi-shield-outline',
        title: 'Long-term Support',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        picture: ''
      },
    ],
  })
}
</script>
