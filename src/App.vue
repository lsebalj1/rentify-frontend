<template>
  <div>
    //nadi kako router injecta viewove u taj div
    <HomeScreen />
  </div>
</template>

<script>
import HomeScreen from './views/HomeScreen.vue';

export default {
  name: 'App',
  components: {
    HomeScreen,
  },
};
</script>

<style>
</style>
