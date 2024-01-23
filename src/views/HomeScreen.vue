<template>
    <div id="app">
  
      <HomeScreenBackgroundImage>
       <WelcomeSection></WelcomeSection>
      </HomeScreenBackgroundImage>
      <HomeScreenContainers></HomeScreenContainers>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  
  <script>
  import HomeScreenBackgroundImage from '../components/HomeScreenBackgroundImage.vue';
  import WelcomeSection from '../components/WelcomeSection.vue';
  import HomeScreenContainers from '../components/HomeScreenContainers.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  
  export default {
    name: 'HomeScreen',
    components: {
      HomeScreenBackgroundImage,
      WelcomeSection,
      HomeScreenContainers,
      FooterComponent,
    },
  };
  </script>
  