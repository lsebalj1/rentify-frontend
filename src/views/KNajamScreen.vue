<template>
    <div>
     <KNajamFlexList></KNajamFlexList>
    </div>
  </template>
  
  <script>
  import KNajamFlexList from '../components/KNajamFlexList.vue'; 
  
  export default {
    name: 'KNajamScreen',
    components: {
      KNajamFlexList,
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
  