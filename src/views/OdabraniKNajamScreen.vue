<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="mt-3 smjestaj-ime">{{ smjestajIme }}</h3>
      <router-link to="/popup-form" v-slot="{ navigate }">
        <button class="rezerviraj-button" @click="navigate" role="link"> Rezerviraj</button>
      </router-link>
    </div>
    <OdabraniKNajamScreenSlike></OdabraniKNajamScreenSlike>
    <OdabraniKNajamDescription></OdabraniKNajamDescription>
  </div>
</template>

<script>
//import BootstrapCalendar from '../components/BootstrapCalendar.vue';
import OdabraniKNajamDescription from '../components/OdabraniKNajamDescription.vue';
import OdabraniKNajamScreenSlike from '../components/OdabraniKNajamScreenSlike.vue';


export default {
  name: "OdabraniKNajamScreen",
  components: {
    OdabraniKNajamScreenSlike,
    OdabraniKNajamDescription,
    //BootstrapCalendar,
  },
  data() {
    return {
      smjestajIme: 'Apartment Name',
    };
  },
};
</script>

<style scoped>

.d-flex{
  margin-left: 7%;
  margin-right: 7%;
}

.smjestaj-ime {
  text-align: left;
}

.rezerviraj-button{
    background-color: #173c43;
    margin-top: 16px;
    color: lightcyan;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px 20px;
    font-size: 18px;
}
</style>
