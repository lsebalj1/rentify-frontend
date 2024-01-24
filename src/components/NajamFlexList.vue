<template>
    <div class="flex-list">
      <FlexContainer
        v-for="(item, index) in items"
        :key="index"
        :imageSrc="require(`../assets/${item.image}`)"
        :name="item.name"
        :description="item.description"
      />
    </div>
  </template>
  
  <script>
  import FlexContainer from './NajamFlexContainer.vue';
  
  export default {
    components: {
      FlexContainer,
    },
    data() {
      return {
        items: [
          { name: 'App Deluxe Apartment', description: 'Description 1', image: 'rent.jpg' },
          { name: 'Cozy Mountain Retreat Suites', description: 'Description 2', image: 'rent.jpg' },
          { name: 'Luxury Urban Escape Residences', description: 'Description 3', image: 'rent.jpg' },
          { name: 'Tranquil Riverside Haven Apartments', description: 'Description 4', image: 'rent.jpg' },
          { name: 'Seaside Elegance Suites', description: 'Description 5', image: 'rent.jpg' },
          { name: 'City Chic Hideaway Studios', description: 'Description 6', image: 'rent.jpg' },
          { name: 'App Rustic Countryside Cottage', description: 'Description 7', image: 'rent.jpg' },
          { name: 'Serenity View Boutique Residences', description: 'Description 8', image: 'rent.jpg' },
          { name: 'Mountain Lodge Retreat', description: 'Description 9', image: 'rent.jpg' },
          { name: 'App Skyline Penthouse Suite', description: 'Description 10', image: 'rent.jpg' },
          { name: 'Enchanting Forest Hideout Studios', description: 'Description 11', image: 'rent.jpg' },
          { name: 'Sea Breeze Serendipity Apartments', description: 'Description 12', image: 'rent.jpg' },
          { name: 'Elegant Cityscape Loft', description: 'Description 13', image: 'rent.jpg' },
          { name: 'Waterside Serenity Suites', description: 'Description 14', image: 'rent.jpg' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .flex-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 70px;
    background-color: rgb(249, 249, 249);
  }
  
  .FlexContainer {
      white-space: nowrap;
  }
  
  .item-name {
    white-space: nowrap;
  }
  
  @media (min-width: 768px) {
    .flex-list {
      justify-content: space-between;
      max-width: 100%; 
    }
  }
  
  @media (min-width: 576px) and (max-width: 768px) {
    .flex-list {
      justify-content: space-around;
      max-width: 90%; 
    }
  }
  
  @media (max-width: 576px) {
    .flex-list {
      justify-content: center;
      max-width: 100%; 
    }
  
    .FlexContainer {
      width: 100%;
    }
   
  }
  </style>
  