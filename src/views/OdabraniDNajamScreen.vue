<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="mt-3 najam-ime">{{ najamIme }}</h3>
            <router-link to="/popup-form" v-slot="{ navigate }">
                <button class="rezerviraj-button" @click="navigate" role="link"> Rezerviraj</button>
            </router-link>
    </div>
      
      <OdabraniDNajamScreenSlike></OdabraniDNajamScreenSlike>
      <OdabraniDNajamDescription></OdabraniDNajamDescription>
    </div>
  </template>
  
  <script>

import OdabraniDNajamScreenSlike from '@/components/OdabraniDNajamScreenSlike.vue';
import OdabraniDNajamDescription from '@/components/OdabraniDNajamDescription.vue';

  export default {
    name: "OdabraniDNajamScreen",
    components: {
      OdabraniDNajamScreenSlike,
      OdabraniDNajamDescription
},
    data() {
      return {
        najamIme: 'Najam Name',
      };
    },
  };
  </script>
  
  <style scoped>
.d-flex{
  margin-left: 7%;
  margin-right: 7%;
}

.najam-ime {
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
  