<template>
  <div id="app">
    <NavigationComponent />
    <router-view/>

  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue';
import HomeScreenBackgroundImage from './components/HomeScreenBackgroundImage.vue';
import WelcomeSection from './components/WelcomeSection.vue';
import HomeScreenContainers from './components/HomeScreenContainers.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    //FlexList,
    HomeScreenBackgroundImage,
    WelcomeSection,
    HomeScreenContainers,
    Footer,
  },
};
</script>
