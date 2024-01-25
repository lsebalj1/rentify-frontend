<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <router-link to="/k-najam" class="image-container" :style="{ backgroundImage: 'url(' + require('../assets/hotel.jpg') + ')' }">
          <div class="overlay">
            <div class="text">
              <h2>Kratkoročno</h2>
            </div>
          </div>
        </router-link>
      </div>

      <div class="col-md-6">
        <router-link to="/d-najam" class="image-container" :style="{ backgroundImage: 'url(' + require('../assets/rent.jpg') + ')' }">
          <div class="overlay">
            <div class="text">
              <h2>Dugoročno</h2>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        leftImage: 'path/to/left-image.jpg',
        rightImage: 'path/to/right-image.jpg',
      };
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
    height: 40vh; 
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;
    display: block; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.237);
  }

  .image-container:hover {
    filter: brightness(80%);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .text {
    color: #fff;
    text-align: center;
  }
  </style>
  