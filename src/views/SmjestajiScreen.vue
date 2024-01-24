<template>
    <div>
     <SmjestajFlexList></SmjestajFlexList>
    </div>
  </template>
  
  <script>
  import SmjestajFlexList from '../components/SmjestajFlexList.vue'; 
  
  export default {
    name: 'SmjestajiScreen',
    components: {
      SmjestajFlexList,
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
  