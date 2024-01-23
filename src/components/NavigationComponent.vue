<template>
  <nav class="px-2 navbar navbar-expand-lg navbar-light custom-navbar">
    <router-link class="navbar-brand" to="home">Rentify</router-link>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav"> 
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <router-link :to="link.to" class="nav-link text-light" @click="debugClick">{{ link.label }}</router-link>
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
  methods: {
    debugClick() { 
      // eslint-disable-next-line
      //debugger
      console.log('Link clicked!');
    },
  },
};
</script>

<style scoped>
.custom-navbar {
  background-color: #235762; 
}

@import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');
.navbar-brand {
    font-family: 'Nova Square', sans-serif;
    color: lightcyan;
}

</style>
