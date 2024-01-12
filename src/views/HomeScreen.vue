<template>
    <div>
      <NavigationComponent />
  
      <HomeScreenBackgroundImage>
        <h1>Welcome to the Home Screen!</h1>
        <p>This is your home screen content.</p>
      </HomeScreenBackgroundImage>
    </div>
  </template>
  
  <script>
  import NavigationComponent from '../components/NavigationComponent.vue';
  import HomeScreenBackgroundImage from '../components/HomeScreenBackgroundImage.vue';
  
  export default {
    components: {
      NavigationComponent,
      HomeScreenBackgroundImage,
    },
  };
  </script>
  