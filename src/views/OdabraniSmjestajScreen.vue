<template>
  <div>
    <h3 class="mt-3 smjestaj-ime">{{ smjestajIme }}</h3>
    <OdabraniSmjestajScreenSlike></OdabraniSmjestajScreenSlike>
    <OdabraniSmjestajDescription></OdabraniSmjestajDescription>
  </div>
</template>

<script>
//import BootstrapCalendar from '../components/BootstrapCalendar.vue';
import OdabraniSmjestajDescription from '../components/OdabraniSmjestajDescription.vue';
import OdabraniSmjestajScreenSlike from '../components/OdabraniSmjestajScreenSlike.vue';


export default {
  name: "OdabraniSmjestajScreen",
  components: {
    OdabraniSmjestajScreenSlike,
    OdabraniSmjestajDescription,
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
.smjestaj-ime {
  text-align: left;
  margin-left: 7%;
}
</style>
