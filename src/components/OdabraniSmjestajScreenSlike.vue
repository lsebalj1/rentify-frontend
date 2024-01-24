<template>
    <div>
      <h3 class="mt-3 smjestaj-ime">{{ smjestajIme }}</h3>
  
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/hotel.jpg" class="img-fluid" alt="Big Left Image">
          </div>
          <div class="col-md-3 text-center">
            <img src="../assets/hotel.jpg" class="img-fluid mb-2" alt="Small Image 1">
            <img src="../assets/hotel.jpg" class="img-fluid" alt="Small Image 2">
          </div>
          <div class="col-md-3 text-right">
            <img src="../assets/hotel.jpg" class="img-fluid mb-2" alt="Right Image 1">
            <img src="../assets/hotel.jpg" class="img-fluid" alt="Right Image 2">
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "OdabraniSmjestajScreenSlike",
  data() {
    return {
        smjestajIme: 'Apartment Name',
    };
  },
};
</script>

<style scoped>
.smjestaj-ime{
    text-align: left;
    margin-left: 7%;
}
</style>