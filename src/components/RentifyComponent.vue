<template>
    <div>
      <h1>Rentify Component</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h2>{{ rentifyData.name }}</h2>
        <p>{{ rentifyData.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        rentifyData: null,
        loading: true,
      };
    },
    mounted() {
      axios.get('http://localhost:3001/rentify') 
        .then((response) => {
          this.rentifyData = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.loading = false;
        });
    },

  };
  </script>
  