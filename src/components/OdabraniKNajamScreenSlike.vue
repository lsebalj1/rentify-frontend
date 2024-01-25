<template>
    <div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/hotel.jpg" class="img-fluid img-with-shadow" alt="Big Left Image">
          </div>
          <div class="col-md-3 text-center">
            <img src="../assets/hotel.jpg" class="img-fluid img-with-shadow mb-2" alt="Small Image 1">
            <img src="../assets/hotel.jpg" class="img-fluid img-with-shadow" alt="Small Image 2">
          </div>
          <div class="col-md-3 text-right">
            <img src="../assets/hotel.jpg" class="img-fluid img-with-shadow mb-2" alt="Right Image 1">
            <img src="../assets/hotel.jpg" class="img-fluid img-with-shadow" alt="Right Image 2">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OdabraniKNajamScreenSlike",
  };
  </script>
  
  <style scoped>
  .smjestaj-ime {
    text-align: left;
    margin-left: 7%;
  }
  
  .img-with-shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.237); 
  }

  </style>
  