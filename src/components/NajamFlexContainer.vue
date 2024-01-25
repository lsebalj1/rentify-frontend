<template>
    <div class="flexible-container">
      <img :src="imageSrc" alt="Image" class="container-image" />
      <div class="container-content">
        <h2 class="container-name">{{ name }}</h2>
        <p class="container-description">{{ description }}</p>
      </div>
      <button class="container-button" @click="buttonClick">Visit</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    methods: {
      buttonClick() {
        // Handle button click
        console.log('Button clicked!');
        this.$router.push('/odabrani-najam');
      },
    },
  };
  </script>
  
  <style scoped>
  .flexible-container {
    background-color: rgba(135, 200, 203, 0.505);
    display: flex;
    align-items: start;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 16px 8px;
    max-width: 600px; 
    margin: 0 auto;
    margin-bottom: 16px;
    width: 100%; 
    min-width: 45%; 
    box-sizing: border-box; 
    height: 30vh;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.237);
  }
  
  .container-image {
    width: 200px;
    height: 100%;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 4px;
    align-self: center; 
  }
  
  .container-content {
    flex-grow: 1;
  }
  
  .container-name, .container-description {
    text-align: justify;
    margin-right: 8px;
  }
  
  .container-name {
    font-size: 1em;
    margin-bottom: 40px;
    margin-top: 0; 
    
  }
  
  .container-description {
    font-size: 0.6em;
    margin-bottom: 8px;
  }
  
  .container-button {
    padding: 8px 16px;
    background-color: #173c43;
    color: lightcyan;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .container-button:hover {
    background-color: #2980b9;
  }
  </style>
  