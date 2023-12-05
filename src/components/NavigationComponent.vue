<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Your Logo</router-link>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-r"> 
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <router-link :to="link.to" class="nav-link">{{ link.label }}</router-link>
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 
// Import Bootstrap JS 
import 'bootstrap';  

export default {
  data() {
    return {
      links: [
        { label: 'Site 1', to: '/' },
        { label: 'Site 2', to: '/' },
        { label: 'Site 3', to: '/' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
