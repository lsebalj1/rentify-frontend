<template>
    <div>
      <NavigationComponent />
  
      <HomeScreenBackgroundImage>
        <h1>DOBRODOŠLI U SVIJET UDOBNOSTI!</h1>
        <p>VAŠ PUT DO SAVRŠENOG SMJEŠTAJA ILI NAJMA POČINJE OVDJE</p>
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
  