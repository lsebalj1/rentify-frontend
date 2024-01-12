<template>
  <div class="flex-list">
    <FlexContainer
      v-for="(item, index) in items"
      :key="index"
      :imageSrc="require('../assets/logo.png')"
      :name="item.name"
      :description="item.description"
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
      items: [
        { name: 'Item 1', description: 'Description 1' },
        { name: 'Item 2', description: 'Description 2' },
        { name: 'Item 3', description: 'Description 3' },
        { name: 'Item 4', description: 'Description 4' },
        { name: 'Item 5', description: 'Description 5' },
        { name: 'Item 6', description: 'Description 6' },
        { name: 'Item 7', description: 'Description 7' },
        { name: 'Item 8', description: 'Description 8' },
        { name: 'Item 9', description: 'Description 9' },
        { name: 'Item 10', description: 'Description 10' },
        { name: 'Item 11', description: 'Description 11' },
        { name: 'Item 12', description: 'Description 12' },
        { name: 'Item 13', description: 'Description 13' },
        { name: 'Item 14', description: 'Description 14' },
        { name: 'Item 15', description: 'Description 15' },
      ],
    };
  },
};
</script>

<style scoped>
.flex-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 70px;
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

  FlexContainer {
    width: 100%;
  }
}
</style>
