<template>
    <div>
     <DNajamFlexList></DNajamFlexList>
    </div>
  </template>
  
  <script>
  import DNajamFlexList from '../components/DNajamFlexList.vue'; 
  
  export default {
    name: 'DNajamScreen',
    components: {
      DNajamFlexList,
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
  