<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="mt-3 najam-ime">{{ najamIme }}</h3>
            <router-link to="/popup-form" v-slot="{ navigate }">
                <button class="rezerviraj-button" @click="navigate" role="link"> Rezerviraj</button>
            </router-link>
    </div>
      
      <OdabraniNajamScreenSlike></OdabraniNajamScreenSlike>
      <OdabraniNajamDescription></OdabraniNajamDescription>
    </div>
  </template>
  
  <script>

import OdabraniNajamScreenSlike from '@/components/OdabraniNajamScreenSlike.vue';
import OdabraniNajamDescription from '@/components/OdabraniNajamDescription.vue';

  export default {
    name: "OdabraniSmjestajScreen",
    components: {
    OdabraniNajamScreenSlike,
    OdabraniNajamDescription
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
  