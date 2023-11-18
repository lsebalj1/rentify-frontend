<template>
    <div>
      <FlexContainer
        :imageSrc="require('../assets/logo.png')"
        :name="itemNames[0]"
        :description="itemDescriptions[0]"
      />
      <div class="razmak"></div>
      <FlexContainer
        :imageSrc="require('../assets/logo.png')"
        :name="itemNames[1]"
        :description="itemDescriptions[1]"
      />
      <div class="razmak"></div>
      <FlexContainer
        :imageSrc="require('../assets/logo.png')"
        :name="itemNames[2]"
        :description="itemDescriptions[2]"
      />
      <div class="razmak"></div>
      <FlexContainer
        :imageSrc="require('../assets/logo.png')"
        :name="itemNames[3]"
        :description="itemDescriptions[3]"
      />
    </div>
</template>
  
  <script>
  import FlexContainer from './FlexContainer.vue';
  
  export default {
    components: {
      FlexContainer,
    },
    data() {
      return {
        itemNames: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        itemDescriptions: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .razmak {
    margin-top: 10px; 
  }
  </style>
  