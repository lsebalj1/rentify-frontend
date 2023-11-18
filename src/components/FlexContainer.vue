<template>
    <div class="flexible-container">
      <img :src="imageSrc" alt="Image" class="container-image" />
      <div class="container-content">
        <h2 class="container-name">{{ name }}</h2>
        <p class="container-description">{{ description }}</p>
      </div>
      <button class="container-button" @click="buttonClick">Click me</button>
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
      },
    },
  };
  </script>
  
  <style scoped>
  .flexible-container {
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 16px;
  }
  
  .container-image {
    width: 100px; /* Adjust the size as needed */
    height: 100px; /* Adjust the size as needed */
    object-fit: cover;
    margin-right: 16px;
    border-radius: 4px;
  }
  
  .container-content {
    flex-grow: 1;
  }
  
  .container-name {
    font-size: 1.2em;
    margin-bottom: 8px;
  }
  
  .container-description {
    margin-bottom: 16px;
  }
  
  .container-button {
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .container-button:hover {
    background-color: #2980b9;
  }
  </style>
  