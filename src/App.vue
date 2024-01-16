<template>
  <div id="app">
    <NavigationComponent />

    <HomeScreenBackgroundImage>
     <WelcomeSection></WelcomeSection>
    </HomeScreenBackgroundImage>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue';
import HomeScreenBackgroundImage from './components/HomeScreenBackgroundImage.vue';
import WelcomeSection from './components/WelcomeSection.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    HomeScreenBackgroundImage,
    WelcomeSection,
  },
};
</script>
