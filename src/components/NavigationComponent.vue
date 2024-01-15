<template>
  <nav class="px-2 navbar navbar-expand-lg navbar-light custom-navbar">
    <router-link class="navbar-brand" to="home">Logo</router-link>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav"> 
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <router-link :to="link.to" class="nav-link text-light">{{ link.label }}</router-link>
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
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  data() {
    return {
      links: [
        { label: 'Home', to: 'home' }, 
        { label: 'Smjestaji', to: 'smjestaji' },
        { label: 'Najam', to: 'najam' },
        //{ label: 'Ostalo', to: 'ostalo' },
      ],
    };
  },
};
</script>

<style scoped>
.custom-navbar {
  background-color: #235762; 
}
</style>
