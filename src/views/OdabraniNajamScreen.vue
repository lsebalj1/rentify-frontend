<template>
    <div>
      <h3 class="mt-3 smjestaj-ime">{{ najamIme }}</h3>
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
  .smjestaj-ime {
    text-align: left;
    margin-left: 7%;
  }
  </style>
  