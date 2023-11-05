<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RentifyComponent />
  </div>
</template>


<script>
import RentifyComponent from './components/RentifyComponent.vue'

export default {
  name: 'App',
  components: {
    RentifyComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
