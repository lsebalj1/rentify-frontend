<template>
    <div>
     <NajamFlexList></NajamFlexList>
    </div>
  </template>
  
  <script>
  import NajamFlexList from '../components/NajamFlexList.vue'; 
  
  export default {
    name: 'NajamScreen',
    components: {
      NajamFlexList,
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
  