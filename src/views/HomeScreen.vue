<template>
    <div id="app">
  
      <HomeScreenBackgroundImage>
       <WelcomeSection></WelcomeSection>
      </HomeScreenBackgroundImage>
      <HomeScreenContainers></HomeScreenContainers>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import NavigationComponent from '../components/NavigationComponent.vue';
  import HomeScreenBackgroundImage from '../components/HomeScreenBackgroundImage.vue';
  import WelcomeSection from '../components/WelcomeSection.vue';
  import HomeScreenContainers from '../components/HomeScreenContainers.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'HomeScreen',
    components: {
      NavigationComponent,
      HomeScreenBackgroundImage,
      WelcomeSection,
      HomeScreenContainers,
      Footer,
    },
  };
  </script>
  