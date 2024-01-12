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
  margin: 16px 8px;
  max-width: 600px; 
  margin: 0 auto;
  margin-bottom: 16px;
  width: 100%; 
  min-width: 45%; 
  box-sizing: border-box; 
  height: 30vh;
}

.container-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 8px;
  border-radius: 4px;
}

.container-content {
  flex-grow: 1;
}

.container-name {
  font-size: 1.2em;
  margin-bottom: 4px;
}

.container-description {
  margin-bottom: 8px;
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
