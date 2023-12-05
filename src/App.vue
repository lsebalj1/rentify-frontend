<template>
  <div>
    <NavigationComponent />
   <FlexList></FlexList>
  </div>
</template>

<script>
import FlexList from './components/FlexList.vue'; 
import NavigationComponent from './components/NavigationComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FlexList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightcyan;
  background-color: #2c3e50;
}
</style>
