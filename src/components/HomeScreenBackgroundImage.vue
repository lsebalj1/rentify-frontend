<template>
    <div class="background-image">
      <slot></slot>
    </div>
</template>
  
  <style scoped>
  .background-image {
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  </style>
  