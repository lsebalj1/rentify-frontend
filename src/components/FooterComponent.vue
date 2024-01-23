<template>
    <footer class="footer">
      <div class="container">
        <p>
          {{ projectName }} | Created by {{ creatorName }} 
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projectName: 'Rentify',
        creatorName: 'Luka Šebalj',
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: rgba(210, 203, 203, 0.9);
    color: #214c55;
    padding: 10px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>
  