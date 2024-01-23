<template>
  <div id="app">
    <NavigationComponent />
    <router-view/>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
  },
};
</script>
