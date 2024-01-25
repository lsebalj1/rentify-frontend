<template>
  <div class="form-container">
    <form>
      <div class="form-group row">
        <label for="ime" class="col-sm-2 col-form-label">Ime</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="ime" placeholder="Ime">
        </div>
      </div>
      <div class="form-group row">
        <label for="prezime" class="col-sm-2 col-form-label">Prezime</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="prezime" placeholder="Prezime">
        </div>
      </div>
      <div class="form-group row">
        <label for="Email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="email" placeholder="email@example.com">
        </div>
      </div>
      <div class="form-group row">
        <label for="brojOsoba" class="col-sm-2 col-form-label">Osoba</label>
        <div class="col-sm-10">
          <select class="form-control form-control-sm form-control-custom" id="brojOsoba">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="od" class="col-sm-2 col-form-label">Od</label>
        <div class="col-sm-10">
          <input type="date" class="form-control" id="od">
        </div>
      </div>
      <div class="form-group row">
        <label for="do" class="col-sm-2 col-form-label">Do</label>
        <div class="col-sm-10">
          <input type="date" class="form-control" id="do">
        </div>
      </div>
      <div class="form-group row">
        <label for="komentari" class="col-sm-2 col-form-label">Komentari</label>
        <div class="col-sm-10">
          <textarea class="form-control" id="komentari" rows="3"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10 offset-sm-2">
          <button type="submit" class="btn btn-primary" style="background-color: #173c43;">Pošalji</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RezervirajPopupForm',
};
</script>

<style scoped>
.form-container {
  width: 40%;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 20px;
}

.form-control-custom {
  width: 20%;
}
</style>
