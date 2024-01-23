<template>
    <div>
     <FlexList></FlexList>
    </div>
  </template>
  
  <script>
  import FlexList from '../components/FlexList.vue'; 
  
  export default {
    name: 'NajamScreen',
    components: {

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
  }
  </style>    
  