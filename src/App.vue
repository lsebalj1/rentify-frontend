<template>
  <div id="app">
    <NavigationComponent />
    
   <!-- <HomeScreenBackgroundImage>
     <WelcomeSection></WelcomeSection>
    </HomeScreenBackgroundImage> -->
    <FlexList></FlexList>

  </div>
</template>

<script>
import FlexList from './components/FlexList.vue'; 
import NavigationComponent from './components/NavigationComponent.vue';
//import HomeScreenBackgroundImage from './components/HomeScreenBackgroundImage.vue';
//import WelcomeSection from './components/WelcomeSection.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FlexList,
    //HomeScreenBackgroundImage,
    //WelcomeSection,
  },
};
</script>
