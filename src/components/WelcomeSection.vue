<template>
    <div class="welcome-section">
      <div class="background-box">
        <h1 class="huge-heading">DOBRODOŠLI U SVIJET UDOBNOSTI</h1>
        <p class="huge-text">VAŠ PUT DO SAVRŠENOG SMJEŠTAJA ILI NAJMA POČINJE OVDJE</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .welcome-section {
    background-color: rgba(244, 230, 230, 0.3); 
  }
  
  .background-box {
    padding: 20px;
    width: 100vh; 
  }

  .huge-heading{
    font-size: 4em; 
    color: black;
    font-weight: bold;
  }
  
  .huge-text {
    font-size: 2em; 
    color: black;
    font-weight: bold;
  }

  @media (max-width: 800px) {
    .background-box{
        width: 60vh; 
        margin: 0 auto; 
    }
    .huge-heading{
    font-size: 2.5em; 
    } 
    .huge-text {
    font-size: 1.5em; 
  }
  }
  </style>
  