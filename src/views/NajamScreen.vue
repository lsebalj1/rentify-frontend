<template>
    <div>
     <FlexList></FlexList>
    </div>
  </template>
  
  <script>
  import FlexList from '../components/FlexList.vue'; 
  import NavigationComponent from '../components/NavigationComponent.vue';
  
  export default {
    name: 'NajamScreen',
    components: {
      NavigationComponent,
      FlexList,
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap');
  #app {
      font-family: 'Sora', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: lightcyan;
    background-color: #2c3e50;
  }
  </style>    
  